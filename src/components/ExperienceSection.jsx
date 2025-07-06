import { motion } from "framer-motion";

const experiences = [
  {
    role: "Executive",
    company: "AZ Simple Solution",
    period: "2019 – 2020",
    description:
      "I took part in daily standups, sprint planning, and demos to keep the team aligned. I tracked tasks and progress in Jirafor the documentation. I worked closely with developers, designers, and QA to solve issues quickly and keep projects on track. I also used Figma to support documentation and created weekly updates, roadmaps, and milestone reports",
  },
  {
    role: "Assistant Project Manager",
    company: "AZ Simple Solution",
    period: "2020 – 2022",
    description:
      "I helped manage project timelines, tasks, and goals for client-facing software with support from senior team members. I kept Jira boards organized, wrote user stories, meeting notes, and sprint documents while following Agile methods. I also worked closely with developers and designers to make sure everyone understood their tasks. Sometimes, I supported technical work too when needed",
  },
  {
    role: "HRIS Manager",
    company: "BD Plus IT",
    period: "2022 – 2023",
    description:
      "I led the setup and customization of HR systems to match the company’s workflow. I managed the integration of HRIS with payroll, attendance, ERP, and recruitment tools using secure APIs. Also built automated workflows to handle onboarding, leave tracking, and performance reviews smoothly.",
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
  {
    role: "English Teacher",
    company: "RDM English School",
    period: "2024",
    description:
      "Created and taught English lessons focused on test prep and academic skills. Checked students' progress through regular evaluations and gave personalized feedback. Helped them improve in reading, writing, speaking, and listening, and guided them to reach their language goals.",
  },
  {
    role: "SEO Executive",
    company: "eChithi",
    period: "2023 – 2024",
    description:
      "Led technical SEO campaigns, backlink optimization, and UX-driven content improvements.",
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

    <h3 className="text-lg font-semibold text-purple-300 mb-1">{exp.role}</h3>
    <p className="text-sm font-medium text-white/90 mb-3">{exp.company}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-auto">
          {/* Row 1: 3 cards */}
          {experiences.slice(0, 3).map((exp, index) => (
            <Card key={index} exp={exp} delay={index} />
          ))}

          {/* Row 2: center-align 2 cards on larger screens */}
          <div className="hidden md:block" />
          {experiences.slice(3, 5).map((exp, index) => (
            <Card key={index + 3} exp={exp} delay={index + 3} />
          ))}

          {/* Row 3: last 2 cards */}
          {experiences.slice(5).map((exp, index) => (
            <Card key={index + 5} exp={exp} delay={index + 5} />
          ))}
        </div>
      </div>
    </section>
  );
};
