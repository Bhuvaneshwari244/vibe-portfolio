import { Target, Heart, Globe } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Career Objective */}
          <div
            className={`glass-card p-8 mb-8 transition-all duration-700 delay-100
              hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To secure a dynamic position as a Software Engineer. I am eager to leverage my collaborative spirit,
                  problem-solving abilities, and strong technical foundation in Python, Data Structures, and AI to contribute to
                  organizational growth and deliver impactful technical solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Attributes & Languages */}
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`glass-card p-6 transition-all duration-700 delay-200
                hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 hover:border-accent/30 group
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-6 w-6 text-accent group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Personal Attributes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Calm under pressure
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Strong Teamwork
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Problem-solving mindset
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`glass-card p-6 transition-all duration-700 delay-300
                hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 group
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Languages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      English (Fluent)
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Telugu (Native)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
