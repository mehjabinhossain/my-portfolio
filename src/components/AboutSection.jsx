import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Force side-by-side layout even on mobile */}
        <div className="flex flex-row flex-wrap justify-between items-start gap-6 animate-fade-in">
          {/* LEFT COLUMN: TEXT */}
          <div className="w-[100%] md:w-[48%] space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              As a tech-savvy and innovative professional with various certifications
              in the latest technology, I have a passion for exploring new ideas
              and creating solutions.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems,
              and I'm constantly learning new technologies and techniques to stay
              at the forefront of the ever-evolving web landscape.
            </p>

            <div className="pt-4">
              <a href="#contact" className="cosmic-button transition hover:scale-105">
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURE CARDS */}
          <div className="w-[100%] md:w-[48%] space-y-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Project Management",
                description: "Leading projects from conception to completion with agile methodologies.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "HR Information Systems (HRIS) Manager",
                description:
                  "Specializing in the design, implementation, and management of integrated HR systems to automate workflows, ensure data integrity, and deliver analytics-driven workforce solutions.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Organic Growth & SEO Strategist",
                description:
                  "Adds a growth focus on online visibility, aligning with business metrics and marketing KPIs.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Academic English Instructor",
                description:
                  "Highlights focus on reading, writing, listening, and speaking for academic and professional goals.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="gradient-border p-6 rounded-xl bg-white/5 border border-white/10 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-white">{card.title}</h4>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
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
