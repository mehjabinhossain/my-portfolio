import { Code, Server, Crop, Cpu } from "lucide-react";

const certifications = [
  {
    icon: <Code size={32} />,
    image: " ux2.png",
    title: "UX Design Process: Empathize, Define, and Ideate",
    description:
      "This course guides you through the foundational steps of UX design. Through practical exercises, you'll learn to understand user perspectives and generate innovative ideas to address user challenges effectively",
    link: "https://www.coursera.org/account/accomplishments/certificate/N8PBNG5SU8XB",
  },
  {
    icon: <Server size={32} />,
    image: "./projects/bitsofpc.jpeg",
    title: "The Bits and Bytes of Computer Networking",
    description:
      "This course provides a comprehensive overview of networking concepts, protocols, and technologies, enabling learners to understand the fundamental principles underlying modern computer networks.",
    link: "https://www.coursera.org/account/accomplishments/certificate/R6AFB7HDEXXD",
  },
  {
    icon: <Crop size={32} />,
    image: "./projects/ux1.jpg",
    title: "Foundations of User Experience (UX) Design",
    description:
      "This is the introduction to the principles, processes, and methodologies of UX design, equipping participants with essential knowledge and skills to create intuitive, user-centered digital experiences.",
    link: "https://www.coursera.org/account/accomplishments/certificate/HB3TJB9JH95K",
  },
  {
    icon: <Cpu size={32} />,
    image: "./projects/tec2.jpeg",
    title: "Technical Support Fundamentals",
    description:
      "Providing a thorough understanding of essential concepts and skills necessary for effective technical support roles, covering troubleshooting techniques, customer communication strategies, and problem-solving methodologies.",
    link: "https://www.coursera.org/account/accomplishments/certificate/CJJ2BV87AVQS",
  },
];

// Image-only style certifications (events/awards)
const imageCertifications = [
  {
    image: "./projects/ecdc.jpg",
    title: "1st Runner Up",
    description:
      "IDEA Season 2.0, a business plan competition where students pitch creative business ideas.",
  },
  {
    image: "./projects/pet win.jpg",
    title: "2nd Runners-Up",
    description:
      "Placed second runner-up at the One Stop Idea competition organized by ECDC.",
  },
  {
    image: "./projects/Heading.png",
    title: "Scavenger Hunt Champion",
    description:
      "Winner of the English Language Club's campus-wide scavenger hunt.",
  },
];

export const CertificationSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Certifications</h2>

        {/* First 4 styled cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 border border-white/10 hover:shadow-lg transition"
            >
              <div className="text-primary">{cert.icon}</div>
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold text-white text-center">{cert.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-medium hover:underline mt-2"
              >
                See Certification
              </a>
            </div>
          ))}
        </div>

        {/* Event/Award images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imageCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden shadow-md border border-white/10"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
