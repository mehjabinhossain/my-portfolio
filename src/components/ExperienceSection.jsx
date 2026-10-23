import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, Building2, Briefcase } from "lucide-react";

// ─── DATA (oldest → newest) ──────────────────────────────────────────────────
const experiences = [
  {
    role: "Web Systems & Performance Intern",
    company: "AZ Simple Solution",
    period: "2020 – 2021",
    description: "Cracked my first internship at an Arizona-based US company.",
    details: {
      summary: "My first professional role where I got hands-on experience in Agile project management and cross-functional collaboration.",
      responsibilities: [
        "This internship was my first real-world stress test. I was the person on the ground keeping the website's technical foundation stable.My day-to-day operations were cleaning up technical debt in the CMS, fixing broken routing, and making sure our asset pipeline didn't slow the system down.",
        
      ],
      tools: ["Jira", "Figma", "Agile/Scrum"],
    },
  },

  {
    role: "Search Engine Optimisation Expert",
    company: "E-Chithi",
    period: "Jan 2022 – Mar 2023",
    description: "Technical SEO and web performance for the organisation's web infrastructure in Dhaka.",
    details: {
      summary: "Managed the technical health of the organisation's web infrastructure, from crawl efficiency and page speed to structured data and domain integrity.",
      responsibilities: [
        "Infrastructure Performance Engineering: Managed the technical integrity of the organization's web infrastructure, focusing on crawl efficiency and internal link architecture to ensure high-speed indexing.",
        "Core Web Vitals Optimization: Profiled page-load performance and executed technical fixes for Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) to enhance user experience.",
        "Structured Data Implementation: Developed and implemented Schema.org (JSON-LD) on the data layer to improve programmatic communication with search engine crawlers.",
        "Domain Integrity Management: Managed off-page authority and executed rigorous domain-integrity analysis to ensure long-term structural logic and performance.",
      ],
      tools: ["Technical SEO", "Core Web Vitals", "Schema.org (JSON-LD)"],
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
   {
    role: "Project Coordinator (Remote)",
    company: "DZ Construction",
    period: "Sep 2024 – Mar 2025",
    description: "Kept project data, schedules, and documentation organised and consistent for a US construction firm.",
    details: {
      summary: "Coordinated project data, workflows, and documentation remotely, giving management a clear and consistent view of progress, procurement, and outstanding work.",
      responsibilities: [
        "Operational Data Management: Maintained project data flows by consolidating progress updates, project schedules, procurement records, and cost reports into standardized datasets for consistent reporting and management review.",
        "Workflow and Tracking: Organized project workflows using various tools for task tracking, dependencies, deadlines, status categories, and escalation procedures to improve task visibility and identify schedule delays.",
        "Centralized Reporting and Auditing: Consolidated fragmented project records into structured sheets and reporting dashboards, enabling periodic reviews of project progress, outstanding tasks, procurement status, and documentation discrepancies.",
        "Technical Documentation and Process Improvement: Maintained traceable project records, meeting decisions, change requests, and action logs while improving documentation workflows to support accountability, reporting accuracy, and timely project execution.",
      ],
      tools: ["Jira", "Excel", "Reporting Dashboards", "Project Scheduling"],
    },
  },
    {
    role: "Data Analyst",
    company: "Ameri Lux",
    period: "2025",
    description: "Cleaned, analysed, and reported on project budget and expense data using Python, Excel, and Power BI.",
    details: {
      summary: "Turned project budgets, expense records, and invoices into clean, reliable datasets and clear financial reports for management review.",
      responsibilities: [
        "Data Cleaning and Management: Collected, cleaned, and organized project budgets, expense records, invoices, and operational data using Excel and Python (Pandas, NumPy), addressing inconsistent formats to improve data accuracy and reporting reliability.",
        "Data Analysis and Processing: Used Python to combine datasets, calculate project cost variations, analyze spending patterns, and compare budgeted expenses with actual costs, helping identify unusual financial trends and potential budget overruns.",
        "Data Visualization and Reporting: Developed charts, graphs, and visual reports using Python visualization libraries and tools like Power BI to present project expenses, monthly cost trends, and financial performance in a clear format for management review.",
        "Reporting Automation and Efficiency: Streamlined recurring data-cleaning, calculation, and reporting tasks using reusable Python scripts and structured Excel files, reducing repetitive manual work and improving consistency across reports.",
      ],
      tools: ["Python", "Pandas", "NumPy", "Excel", "Power BI"],
    },
  },
];

// ─── SECTION ──────────────────────────────────────────────────────────────────
export const ExperienceSection = () => {
  // Opens on the most recent role
  const [active, setActive] = useState(experiences.length - 1);
  const exp = experiences[active];

  return (
    <section id="experience" className="py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-center text-sm font-black uppercase tracking-[0.45em] text-purple-400 mb-4">
          ✦ Experience ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Professional Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-8 lg:gap-12">
          {/* ── LEFT: job list ── */}
          <div className="relative">
            {/* thin rail behind the list */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {experiences.map((item, i) => {
                const isActive = i === active;
                return (
                  <li key={`${item.company}-${item.period}`} className="shrink-0 lg:shrink">
                    <button
                      onClick={() => setActive(i)}
                      className={`relative w-full text-left px-6 py-4 rounded-xl lg:rounded-l-none transition-colors duration-300 ${
                        isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      {/* active indicator slides between items */}
                      {isActive && (
                        <motion.span
                          layoutId="expActiveBar"
                          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-400 to-pink-500"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        />
                      )}
                      <p className={`text-sm font-semibold tracking-wide mb-1 ${isActive ? "text-pink-400" : "text-slate-500"}`}>
                        {item.period}
                      </p>
                      <p className={`text-lg font-bold leading-snug ${isActive ? "text-white" : "text-slate-300"}`}>
                        {item.company}
                      </p>
                      <p className={`text-base ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {item.role}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT: details panel ── */}
          <div className="rounded-2xl border border-white/10 bg-[#0d1425]/80 backdrop-blur-md p-7 md:p-10 min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{exp.role}</h3>
                    <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-purple-300">
                      <Building2 size={18} /> {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base font-semibold text-purple-200 border border-purple-400/30 bg-purple-500/10 whitespace-nowrap">
                    <Calendar size={15} /> {exp.period}
                  </span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-transparent mb-6" />

                {/* Summary */}
                <p className="text-lg text-slate-300 leading-relaxed mb-8">{exp.details.summary}</p>

                {/* Responsibilities */}
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <Briefcase size={15} /> Key Responsibilities
                </h4>
                <ul className="space-y-3 mb-8">
                  {exp.details.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-slate-300 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-pink-400 shrink-0" />
                      {item.includes(": ") ? (
                        <span>
                          <span className="font-semibold text-white">{item.slice(0, item.indexOf(": "))}:</span>
                          {item.slice(item.indexOf(": ") + 1)}
                        </span>
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Tools &amp; Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.details.tools.map((tool) => (
                    <span key={tool} className="px-3.5 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};