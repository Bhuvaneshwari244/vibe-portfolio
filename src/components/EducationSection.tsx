import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Anurag Engineering College, Ananthagiri, Kodad",
    year: "2022 - 2026",
    grade: "CGPA: 8.63",
    current: true,
  },
  {
    degree: "Intermediate",
    field: "MPC",
    institution: "Telangana Model College - Munagala (V & M), Suryapet",
    year: "2020 - 2022",
    grade: "Percentage: 88.1%",
    current: false,
  },
  {
    degree: "SSC",
    field: "Secondary Education",
    institution: "Telangana Model School - Munagala (V & M), Suryapet",
    year: "2019 - 2020",
    grade: "GPA: 9.8",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

            {education.map((edu, index) => (
              <div
                key={edu.degree + edu.year}
                className="relative pl-0 md:pl-20 mb-8 last:mb-0 animate-slide-in-left"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block shadow-lg" />

                <div className={`glass-card p-6 ${edu.current ? 'border-l-4 border-l-primary' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {edu.current && (
                        <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                          Current
                        </span>
                      )}
                      <span className="text-muted-foreground">{edu.year}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-accent font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
