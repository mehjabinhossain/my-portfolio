
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Executive",
    company: "AZ Simple Solution",
    period: "2019 – 2020",
    description:
      "I took part in daily standups, sprint planning, and demos to keep the team aligned. I tracked tasks and progress in Jira for the documentation. I worked closely with developers, designers, and QA to solve issues quickly and keep projects on track. I also used Figma to support documentation and created weekly updates, roadmaps, and milestone reports.",
  },
  {
    role: "Assistant Project Manager",
    company: "AZ Simple Solution",
    period: "2020 – 2022",
    description:
      "I helped manage project timelines, tasks, and goals for client-facing software with support from senior team members. I kept Jira boards organized, wrote user stories, meeting notes, and sprint documents while following Agile methods. I also worked closely with developers and designers to make sure everyone understood their tasks. Sometimes, I supported technical work too when needed.",
  },
  {
    role: "HRIS Manager",
    company: "BD Plus IT",
    period: "2022 – 2023",
    description:
      "I led the setup and customization of HR systems to match the company’s workflow. I managed the integration of HRIS with payroll, attendance, ERP, and recruitment tools using secure APIs. Also built automated workflows to handle onboarding, leave tracking, and performance reviews smoothly.",
  },
  {
    role: "SEO Executive",
    company: "eChithi",
    period: "2023 – 2024",
    description:
      "Led technical SEO campaigns, backlink optimization, and UX-driven content improvements.",
  },
  {
    role: "English Teacher",
    company: "RDM English School",
    period: "2024",
    description:
      "Created and taught English lessons focused on test prep and academic skills. Checked students' progress through regular evaluations and gave personalized feedback. Helped them improve in reading, writing, speaking, and listening, and guided them to reach their language goals.",
  },
  {
    role: "Project Manager",
    company: "DZ Construction",
    period: "2024 – 2025",
    description:
      "Implemented Agile workflows using Jira. Oversaw cross-functional teams across marketing and operations while managing client agreements. Led end-to-end delivery of construction tech projects by integrating scheduling tools and digital reporting. Streamlined procurement, budgeting, and on-site coordination through centralized digital dashboards.",
  },
  {
    role: "Senior Project Manager",
    company: "Ameri Lux",
    period: "2025",
    description:
      "Managed Agile delivery of high-end digital solutions for a luxury brand using Jira for sprint planning and task tracking. Oversaw backend architecture and system integrations, including CRM and paid Outlook workflows. Led cross-functional teams and delivered real-time executive dashboards using Power BI.",
  },
];

const Card = ({ exp, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="relative group bg-white/5 border border-white/10 backdrop-blur-md p-6 pt-10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-500 transition-all duration-300 min-h-[240px]"
  >
    <div className="absolute top-2 right-3 z-10 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-sm whitespace-nowrap">
      {exp.period}
    </div>
    <h3 className="text-lg font-semibold text-purple-300 mb-1">{exp.company}</h3>
    <p className="text-sm font-medium text-white/90 mb-3">{exp.role}</p>
    <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>
    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-400 to-pink-500 rounded-b-lg" />
  </motion.div>
);

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gradient-to-bl from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Professional Journey
        </h2>

        <div className="relative">
          {/* Animated line */}
         <motion.svg
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
  viewport={{ once: true }}
  className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
  fill="none"
  viewBox="0 0 1000 600"
  preserveAspectRatio="none"
>
  {/* Path with arrow marker at the end */}
  <motion.path
    d="M 100 100 H 950 V 290 H 140 V 520 H 500"
    stroke="url(#gradient)"
    strokeWidth="2.5"
    strokeLinecap="round"
    markerEnd="url(#arrowhead)"
  />

  <defs>
    {/* Gradient for the stroke */}
    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0%" stopColor="#a855f7" />
      <stop offset="100%" stopColor="#ec4899" />
    </linearGradient>

    {/* Arrowhead definition */}
    <marker
      id="arrowhead"
      markerWidth="8"
      markerHeight="8"
      refX="6"
      refY="3"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M 0 0 L 6 3 L 0 6 Z" fill="#ec4899" />
    </marker>
  </defs>
</motion.svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-auto relative z-10">
            {experiences.slice(0, 3).map((exp, index) => (
              <Card key={index} exp={exp} delay={index} />
            ))}
            <div className="hidden md:block" />
            {experiences.slice(3, 5).map((exp, index) => (
              <Card key={index + 3} exp={exp} delay={index + 3} />
            ))}
            {experiences.slice(5).map((exp, index) => (
              <Card key={index + 5} exp={exp} delay={index + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
