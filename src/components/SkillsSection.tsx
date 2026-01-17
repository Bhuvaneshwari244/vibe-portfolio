import { Code, Globe, Database, Wrench } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`skill-card group transition-all duration-500 
                hover:shadow-xl hover:-translate-y-2 hover:border-primary/30
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 bg-${skill.color}/10 rounded-xl w-fit mb-4 
                group-hover:scale-110 group-hover:rotate-6 group-hover:bg-${skill.color}/20 transition-all duration-300`}>
                <skill.icon className={`h-8 w-8 text-${skill.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20
                      hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
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
