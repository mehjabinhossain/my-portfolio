export const ResearchSection = () => {
  const papers = [
    {
      title:
        "From Centralization to Decentralization: Blockchain’s Role in Transforming Social Media Platforms",
      publisher: "IEEE Access (Scopus Q1)",
      description:
        "Published in IEEE Access, this paper explores blockchain’s role in decentralizing social media platforms, enhancing privacy, and user governance.",
      image: "./projects/1.png",
      link: "https://ieeexplore.ieee.org/document/10966494",
    },
    {
      title:
        "Federated Learning Strategies for Confidential Leukemia Detection from Medical Images",
      publisher: "Springer Book Chapter in 'FL in Health Care Technology'",
      description:
        "Published in Springer’s SCI series, our chapter details federated learning techniques for secure leukemia detection from distributed medical images.",
      image: "./projects/2.png",
      link: "https://link.springer.com/book/9789819683529",
    }, 
    {
      title:
        "A Multisectoral Study of Mpox Epidemiology, Resistance Surveillance, and Policy Gaps: Toward a One Health Framework",
      publisher: "Springer Nature journal",
      description:
        "Officially accepted for publication in Clinical Reviews in Allergy & Immunology.A Q1 Springer Nature journal with an Impact Factor of 11.3 and a CiteScore of 18. The paper has been accepted and is currently in the online publication process.",
      image: "./projects/mpox.jpg",
      link: "./projects/mpox.jpg",
    },
    {
      title:
        "Dual-Head Deep Learning Framework for Automated Skin Disease Detection and Cancer Classification with Explainable AI Support",
      publisher: "IEEE ICCIT",
      description:
        "Officially accepted for publication in Clinical Reviews in Allergy & Immunology.    A Q1 Springer Nature journal with an Impact Factor of 11.3 and a CiteScore of 18. The paper has been accepted and is currently in the online publication process.",
      image: "./projects/dual.jpg",
      link: "./projects/dual.jpg",
    },
  ];

  return (
    <section id="research" className="py-28 px-6 bg-background text-foreground relative">
      <div className="max-w-7xl mx-auto">
        {/* 🔮 Section Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
          Research Publications
        </h2>

{/* 👩‍🔬 Enhanced Research Bio Block */}
<div className="relative max-w-6xl mx-auto mb-20 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/60 to-black/30 border border-white/10 shadow-[0_0_30px_#f472b6]/10 backdrop-blur-md overflow-hidden group">

  {/* 🎨 Background Glow Animation */}
  <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-red-500 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 animate-fade-slide-in">
    
    {/* 📸 Profile Picture */}
    <img
      src="./projects/meh.jpg"
      alt="Mehjabin Hossain"
      className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-pink-500 shadow-md hover:scale-105 transition-transform duration-500"
    />

    {/* 📝 Info */}
    <div className="text-center md:text-left space-y-4">
      <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x tracking-tight">
        Mehjabin Hossain
      </h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        A creative and results-driven individual blending <span className="text-white font-medium">HR, SEO, and technology expertise</span>. Currently pursuing her bachelor’s degree, she’s passionate about education, innovation, and research. Recently co-authored a chapter on <span className="text-white font-medium">federated learning in healthcare</span>, published in a Springer volume.
      </p>

      {/* 🔗 IEEE Profile Button */}
      <a
        href="https://ieeexplore.ieee.org/author/853430095526434"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-full bg-pink-600 hover:bg-fuchsia-600 text-white font-semibold text-sm shadow-lg transition duration-300 transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        View IEEE Xplore Profile
      </a>
    </div>
  </div>
</div>


        {/* 💬 Summary Text */}
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto leading-relaxed">
          Discover my contributions to blockchain-based systems, federated learning, and
          AI-driven healthcare.
        </p>

        {/* 🧾 Publication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {papers.map((paper, index) => (
            <a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block transform transition-transform duration-500 hover:scale-[1.025]"
            >
              {/* ✨ Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-red-500 opacity-25 group-hover:opacity-70 blur-xl z-0 transition-opacity duration-700 pointer-events-none" />

              {/* 📄 Card */}
              <div className="relative z-10 p-6 bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="rounded-xl w-full h-64 object-cover mb-6 border border-white/10 shadow-inner"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xl font-semibold text-pink-400">
                    {paper.publisher}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {paper.description}
                  </p>
                </div>
                <span className="mt-6 inline-block text-sm text-pink-400 font-medium hover:underline">
                  🔗 View Full Publication
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
