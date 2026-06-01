import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16" id="about">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4">Hello, I&apos;m</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance">
              Navneet Kaur
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Digital Product Designer
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Aspiring software developer pursuing B.Tech in Computer Science Engineering, with growing experience in web development and programming. Enthusiastic about learning new technologies and creating impactful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#work">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Say Hello</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-xl">
                <Image
                  src="imagenav.jpeg"
                  alt="Navneet Kaur"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/30 rounded-full -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <Link
            href="#work"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
