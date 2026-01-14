import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-placeholder.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float delay-300" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-float delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Enlarged Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Bhuvaneshwari Rebba"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 profile-image object-cover animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 text-glow">
            Bhuvaneshwari Rebba
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-2">
            B.Tech Computer Science & Engineering
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
            Software Engineer | MERN Stack Developer | AI Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              asChild
            >
              <a href="https://github.com/Bhuvaneshwari244/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              asChild
            >
              <a href="https://in.linkedin.com/in/bhuvaneshwari-rebba-650800280" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
            <a href="mailto:bhuvaneshwaritsms010@gmail.com" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="hidden md:inline">bhuvaneshwaritsms010@gmail.com</span>
            </a>
            <a href="tel:+919701473371" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="hidden md:inline">+91-9701473371</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
