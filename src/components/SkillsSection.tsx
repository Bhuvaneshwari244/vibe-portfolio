import { Code, Globe, Database, Wrench } from "lucide-react";

const skills = [
  {
    category: "Technical Skills",
    icon: Code,
    items: ["C", "Python", "JavaScript", "Data Structures"],
    color: "primary",
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["MongoDB", "Express.js", "React", "Node.js", "HTML", "CSS"],
    color: "accent",
  },
  {
    category: "Database",
    icon: Database,
    items: ["SQL", "MongoDB", "Database Design"],
    color: "primary",
  },
  {
    category: "Tools & IDEs",
    icon: Wrench,
    items: ["Git", "GitHub", "Visual Studio Code", "API Integration"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="skill-card animate-slide-in-left"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`p-4 bg-${skill.color}/10 rounded-xl w-fit mb-4`}>
                <skill.icon className={`h-8 w-8 text-${skill.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
