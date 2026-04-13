import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, Users, ExternalLink, Calendar, Building2, X, MapPin,
  Medal, ChevronRight, ChevronLeft, ImageIcon, GraduationCap,
  Microscope, Briefcase, Heart, Zap
} from "lucide-react";

// ─── IMAGE PLACEHOLDER ───────────────────────────────────────────────────────
const Img = ({ src, alt, className, style }) =>
  src ? (
    <img src={src} alt={alt} className={className} style={style} />
  ) : (
    <div className={`${className} flex flex-col items-center justify-center bg-white/5 border-2 border-dashed border-white/15 gap-3`} style={style}>
      <ImageIcon size={28} className="text-white/25" />
      <span className="text-xs text-white/25 font-semibold tracking-wide">Add Certificate Photo</span>
    </div>
  );

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ACADEMIC = [
  {
    id: "a1",
    title: "Dean's List of Meritorious Students",
    subtitle: "Spring Semester 2025",
    issuer: "University of Asia Pacific (UAP)",
    host: "Academic Affairs Division, UAP",
    issueDate: "May 21, 2026",
    year: 2025,
    image: "./projects/Gaming segment.png",
    badge: "Dean's List",
    badgeColor: "from-emerald-400 to-teal-500",
    description: "Awarded for outstanding academic performance in the Spring 2025 semester. This honour is conferred upon students who achieve exceptional GPA results exceeding 3.80, placing them among the top performers of their cohort.",
    significance: "One of UAP's highest academic recognitions, reflecting consistent intellectual excellence.",
    tags: ["Academic Excellence", "Spring 2025", "GPA Honours"],
  },
  {
    id: "a2",
    title: "Dean's List of Meritorious Students",
    subtitle: "Fall Semester 2025",
    issuer: "University of Asia Pacific (UAP)",
    host: "Academic Affairs Division, UAP",
    issueDate: "September 21, 2025",
    year: 2025,
    image: "./projects/Deans Award 2021.jpg",
    badge: "Dean's List",
    badgeColor: "from-emerald-400 to-teal-500",
    description: "Awarded for outstanding academic performance in the Fall 2021 semester, demonstrating strong foundational excellence in CSE program. This honour is conferred upon students who achieve exceptional GPA results exceeding 3.80",
    significance: "Recognises exceptional academic achievement among undergraduate students.",
    tags: ["Academic Excellence", "Fall 2021", "GPA Honours"],
  },
  {
    id: "a3",
    title: "Dean's List of Meritorious Students",
    subtitle: "Spring Semester 2024",
    issuer: "University of Asia Pacific (UAP)",
    host: "Academic Affairs Division, UAP",
    issueDate: "April 16, 2025",
    year: 2024,
    image: "./projects/Deans award 2024.jpg",
    badge: "Dean's List",
    badgeColor: "from-emerald-400 to-teal-500",
    description: "Awarded for exceptional academic results in Spring 2024, maintaining a trajectory of high performance throughout the undergraduate degree. This honour is conferred upon students who achieve exceptional GPA results exceeding 3.80.",
    significance: "Recognises top-ranking students within the faculty for academic merit.",
    tags: ["Academic Excellence", "Spring 2024", "GPA Honours"],
  },
  {
    id: "a4",
    title: "Vice Chancellor's List of Meritorious Students",
    subtitle: "Fall Semester 2023",
    issuer: "University of Asia Pacific (UAP)",
    host: "Office of the Vice Chancellor, UAP",
    issueDate: "November 11, 2024",
    year: 2023,
    image: "./projects/VS Award 2023.jpg",
    badge: "VC's List",
    badgeColor: "from-amber-400 to-orange-500",
    description: "Awarded for outstanding academic performance in the Fall 2023 semester. This honour is conferred upon students who achieve exceptional GPA results exceeding 3.90, placing them among the top performers of their cohort.",
    significance: "The pinnacle of academic recognition at UAP — reserved for only the very best performers.",
    tags: ["Top Honour", "Fall 2023", "Vice Chancellor"],
  },
  {
    id: "a5",
    title: "Vice Chancellor's List of Meritorious Students",
    subtitle: "Fall Semester 2022",
    issuer: "University of Asia Pacific (UAP)",
    host: "Office of the Vice Chancellor, UAP",
    issueDate: "November 2, 2023",
    year: 2022,
    image: "./projects/VC Award Fall, 2023.png",
    badge: "VC's List",
    badgeColor: "from-amber-400 to-orange-500",
    description: "Recognised by the Vice Chancellor for outstanding academic achievement in Fall 2022, placing among the top students in the Department of CSE. This honour is conferred upon students who achieve exceptional GPA results exceeding 3.90.",
    significance: "The highest academic distinction conferred at UAP.",
    tags: ["Top Honour", "Fall 2022", "Vice Chancellor"],
  },
];

