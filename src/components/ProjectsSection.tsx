import { Leaf, FileSearch, Cloud, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Detection and Recommendations in Peanut Farming",
    description: "Developing a deep learning web application to detect various plant diseases (leaf, stem, roots) and provide treatment recommendations using backend integration.",
    tools: ["Python", "Deep Learning", "TensorFlow", "Web Technologies"],
    icon: Leaf,
    color: "primary",
    status: "In Progress",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description: "Developed a machine learning-based tool that analyzes resumes for keyword matching and formatting to improve ATS compatibility and visibility.",
    tools: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    icon: FileSearch,
    color: "accent",
    status: "Completed",
  },
  {
    title: "Automated Weather Alert System",
    description: "Created a script to fetch real-time weather data and send automated email reminders for rain or cloudy weather using API integration.",
    tools: ["Python", "OpenWeather API", "Gmail API", "Automation"],
    icon: Cloud,
    color: "primary",
    status: "Completed",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-6 flex flex-col group transition-all duration-700
                hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30
                ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-1"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${project.color}/10 rounded-xl 
                  group-hover:scale-110 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-${project.color} group-hover:to-accent transition-all duration-300`}>
                  <project.icon className={`h-6 w-6 text-${project.color} group-hover:text-white transition-colors`} />
                </div>
                <span className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                  project.status === "Completed" 
                    ? "bg-green-100 text-green-700 group-hover:bg-green-500 group-hover:text-white" 
                    : "bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white animate-pulse"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 group-hover:text-foreground/80 transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md
                      hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${toolIndex * 30}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href="https://github.com/Bhuvaneshwari244/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
