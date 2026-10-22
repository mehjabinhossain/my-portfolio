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

          <p className="text-lg text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I am a Computer Science and Engineering graduate from the University of Asia Pacific with a focus on trustworthy AI for healthcare and engineering. During my undergraduate studies I published five peer-reviewed papers, including a first-author paper presented at IEEE ICCIT 2025, and co-authored work in a Q1 Springer Nature journal (Impact Factor 11.3), IEEE Access (Scopus Q1) and Springer’s Scopus-indexed Studies in Computational Intelligence. I was named to the Vice Chancellor’s List twice and the Dean’s List, and won various awards thoughout my entire study journey. Alongside my studies, I served as Class Representative for four years, was Co-Convener of the BASIS Student Forum, and gained remote industry experience from US-based companies</p>

          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
