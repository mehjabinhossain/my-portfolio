import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Briefcase, Calendar, Building2 } from "lucide-react";

// ── eChithi removed — 6 experiences only ─────────────────────────────────────
const experiences = [
  {
    role: "Web Systems & Performance Intern",
    company: "AZ Simple Solution",
    period: "2020 – 2021",
    description: "Cracked my first internship at an Arizona-based US company.",
    details: {
      summary: "My first professional role where I got hands-on experience in Agile project management and cross-functional collaboration.",
      responsibilities: [
        "This internship was my first real-world stress test, taking me from university theory to being responsible for a live digital environment. I was the person on the ground keeping the website's technical foundation stable. My day-to-day operations were cleaning up technical debt in the CMS, fixing broken routing, and making sure our asset pipeline didn't slow the system down. I learned the hard way that even a small oversight in the backend can crash the user experience. By auditing our site architecture and conducting manual QA across different browsers, I moved from just 'knowing' code to actually managing the reliability of a business-critical system.",
      ],
      tools: ["Jira", "Figma", "Agile/Scrum"],
    },
  },
  {
    role: "Assistant Project Manager",
    company: "AZ Simple Solution",
    period: "2021 – 2022",
    description: "Helped manage project timelines and goals for client-facing software using Agile methods.",
    details: {
      summary: "Stepped up to assist in managing full project lifecycles, working alongside senior managers on client-facing software products.",
      responsibilities: [
        "Helped manage project timelines, tasks, and goals for client-facing software",
        "Kept Jira boards organized and wrote user stories and sprint documents",
        "Followed Agile methods and collaborated closely with developers and designers",
        "Ensured everyone understood their tasks and deliverables",
        "Supported technical work when needed",
      ],
      tools: ["Jira", "Agile/Scrum", "User Story Mapping", "Sprint Planning"],
    },
  },
  {
    role: "Human Resources Assistant",
    company: "BD Plus IT",
    period: "2023 – 2024",
    description: "Led HR system setup, integrations with payroll/ERP tools, and automated HR workflows.",
    details: {
      summary: "Led the full implementation and customization of the company's HR Information System, driving digital transformation of HR operations.",
      responsibilities: [
        "Steered the end-to-end technical deployment of a cloud-based HRIS, architecting the system to support complex organizational workflows",
        "Engineered API-level integrations between the core HRIS and fragmented subsystems, including payroll, biometric hardware, and the broader ERP environment.",
        "Synchronized digital infrastructure across integrated modules to ensure system reliability and high-velocity data processing.",
      ],
      tools: ["HRIS Platforms", "REST APIs", "ERP Integration", "Payroll Systems"],
    },
  },
    {
    role: "Data analyst",
    company: "Ameri Lux",
    period: "2025",
    description: "Managing high-end digital solutions for a luxury brand using Power BI, and CRM integrations.",
    details: {
      summary: "Currently leading high-impact digital transformation projects for a luxury brand, using complex system integrations and executive reporting.",
      responsibilities: [
        "Extracting and connecting data from fragmented subsystems to eliminate data silos and ensure structural integrity",
        "Using dynamic dashboards like Power BI and Tableau that transform complex datasets into readable, real-time metrics for executive or cross-functional teams.",
        " Analyzing quantitative metrics and operational tracking data.", 
        "Conducting rigorous QA and integrity audits on data layers to ensure seamless programmatic communication between different digital tools.",
      ],
      tools: ["Jira", "Power BI", "CRM Systems", "Agile/Scrum", "Outlook Workflows"],
    },
  },
  {
    role: "Project Coordinator",
    company: "DZ Construction",
    period: "2024 – 2025",
    description: "Transformed complex engineering data into streamlined digital processes.",
    details: {
      summary: "Brought modern Agile and digital practices to a construction environment, streamlining operations and delivering tech-driven projects on time.",
      responsibilities: [
        "Engineered and managed operational data pipelines connecting field-level site diaries with executive reporting tools.",
        "Designed custom Jira workflows, treating construction milestones as digital development sprints to improve team velocity.",
        "Managed client agreements and stakeholder communication",
        "Integrated fragmented procurement and scheduling tools into a centralized dashboard for real-time technical auditing",
        "Translated complex engineering data into streamlined digital processes to enhance cross-functional team performance.",
      ],
      tools: ["Jira", "Agile", "Power BI", "Digital Dashboards", "Procurement Tools"],
    },
  },

  {
    role: "English Teacher",
    company: "RDM English School",
    period: "2024",
    description: "Taught English lessons focused on test prep, academic skills, and personalized feedback.",
    details: {
      summary: "Designed and delivered structured English language programs, helping students achieve measurable improvement in all four language skills.",
      responsibilities: [
        "Taught English lessons focused on test prep and academic skills",
        "Checked students' progress through regular evaluations",
        "Gave personalized feedback to each student",
        "Helped students improve in reading, writing, speaking, and listening",
        "Guided students to reach their individual language goals",
      ],
      tools: ["Curriculum Design", "Student Assessment", "Academic Coaching"],
    },
  },
];

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ exp, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        className="relative z-10 w-full max-w-xl bg-[#1e293b] border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-5 flex justify-between items-start">
          <div>
            <p className="text-white/70 text-sm font-medium flex items-center gap-1.5 mb-1">
              <Building2 size={14} /> {exp.company}
            </p>
            <h3 className="text-white text-xl font-bold">{exp.role}</h3>
            <p className="text-white/70 text-sm flex items-center gap-1.5 mt-1">
              <Calendar size={13} /> {exp.period}
            </p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          <p className="text-slate-300 text-base leading-relaxed">{exp.details.summary}</p>

          <div>
            <h4 className="text-purple-300 font-semibold text-base mb-3 flex items-center gap-2">
              <Briefcase size={14} /> Key Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {exp.details.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-purple-300 font-semibold text-sm mb-2">Tools &amp; Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {exp.details.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// ─── CARD ─────────────────────────────────────────────────────────────────────
const Card = ({ exp, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 2, y: 0 }}
    transition={{ duration: 0.7, delay: delay * 0.1 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="relative group bg-white/5 border border-white/10 backdrop-blur-md p-5 pt-20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer flex flex-col h-full min-h-[180px]"
  >
    <div className="absolute top-3 right-3 z-10 px-3 py-1 text-lg rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-sm whitespace-nowrap">
      {exp.period}
    </div>

    <h3 className="text-lg font-semibold text-purple-300 mb-1">{exp.company}</h3>
    <p className="text-lg font-semibold text-white/90 mb-3">{exp.role}</p>
    <p className="text-lg text-slate-400 leading-relaxed flex-1">{exp.description}</p>

    <p className="mt-4 text-lg text-purple-400/50 group-hover:text-purple-400 transition-colors self-end">
      Click for details →
    </p>

    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-400 to-pink-500 rounded-b-2xl" />
  </motion.div>
);

// ─── SECTION ──────────────────────────────────────────────────────────────────
export const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const row1 = experiences.slice(0, 3); // cards 1–3 (left → right)
  const row2 = experiences.slice(3, 6); // cards 4–6 (left → right, snake continues)

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gradient-to-bl from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Professional Journey
        </h2>

        {/* ── Grid + SVG wrapper ── */}
        <div className="relative">

          {/*
            Snake path SVG — sits behind the two rows.
            viewBox matched to the approximate pixel height of 2 rows + gap.
            Path: starts top-left → goes right → curves → goes left → arrowhead at bottom-left
          */}
          <motion.svg
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 480"
            aria-hidden="true"
          >
            {/* Row 1 centerline ≈ y=115, Row 2 centerline ≈ y=365, right edge x=960, left x=40 */}
            <motion.path
              d="M 40 115 H 960 Q 980 115 980 135 V 345 Q 980 365 960 365 H 40"
              stroke="url(#snakeGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrowLeft)"
            />
            <defs>
              <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              {/* Arrowhead pointing LEFT (for the return sweep) */}
              <marker id="arrowLeft" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M 6 0 L 0 3 L 6 6 Z" fill="#ec4899" />
              </marker>
            </defs>
          </motion.svg>

          {/* Two equal rows of 3 */}
          <div className="relative z-10 flex flex-col gap-8">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {row1.map((exp, i) => (
                <Card key={i} exp={exp} delay={i} onClick={() => setSelectedExp(exp)} />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {row2.map((exp, i) => (
                <Card key={i + 3} exp={exp} delay={i + 3} onClick={() => setSelectedExp(exp)} />
              ))}
            </div>

          </div>
        </div>
      </div>

      {selectedExp && (
        <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </section>
  );
};