import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mehjabin</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Hossain</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a driven and curious professional who thrives on solving challenges
            and finding smarter ways to work. For the past six years, I’ve led projects
            as a project manager, using a wide range of tools to keep things on track
            and deliver results that matter. I specialize in technical work, especially
            SEO, where I help boost online visibility and engagement. Teaching is
            another big part of who I am. I love sharing what I know and making
            complex ideas easier to understand. Above all, I value honesty,
            collaboration, and doing work I can be proud of.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