const RESEARCH = [
  {
    id: "r1",
    title: "Research Paper Presentation — ICCIT 2025",
    subtitle: "Paper ID #484",
    issuer: "28th International Conference on Computer & Information Technology",
    host: "ICCIT 2025 Programme Committee",
    venue: "Long Beach Hotel, Cox's Bazar, Bangladesh",
    date: "December 19–21, 2025",
    year: 2025,
    image: "./projects/ICCIT Paper Submission.jpg",
    badge: "Published Research",
    badgeColor: "from-rose-500 to-pink-600",
    paperTitle: "Dual Head Deep Learning Framework for Automated Skin Disease Detection and Cancer Classification with Explainable Support",
    description: "Presented our thesis research at the most prestigious IEEE Bangladesh Section conference. The paper introduces a novel dual-head deep learning architecture that simultaneously classifies skin conditions and detects cancerous lesions with XAI support for clinical transparency.",
    significance: "International peer-reviewed publication demonstrating research capability in AI and healthcare technology.",
    tags: ["Deep Learning", "Computer Vision", "Healthcare AI", "XAI", "Cancer Detection"],
  },
];

const PROFESSIONAL = [
  {
    id: "p1",
    title: "UX Design Process: Empathize, Define & Ideate",
    issuer: "Google",
    host: "Coursera",
    date: "2024",
    year: 2024,
    image: "./projects/ux2.png",
    badge: "Google Certified",
    badgeColor: "from-blue-500 to-cyan-500",
    link: "https://www.coursera.org/account/accomplishments/certificate/N8PBNG5SU8XB",
    description: "Mastered the three foundational phases of UX design: empathising with users through research, defining problem statements, and ideating creative solutions through structured design thinking methods.",
    significance: "Part of the Google UX Design Professional Certificate programme.",
    tags: ["UX Design", "Empathy Mapping", "Ideation", "Design Thinking"],
  },
  {
    id: "p2",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    host: "Coursera",
    date: "2024",
    year: 2024,
    image: "./projects/ux1.jpg",
    badge: "Google Certified",
    badgeColor: "from-blue-500 to-cyan-500",
    link: "https://www.coursera.org/account/accomplishments/certificate/HB3TJB9JH95K",
    description: "Comprehensive introduction to UX principles, design thinking, Figma wireframing, and user-centered methodologies — laying the groundwork for professional UX practice.",
    significance: "Entry certificate to the Google UX Design Professional Certificate programme.",
    tags: ["UX", "Figma", "Wireframing", "User Research"],
  },
  {
    id: "p3",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    host: "Coursera",
    date: "2023",
    year: 2023,
    image: "./projects/bitsofpc.jpeg",
    badge: "Google Certified",
    badgeColor: "from-blue-500 to-cyan-500",
    link: "https://www.coursera.org/account/accomplishments/certificate/R6AFB7HDEXXD",
    description: "In-depth coverage of networking protocols, TCP/IP stack, DNS, DHCP, VPN, and network troubleshooting. Builds a professional understanding of how the internet and enterprise networks function.",
    significance: "Part of the Google IT Support Professional Certificate programme.",
    tags: ["Networking", "TCP/IP", "DNS", "Protocols"],
  },
  {
    id: "p4",
    title: "Technical Support Fundamentals",
    issuer: "Google",
    host: "Coursera",
    date: "2023",
    year: 2023,
    image: "./projects/tec2.jpeg",
    badge: "Google Certified",
    badgeColor: "from-blue-500 to-cyan-500",
    link: "https://www.coursera.org/account/accomplishments/certificate/CJJ2BV87AVQS",
    description: "Foundational IT skills including hardware, binary, operating systems, customer communication, and systematic troubleshooting — essential for any technology professional.",
    significance: "First course of the Google IT Support Professional Certificate.",
    tags: ["IT Support", "Hardware", "OS", "Troubleshooting"],
  },
];

