import { Leaf, FileSearch, Cloud, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 flex flex-col animate-slide-in-left group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${project.color}/10 rounded-xl group-hover:scale-110 transition-transform`}>
                  <project.icon className={`h-6 w-6 text-${project.color}`} />
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === "Completed" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full group" asChild>
                <a href="https://github.com/Bhuvaneshwari244/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
