import { Briefcase, Calendar } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Software Engineer",
    company: "Yugayantra Retail OPC Pvt Ltd",
    duration: "2026",
    type: "Internship",
    description: "Working on enterprise software solutions and contributing to retail technology systems.",
  },
  {
    role: "Python Developer",
    company: "Codetech IT Solutions",
    duration: "2025",
    type: "Internship",
    description: "Developed Python-based applications and automation scripts, working with AI/ML algorithms.",
  },
  {
    role: "SQL Intern",
    company: "InTrainz & Plasmid",
    duration: "2024",
    type: "Internship",
    description: "Gained expertise in SQL database management, query optimization, and data analysis.",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`glass-card p-6 transition-all duration-700
                hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 group
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 
                    group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-16 group-hover:text-foreground/80 transition-colors">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