const LEADERSHIP = [
  {
    id: "l1",
    title: "Co-Convener",
    subtitle: "BASIS Student Forum, UAP Chapter",
    issuer: "Bangladesh Association of Software & Information Services (BASIS)",
    host: "BASIS Student Forum, UAP",
    date: "April 27, 2025",
    year: 2025,
    image: "./projects/Basis .jpg",
    badge: "Leadership Role",
    badgeColor: "from-violet-500 to-purple-600",
    description: "Formally appointed as Co-Convener of the BASIS Student Forum at UAP responsible for organising industry-academia events, tech workshops, and building bridges between students and Bangladesh's software sector.",
    significance: "A formal leadership appointment by a national ICT industry body.",
    tags: ["Leadership", "Tech Community", "Governance", "BASIS"],
  },
];

// ── Competitions: `images` array powers the in-modal slideshow ────────────────
const COMPETITIONS = [
  {
    id: "c1",
    title: "Special Recognition — Rising Star",
    subtitle: "Innovate X 2025 · Team: Technologia",
    issuer: "Software & Hardware Club, CSE, UAP",
    host: "CSE Department, UAP",
    date: "May 9, 2025",
    year: 2025,
    image: "./projects/Rising Star.jpeg",
    images: ["./projects/Rising Star.jpeg"],
    badge: "🌟 Rising Star",
    badgeColor: "from-violet-500 to-purple-600",
    description: "Awarded the prestigious Rising Star recognition at Innovate X 2025 for outstanding innovation, creativity, and impact with team Technologia — standing out among all competing teams.",
    significance: "Special recognition for exceptional innovation among all participants.",
    tags: ["Innovation", "Special Award", "Rising Star"],
  },
  {
    id: "c2",
    title: "Champion — Idea Competition",
    subtitle: "CSE Tech Carnival 2024 · Team: Pet Portal",
    issuer: "Software & Hardware Club + Robotics Club, CSE, UAP",
    host: "CSE Department, UAP",
    date: "February 25, 2024",
    year: 2024,
    image: "./projects/Idea Comp1.jpeg",
    images: ["./projects/Idea Comp1.jpeg", "./projects/Idea Comp 2.jpeg"],
    badge: "🏆 Champion",
    badgeColor: "from-yellow-400 to-amber-500",
    description: "Won first place in the flagship idea competition at CSE Tech Carnival 2024, outcompeting multiple teams to present the most innovative and technically sound concept before a panel of judges.",
    significance: "First place in a department-wide competitive innovation event.",
    tags: ["1st Place", "Ideation", "Tech Carnival"],
  },
  {
    id: "c3",
    title: "Champion — Scavenger Hunt",
    subtitle: "UAP English Language Club · Team Trio",
    issuer: "UAP English Language Club",
    host: "UAP English Language Club",
    date: "October 17, 2023",
    year: 2023,
    image: "./projects/Scavenger Hunt Champion.jpg",
    images: ["./projects/Scavenger Hunt Champion.jpg"],
    badge: "🏆 Champion",
    badgeColor: "from-yellow-400 to-amber-500",
    description: "Led Team Trio to first place at the campus-wide scavenger hunt, demonstrating exceptional teamwork, critical thinking, and quick decision-making under pressure.",
    significance: "First place in a competitive campus event.",
    tags: ["1st Place", "Teamwork", "English Language Club"],
  },
  {
    id: "c4",
    title: "3rd Position — IDEA Season 3.0",
    subtitle: "Crown Cement PLC · Team: PET ONE STOP",
    issuer: "ECDC — Entrepreneurship & Career Development Club, UAP",
    host: "ECDC, UAP",
    date: "May 10, 2024",
    year: 2024,
    image: "./projects/pet win.jpg",
    images: ["./projects/pet win.jpg"],
    badge: "🥉 3rd Place",
    badgeColor: "from-orange-400 to-red-500",
    description: "Secured 3rd position at IDEA Season 3.0, a prestigious business plan competition sponsored by Crown Cement PLC. Pitched the PET ONE STOP concept — a one-stop solution for pet care — to a panel of industry professionals and investors.",
    significance: "Top-3 finish in a major university entrepreneurship competition.",
    tags: ["Entrepreneurship", "3rd Place", "Business Plan", "ECDC"],
  },
  {
    id: "c5",
    title: "1st Runner-Up — IDEA Season 2.0",
    subtitle: "EBL Women Banking · Team: Upcycle Mind",
    issuer: "ECDC — Entrepreneurship & Career Development Club, UAP",
    host: "ECDC, UAP",
    date: "March 21, 2023",
    year: 2023,
    image: "./projects/ecdc.jpg",
    images: ["./projects/ecdc.jpg"],
    badge: "🥈 1st Runner-Up",
    badgeColor: "from-slate-300 to-slate-400",
    description: "Achieved 1st Runner-Up at IDEA Season 2.0 with team Upcycle Mind — presenting a sustainable upcycling business model to judges from EBL Women Banking and industry partners.",
    significance: "2nd place in a high-profile, bank-sponsored entrepreneurship competition.",
    tags: ["1st Runner-Up", "Sustainability", "Social Impact", "ECDC"],
  },
];

