import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              As a tech-savvy and innovative professional with various certifications
              in the latest technology, I have a passion for exploring new ideas
              and creating solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems,
              and I'm constantly learning new technologies and techniques to stay
              at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT CARD GRID */}
          <div className="grid grid-cols-1 gap-6">
            {/* Project Management Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
            {/* HRIS Manager Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    HR Information Systems (HRIS) Manager
                  </h4>
                  <p className="text-muted-foreground">
                    Specializing in the design, implementation, and management
                    of integrated HR systems to automate workflows, ensure data
                    integrity, and deliver analytics-driven workforce solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Strategist Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Organic Growth & SEO Strategist
                  </h4>
                  <p className="text-muted-foreground">
                    Adds a growth focus on online visibility, aligning with
                    business metrics and marketing KPIs.
                  </p>
                </div>
              </div>
            </div>
            

            {/* Academic English Instructor Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Academic English Instructor
                  </h4>
                  <p className="text-muted-foreground">
                    Highlights focus on reading, writing, listening, and speaking
                    for academic and professional goals.
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
