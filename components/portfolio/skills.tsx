import {
  Figma,
  Palette,
  Code2,
  Layers,
  PenTool,
  Smartphone,
  Monitor,
  Sparkles,
} from "lucide-react";

const skills = [
    {
    category: "Web Development",
    items: [
      { name: "HTML", icon: Monitor },
      { name: "CSS", icon: Palette },
      { name: "JavaScript(Basics)", icon: Code2 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", icon: Sparkles },
      { name: "VS Code", icon: Monitor },
      { name: "Responsive Design", icon: Smartphone },
    ],
  },
   {
    category: "Learning and Development",
    items: [
      { name: "Python", icon: Sparkles },
      { name: "Debugging", icon: Monitor },
      { name: "Digital Tools", icon: Code2 },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Expertise</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The creative toolkit I use to bring ideas to life, from concept to
            final product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon size={20} />
                    </div>
                    <span className="text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