const VOLUNTEERING = [
  {
    id: "v1",
    title: "Volunteer — 45th & 46th ICPC World Finals",
    subtitle: "International Collegiate Programming Contest, Dhaka",
    issuer: "University of Asia Pacific (UAP) & ICT Division of Bangladesh",
    host: "ICPC Foundation & ICT Division, Bangladesh",
    date: "November 6–11, 2022",
    year: 2022,
    image: "./projects/ICPC volunteer list.png",
    badge: "Volunteer Recognition",
    badgeColor: "from-emerald-400 to-teal-500",
    description: "Received official volunteer recognition for dedicated service at one of the world's most prestigious competitive programming events. The ICPC World Finals is an international platform bringing together elite programmers from universities globally.",
    significance: "Contributed to a globally recognised event hosted in Bangladesh.",
    tags: ["ICPC", "World Finals", "Global Event", "Tech Volunteering"],
  },
  {
    id: "v4",
    title: "Active Volunteer — Ada Lovelace Celebration 2022",
    subtitle: "BDSN — Enabling Sustainable Development Goals",
    issuer: "BDSN (Bangladesh Sustainable Development Network)",
    host: "BDSN, hosted by UAP",
    date: "July 22–23, 2022",
    year: 2022,
    image: "./projects/Ada Lovelace .jpg",
    badge: "Volunteer Recognition",
    badgeColor: "from-emerald-400 to-teal-500",
    description: "Served as an active volunteer at the Ada Lovelace Celebration 2022 — an event honouring the world's first programmer and championing women in technology and sustainable development in Bangladesh.",
    significance: "Reflects commitment to women in tech and sustainable development.",
    tags: ["Women in Tech", "SDG", "Ada Lovelace", "Volunteering"],
  },
  {
    id: "v2",
    title: "Participant — EEE Tech Fest 2023",
    subtitle: "UAP EEE Project Club & IEEE UAP Student Branch",
    issuer: "IEEE UAP Student Branch",
    host: "IEEE UAP Student Branch & EEE Project Club",
    date: "March 29, 2023",
    year: 2023,
    image: "./projects/EEE Tech Fest 2023.jpg",
    badge: "Participation",
    badgeColor: "from-sky-400 to-blue-500",
    description: "Participated in EEE Tech Fest 2023, engaging with cutting-edge electrical and electronics projects, demonstrations, and technical workshops organised by the IEEE student chapter.",
    significance: "Multidisciplinary engagement beyond core CSE domain.",
    tags: ["IEEE", "Tech Fest", "Engineering", "Interdisciplinary"],
  },
  {
    id: "v3",
    title: "Participant — UAP Intra University Programming Contest",
    subtitle: "Programming Contest Club, CSE, UAP",
    issuer: "Programming Contest Club, CSE, UAP",
    host: "Department of CSE, UAP",
    date: "March 3, 2022",
    year: 2022,
    image: "./projects/Program Contest .jpg",
    badge: "Participation",
    badgeColor: "from-sky-400 to-blue-500",
    description: "Competed in the UAP intra-university programming contest, engaging in algorithmic problem-solving under timed conditions — building competitive programming skills alongside peers.",
    significance: "Demonstrates initiative in competitive programming.",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
  },
];

