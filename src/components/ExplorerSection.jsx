// src/components/ExplorerSection.jsx
import { motion } from "framer-motion";

const photos = [
  { src: "./projects/1.jpg", alt: "" },
  { src: "./projects/2.jpg", alt: "" },
  { src: "./projects/3f.jpg", alt: "" },
  { src: "./projects/4.jpg", alt: "" },
  { src: "./projects/5.jpg", alt: "" },
  { src: "./projects/6.jpg", alt: "" },
];

export const ExplorerSection = () => {
  return (
    <section
      id="explorer"
      className="py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
        >
          Eat. Snap. Repeat.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg md:text-xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto leading-relaxed"
        >
And also i'm a total foodie who loves trying out new resturants and all kinds of cruisines. From street eats to fancy dishes, I’m always down to taste something new and snap a pic before digging in. These photos are just a peek into my food adventures — if it looks good, you can bet I’ve tried it (or I’m about to). 🍜🍰
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-white/10 shadow-lg group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
