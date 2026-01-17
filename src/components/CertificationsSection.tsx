import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import CertificateModal from "./CertificateModal";

interface Certificate {
  name: string;
  provider: string;
  date?: string;
  credentialUrl?: string;
  skills?: string[];
}

const certifications: Certificate[] = [
  { name: "Artificial Intelligence Fundamentals", provider: "IBM", skills: ["AI", "Machine Learning", "Neural Networks"] },
  { name: "Python Programming Certificate", provider: "Codetech IT Solutions", skills: ["Python", "Programming", "OOP"] },
  { name: "Web Development", provider: "Ad Infocom Systems", skills: ["HTML", "CSS", "JavaScript"] },
  { name: "SQL Certificate & Industrial Training", provider: "Plasmid", skills: ["SQL", "Database", "Data Management"] },
  { name: "Introduction to Prompt Engineering for Generative AI", provider: "LinkedIn Learning", skills: ["Prompt Engineering", "GenAI"] },
  { name: "Prompt Engineering: How to Talk to the AIs", provider: "LinkedIn Learning", skills: ["AI Communication", "Prompts"] },
  { name: "Prompting ChatGPT with Multimodal Techniques", provider: "LinkedIn Learning", skills: ["ChatGPT", "Multimodal AI"] },
  { name: "Introduction to Generative AI Studio", provider: "Simplilearn", skills: ["GenAI", "AI Tools"] },
  { name: "GenAI Powered Data Analytics Job Simulation", provider: "TATA", skills: ["Data Analytics", "GenAI", "Business Intelligence"] },
  { name: "Developer and Technology Job Simulation", provider: "Accenture", skills: ["Development", "Technology"] },
  { name: "Introduction to Generative AI", provider: "Coursera", skills: ["GenAI", "AI Fundamentals"] },
  { name: "Infosys Springboard Certificates", provider: "Infosys", skills: ["Professional Development"] },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertClick = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              onClick={() => handleCertClick(cert)}
              className={`glass-card p-4 flex items-start gap-3 cursor-pointer group
                transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20
                hover:border-primary/30 hover:-translate-y-1
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:scale-110 transition-all duration-300">
                <Award className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 shrink-0 group-hover:rotate-12" />
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CertificationsSection;