// ─── TABS ─────────────────────────────────────────────────────────────────────
const TABS = [
  { id: "academic",     label: "Academic Excellence", Icon: GraduationCap, data: ACADEMIC,     accent: "#f59e0b" },
  { id: "research",     label: "Research",            Icon: Microscope,    data: RESEARCH,     accent: "#f43f5e" },
  { id: "professional", label: "Professional",        Icon: Briefcase,     data: PROFESSIONAL, accent: "#3b82f6" },
  { id: "leadership",   label: "Leadership",          Icon: Users,         data: LEADERSHIP,   accent: "#a855f7" },
  { id: "competitions", label: "Competitions",        Icon: Trophy,        data: COMPETITIONS, accent: "#eab308" },
  { id: "volunteering", label: "Volunteering",        Icon: Heart,         data: VOLUNTEERING, accent: "#10b981" },
];

const TOTAL = ACADEMIC.length + RESEARCH.length + PROFESSIONAL.length + LEADERSHIP.length + COMPETITIONS.length + VOLUNTEERING.length;

// ─── PHOTO SLIDESHOW (competitions modal) ────────────────────────────────────
const PhotoSlideshow = ({ images, accentHex }) => {
  const [idx, setIdx] = useState(0);
  if (!images?.length) return null;
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className="relative w-full bg-[#0a0f1e]">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`Photo ${idx + 1}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="w-full"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all hover:scale-110">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all hover:scale-110">
            <ChevronRight size={18} />
          </button>
          <div className="flex justify-center gap-1.5 py-3">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === idx ? accentHex : "rgba(255,255,255,0.25)", transform: i === idx ? "scale(1.4)" : "scale(1)" }} />
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 pb-2">{idx + 1} / {images.length}</p>
        </>
      )}
    </div>
  );
};

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ cert, accentHex, isVolunteering, isCompetition, onClose }) => {
  const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" };
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0d1425] border border-white/10 rounded-3xl shadow-2xl"
        style={{ boxShadow: `0 0 80px ${accentHex}25, 0 30px 70px rgba(0,0,0,0.7)` }}
        initial={{ scale: 0.88, opacity: 0, y: 32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 32 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative w-full rounded-t-3xl overflow-hidden bg-[#0a0f1e]">
          {isCompetition
            ? <PhotoSlideshow images={cert.images} accentHex={accentHex} />
            : <img src={cert.image} alt={cert.title} className="w-full"
                style={{ maxHeight: "420px", objectFit: "contain" }} />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1425] via-transparent to-transparent pointer-events-none" />
          <span className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${cert.badgeColor} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-xl`}>
            {cert.badge}
          </span>
          <button onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110">
            <X size={18} />
          </button>
        </div>

        {/* Title */}
        <div className="px-7 pt-6 pb-0">
          {cert.subtitle && (
            <p className="text-base font-black uppercase tracking-widest mb-1.5" style={{ color: accentHex }}>{cert.subtitle}</p>
          )}
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight"
            style={isVolunteering ? serif : {}}>
            {cert.title}
          </h2>
        </div>

        {/* Body */}
        <div className="p-7 space-y-6">

          {cert.paperTitle && (
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-slate-400 uppercase tracking-widest mb-2 font-bold">Research Paper Title</p>
              <p className="text-white text-base font-semibold italic leading-relaxed">"{cert.paperTitle}"</p>
            </div>
          )}

          {/* Meta grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              cert.issuer                     && { Icon: Building2, label: "Issued By",       value: cert.issuer },
              cert.host                       && { Icon: Building2, label: "Host / Organiser", value: cert.host },
              (cert.date || cert.issueDate)   && { Icon: Calendar,  label: "Date",             value: cert.date || cert.issueDate },
              cert.venue                      && { Icon: MapPin,    label: "Venue",            value: cert.venue },
            ].filter(Boolean).map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                <Icon size={16} className="mt-0.5 shrink-0" style={{ color: accentHex }} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5">{label}</p>
                  <p className="text-base font-semibold text-white leading-snug"
                    style={isVolunteering ? serif : {}}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-3">About This Credential</p>
            <p className="text-base leading-relaxed text-slate-200"
              style={isVolunteering ? { ...serif, color: "#e2e8f0" } : { color: "#e2e8f0" }}>
              {cert.description}
            </p>
          </div>

          {/* Why it matters */}
          {cert.significance && (
            <div className="p-5 rounded-2xl border" style={{ background: `${accentHex}0d`, borderColor: `${accentHex}35` }}>
              <p className="text-sm uppercase tracking-widest font-black mb-2 flex items-center gap-2" style={{ color: accentHex }}>
                <Zap size={13} /> Why It Matters
              </p>
              <p className="text-base leading-relaxed text-white"
                style={isVolunteering ? serif : {}}>
                {cert.significance}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cert.tags?.map(t => (
              <span key={t} className="text-sm px-3.5 py-1.5 rounded-full border font-semibold"
                style={{ background: `${accentHex}15`, borderColor: `${accentHex}35`, color: accentHex }}>{t}</span>
            ))}
          </div>

          {/* Verify link */}
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              style={{ background: `linear-gradient(135deg, ${accentHex}ee, ${accentHex}88)` }}>
              <ExternalLink size={16} /> Verify Certificate
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── HORIZONTAL TIMELINE (Academic) ──────────────────────────────────────────
const HorizontalTimeline = ({ certs, accentHex, onOpen }) => (
  <div className="relative w-full overflow-x-auto pb-6">
    <div className="relative min-w-[900px]">
      {/* spine */}
      <div className="absolute top-[72px] left-[7%] right-[7%] h-px"
        style={{ background: `linear-gradient(to right, transparent, ${accentHex}80 10%, ${accentHex}80 90%, transparent)` }} />
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        
        className="absolute top-[72px] left-[7%] right-[7%] h-px origin-left"
        style={{ background: `linear-gradient(to right, ${accentHex}, ${accentHex}40)` }}
      />

      <div className="flex items-start justify-between px-[4%] gap-4">
        {certs.map((cert, i) => (
          <motion.div key={cert.id}
            className="flex flex-col items-center flex-1 min-w-0"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-sm font-black mb-2 tracking-wider" style={{ color: accentHex }}>
              {cert.issueDate?.split(" ").pop() || cert.year}
            </p>

            <motion.div
              initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.25, type: "spring", stiffness: 250 }}
              className="relative z-10 w-4 h-4 rounded-full border-[3px] border-[#07091a] mb-4 shrink-0"
              style={{ background: accentHex, boxShadow: `0 0 18px ${accentHex}90` }}
            >
              <span className="absolute inset-0 rounded-full animate-ping opacity-40"
                style={{ background: accentHex }} />
            </motion.div>

            <motion.div
              onClick={() => onOpen(cert)}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${accentHex}25` }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer w-full bg-gradient-to-br from-white/[0.09] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden"
              onMouseEnter={e => e.currentTarget.style.borderColor = `${accentHex}55`}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
            >
              <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accentHex}, ${accentHex}20)` }} />

              {/* Full image — object-contain, no cropping */}
              <div className="w-full bg-[#0a0f1e] flex items-center justify-center" style={{ height: "140px" }}>
                <Img src={cert.image} alt={cert.title}
                  className="w-full h-full" style={{ objectFit: "contain" }} />
              </div>

              <div className="p-4 space-y-2">
                <span className={`inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full bg-gradient-to-r ${cert.badgeColor} text-white`}>
                  <Medal size={20} /> {cert.badge}
                </span>
                <h3 className="text-white font-black text-base leading-snug">{cert.title}</h3>
                <p className="text-sm font-bold" style={{ color: accentHex }}>{cert.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{cert.description}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar size={10} style={{ color: accentHex }} /> {cert.issueDate}
                </div>
                <p className="flex items-center gap-1 text-sm font-bold pt-0.5" style={{ color: accentHex }}>
                  View details <ChevronRight size={20} />
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// ─── STANDARD CARD ────────────────────────────────────────────────────────────
const StandardCard = ({ cert, accentHex, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5 }}
    onClick={() => onOpen(cert)}
    className="cursor-pointer group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
    onMouseEnter={e => { e.currentTarget.style.borderColor = `${accentHex}55`; e.currentTarget.style.boxShadow = `0 20px 50px ${accentHex}20`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${accentHex}, ${accentHex}30)` }} />

    {/* Full image — object-contain, no cropping */}
    <div className="w-full bg-[#0a0f1e] flex items-center justify-center" style={{ minHeight: "220px" }}>
      <Img src={cert.image} alt={cert.title}
        className="w-full" style={{ maxHeight: "260px", objectFit: "contain" }} />
    </div>

    <div className="absolute top-6 right-3 z-10">
      <span className={`text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${cert.badgeColor} text-white shadow-lg`}>
        {cert.badge}
      </span>
    </div>

    <div className="p-6 space-y-3">
      {(cert.date || cert.issueDate) && (
        <div className="flex items-center gap-1.5 text-base font-bold" style={{ color: accentHex }}>
          <Calendar size={14} /> {cert.date || cert.issueDate}
        </div>
      )}
      <h3 className="text-white font-black text-xl leading-snug">{cert.title}</h3>
      {cert.subtitle && <p className="text-base font-semibold text-slate-400">{cert.subtitle}</p>}
      {cert.paperTitle && (
        <p className="text-sm text-white/70 italic leading-relaxed line-clamp-2">"{cert.paperTitle}"</p>
      )}
      <p className="text-slate-400 text-base leading-relaxed line-clamp-2">{cert.description}</p>
      <div className="flex items-center gap-1.5 text-sm text-slate-500">
        <Building2 size={14} style={{ color: accentHex }} /> {cert.issuer}
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {cert.tags?.slice(0, 3).map(t => (
          <span key={t} className="text-sm px-3 py-1 rounded-full border font-semibold"
            style={{ background: `${accentHex}12`, borderColor: `${accentHex}28`, color: accentHex }}>{t}</span>
        ))}
      </div>
      <p className="flex items-center gap-1.5 text-base font-bold mt-2" style={{ color: accentHex }}>
        Click to view full details <ChevronRight size={15} />
      </p>
    </div>
  </motion.div>
);

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export const CertificationSection = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [selectedCert, setSelectedCert] = useState(null);
  const currentTab = TABS.find(t => t.id === activeTab);
  const accentHex = currentTab.accent;

  return (
    <section id="certifications" className="py-28 px-4 bg-[#07091a] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] transition-all duration-700"
          style={{ background: `radial-gradient(ellipse, ${accentHex}20, transparent 70%)` }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: -28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-400 mb-4">✦ Full Academic Record ✦</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-rose-400">Certifications and Honours</span>
    
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            A comprehensive record of professional credentials, academic distinctions, research contributions, and extracurricular achievements across my undergraduate journey at the University of Asia Pacific.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {[
              { label: "Total Credentials",  value: TOTAL,               color: "#a78bfa" },
              { label: "Academic Honours",   value: ACADEMIC.length,     color: "#f59e0b" },
              { label: "Competition Awards", value: COMPETITIONS.length,  color: "#eab308" },
              { label: "Publications",       value: RESEARCH.length,     color: "#f43f5e" },
              { label: "Leadership Roles",   value: LEADERSHIP.length,   color: "#a855f7" },
            ].map(s => (
              <motion.div key={s.label} whileHover={{ scale: 1.06, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center px-5 py-4 rounded-2xl bg-white/5 border min-w-[110px] cursor-default"
                style={{ borderColor: `${s.color}22` }}>
                <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="text-m text-slate-500 uppercase tracking-wider mt-1 font-bold leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {TABS.map(({ id, label, Icon, data, accent }) => {
            const isActive = activeTab === id;
            return (
              <motion.button key={id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200"
                style={isActive ? {
                  background: `linear-gradient(135deg, ${accent}30, ${accent}15)`,
                  borderColor: `${accent}60`, color: accent,
                  boxShadow: `0 0 24px ${accent}28`,
                } : {
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.1)", color: "#94a3b8",
                }}>
                <Icon size={15} />
                {label}
                <span className="text-xl px-1.5 py-0.5 rounded-full"
                  style={{ background: isActive ? `${accent}30` : "rgba(255,255,255,0.08)", color: isActive ? accent : "#64748b" }}>
                  {data.length}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.35 }}>

            <p className="text-center text-slate-500 text-base mb-12 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-white/10 inline-block" />
              {currentTab.data.length} credential{currentTab.data.length !== 1 ? "s" : ""} · Sorted newest to oldest · Click any card to expand
              <span className="h-px w-16 bg-white/10 inline-block" />
            </p>

            {activeTab === "academic"     && <HorizontalTimeline certs={ACADEMIC}     accentHex={accentHex} onOpen={setSelectedCert} />}
            {activeTab === "research"     && <div className="max-w-xl mx-auto">{RESEARCH.map(c => <StandardCard key={c.id} cert={c} accentHex={accentHex} onOpen={setSelectedCert} />)}</div>}
            {activeTab === "professional" && <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">{PROFESSIONAL.map(c => <StandardCard key={c.id} cert={c} accentHex={accentHex} onOpen={setSelectedCert} />)}</div>}
            {activeTab === "leadership"   && <div className="max-w-xl mx-auto">{LEADERSHIP.map(c => <StandardCard key={c.id} cert={c} accentHex={accentHex} onOpen={setSelectedCert} />)}</div>}
            {activeTab === "competitions" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">{COMPETITIONS.map(c => <StandardCard key={c.id} cert={c} accentHex={accentHex} onOpen={setSelectedCert} />)}</div>}
            {activeTab === "volunteering" && <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">{VOLUNTEERING.map(c => <StandardCard key={c.id} cert={c} accentHex={accentHex} onOpen={setSelectedCert} />)}</div>}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <Modal
            cert={selectedCert}
            accentHex={accentHex}
            isVolunteering={activeTab === "volunteering"}
            isCompetition={activeTab === "competitions"}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};