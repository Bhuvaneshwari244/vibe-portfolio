import { Target, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Career Objective */}
          <div className="glass-card p-8 mb-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
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
            <div className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Personal Attributes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Calm under pressure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Strong Teamwork
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Problem-solving mindset
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Languages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      English (Fluent)
                    </li>
                    <li className="flex items-center gap-2">
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
