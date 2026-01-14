import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Artificial Intelligence Fundamentals", provider: "IBM" },
  { name: "Python Programming Certificate", provider: "Codetech IT Solutions" },
  { name: "Web Development", provider: "Ad Infocom Systems" },
  { name: "SQL Certificate & Industrial Training", provider: "Plasmid" },
  { name: "Introduction to Prompt Engineering for Generative AI", provider: "LinkedIn Learning" },
  { name: "Prompt Engineering: How to Talk to the AIs", provider: "LinkedIn Learning" },
  { name: "Prompting ChatGPT with Multimodal Techniques", provider: "LinkedIn Learning" },
  { name: "Introduction to Generative AI Studio", provider: "Simplilearn" },
  { name: "GenAI Powered Data Analytics Job Simulation", provider: "TATA" },
  { name: "Developer and Technology Job Simulation", provider: "Accenture" },
  { name: "Introduction to Generative AI", provider: "Coursera" },
  { name: "Infosys Springboard Certificates", provider: "Infosys" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass-card p-4 flex items-start gap-3 animate-slide-in-left hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
