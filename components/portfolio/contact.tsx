"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    await emailjs.send(
      "service_3e9uwdu",
      "template_eas9q4m",
      {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      "nPLJMM7DQV69cEamO"
    );

    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-24 bg-card" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:navneetbhangu772@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    navneetbhangu772@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Ropar,PUNJAB</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
  <h3 className="font-medium text-foreground mb-3">
    Connect
  </h3>

  <div className="flex gap-3 flex-wrap">
    {[
      {
        name: "LinkedIn",
        link:"https://www.linkedin.com/in/navneet-kaur-575b97219/",
      },
      {
        name: "GitHub",
        link: "https://github.com/NavneetBhangu",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/nav.neet_bhangu/",
      },
    ].map((social) => (
      <a
        key={social.name}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {social.name}
      </a>
    ))}
  </div>
</div>
</div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
    }
