export const ResearchSection = () => {
  const papers = [
    {
      title:
        "From Centralization to Decentralization: Blockchain's Role in Transforming Social Media Platforms",
      publisher: "IEEE Access (Scopus Q1)",
      tag: "Blockchain",
      description:
        "Published in IEEE Access (Scopus Q1), this research explores the architectural shift from centralized social media systems to decentralized blockchain-based frameworks. My contribution involved analyzing the technical protocols for privacy-preserving user governance and the integration of blockchain to mitigate data centralization risks.",
      image: "./projects/1.png",
      link: "https://ieeexplore.ieee.org/document/10966494",
    },
    {
      title:
        "Federated Learning Strategies for Confidential Leukemia Detection from Medical Images",
      publisher: "Springer — Studies in Computational Intelligence",
      tag: "Federated Learning",
      description:
        "Published as a full chapter in the Springer series 'Studies in Computational Intelligence' (Scopus & DBLP Indexed). Bridges the gap between Explainable AI (XAI) and healthcare security, demonstrating proficiency in architecting secure, collaborative machine learning frameworks for sensitive diagnostic data.",
      image: "./projects/Federated.png",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-8353-6_6",
    },
    {
      title:
        "A Multisectoral Study of Mpox Epidemiology, Resistance Surveillance, and Policy Gaps: Toward a One Health Framework",
      publisher: "Clinical Reviews in Allergy & Immunology — Springer Nature (Q1, IF 11.3)",
      tag: "Epidemiology",
      description:
        "Accepted in a Q1 Springer Nature journal with an Impact Factor of 11.3 and CiteScore of 18. Contribution focused on systematic analysis of large-scale epidemiological data and the 'One Health' framework to model Mpox epidemiology and identify critical resistance surveillance gaps.",
      image: "./projects/springer.png",
      link: "https://link.springer.com/article/10.1007/s12016-025-09121-7",
    },
    {
      title:
        "Dual-Head Deep Learning Framework for Automated Skin Disease Detection and Cancer Classification with Explainable AI Support",
      publisher: "IEEE ICCIT 2025",
      tag: "Explainable AI",
      description:
        "Introduces a novel Dual-Head Deep Learning framework based on EfficientNetV2-S, performing simultaneous multi-class disease classification and binary malignancy detection with Grad-CAM++ integration. Achieved 94% accuracy in disease classification and 97% in cancer detection.",
      image: "./projects/dual.jpg",
      link: "./projects/dual.jpg",
    },
    {
      title:
        "Enhancing Gall Bladder Cancer Detection by Privacy-Preserving Federated Learning: A Comprehensive CSV-Based Classification Approach",
      publisher: "Springer Nature Singapore",
      tag: "Healthcare AI",
      description:
        "Investigates whether a federated learning framework with the FedProx algorithm can improve predictive analysis for gallbladder cancer patients. Integrates radiomic features with clinicopathological CT scan data to create an accurate prognostic model while preserving patient privacy.",
      image: "./projects/cancer.png",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-8353-6_9",
    },
  ];

  const firstFour = papers.slice(0, 4);
  const lastOne = papers[4];

  const tagColors = {
    "Blockchain": "from-sky-500 to-blue-600",
    "Federated Learning": "from-violet-500 to-purple-600",
    "Epidemiology": "from-emerald-500 to-teal-600",
    "Explainable AI": "from-orange-500 to-rose-500",
    "Healthcare AI": "from-fuchsia-500 to-pink-600",
  };

  const PaperCard = ({ paper, wide = false }) => (
    <a
      href={paper.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/70 backdrop-blur-md shadow-xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-1 ${wide ? "flex flex-col md:flex-row" : "flex flex-col"}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Image */}
      <div className={`relative overflow-hidden ${wide ? "md:w-2/5 h-56 md:h-auto" : "h-52"} flex-shrink-0`}>
        <img
          src={paper.image}
          alt={paper.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag badge */}
        <span className={`absolute top-3 left-3 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${tagColors[paper.tag] || "from-pink-500 to-fuchsia-600"} shadow-lg`}>
          {paper.tag}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-between p-6 ${wide ? "md:w-3/5" : ""}`}>
        <div className="space-y-3">
          <p className="text-xs font-semibold text-pink-400 uppercase tracking-widest">
            {paper.publisher}
          </p>
          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-pink-100 transition-colors duration-300">
            {paper.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
            {paper.description}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-pink-400 font-semibold">
          <span>View Publication</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );

  return (
    <section id="research" className="py-28 px-6 bg-background text-foreground relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-4 block">
            Academic Work
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Research Publications
          </h2>
        </div>

        {/* Research Bio Block */}
        <div className="relative max-w-4xl mx-auto mb-16 p-8 md:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-lg backdrop-blur-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-pink-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="./projects/meh.jpg"
              alt="Mehjabin Hossain"
              className="w-28 h-28 rounded-full object-cover border-2 border-pink-500 shadow-lg shadow-pink-500/20 flex-shrink-0"
            />
            <div className="text-center md:text-left space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Mehjabin Hossain
              </h3>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
                Published first-author papers in IEEE and Springer Nature focusing on Explainable AI, Machine Learning, Blockchain, and Federated Learning — building tech you can actually trust.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                {["5 Publications", "IEEE Access", "Springer Nature", "ICCIT 2025"].map(badge => (
                  <span key={badge} className="text-xs text-pink-300 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
                <a
                  href="https://scholar.google.com/citations?user=jH2i8VcAAAAJ&hl=en&authuser=3&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                  </svg>
                  Google Scholar
                </a>
                <a
                  href="https://ieeexplore.ieee.org/author/853430095526434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  IEEE Xplore Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* First 4 papers — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {firstFour.map((paper, index) => (
            <PaperCard key={index} paper={paper} />
          ))}
        </div>

        {/* 5th paper — centered, wider card */}
        <div className="flex justify-center">
          <div className="w-full md:w-[calc(50%-12px)]">
            <PaperCard paper={lastOne} />
          </div>
        </div>

      </div>
    </section>
  );
};