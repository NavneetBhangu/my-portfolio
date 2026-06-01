import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "  InAmigos Foundation",
    location: "Work from home",
    period: "May 2026 - Present",
    description:
      "Assisted in web development tasks including NGO webpage creation, website analysis, UI improvements, and responsive web design using HTML & CSS.",
    skills: ["HTML", "CSS", "Responsive Web Design", "Front-End Development", "Website Analysis", "UI/UX Basics", "AI Website Generation", "Problem Solving", "Team Collaboration", "Communication"],
    current: true,
  },
  {
    title: "Training in Web Development",
    company: "Future Finders",
    location: "Phase 8B, Mohali",
    period: "June 2025 - July 2025",
    description:
      "Completed web development training focused on building responsive and user-friendly websites using HTML, CSS, and JavaScript. Gained practical experience in webpage structure, styling, responsive design, and basic front-end development concepts.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Front-End Development", "Web Development", "UI Design Basics", "Problem Solving", "Time Management", "Learning Agility"],
    current: false,
  },
];

const education = [
  {
    degree: "Bachelors in Computer Science Engineering",
    school: "IK. GUJRAL PUNJAB TECHNICAL UNIVERSITY, JALANDHAR",
    Institure: "IET Bhaddal Technical Campus",
    period: "2023 - 2027",
    description:
      "Currently pursuing B.Tech in Computer Science Engineering, developing a strong foundation in programming, web development, databases, software engineering, and problem-solving through coursework, projects, and practical learning experiences.",
  },
  {
    degree: "12th (PCM)",
    school: "GENIUS INTERNATIONAL PUBLIC SCHOOL",
    location: "Solkhian,Ropar",
    period: "2022-2023",
    description:
      "Completed Higher Secondary Education (12th) with Physics, Chemistry, and Mathematics (PCM), building a strong analytical and problem-solving foundation that supports technical learning in engineering.",
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-card" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Background</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my
            design philosophy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                W
              </span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  {exp.current && (
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  )}
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-medium text-foreground">
                        {exp.title}
                      </h4>
                      {exp.current && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm">
                E
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <h4 className="font-medium text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium text-sm mb-1">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-3 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
