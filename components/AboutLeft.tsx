"use client";

import { statsData } from "./aboutData";
import { motion } from "framer-motion";

const AboutLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 transition-all duration-300 ease-out"
    >
      {/* About Me */}
      <div>
        <h1 className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold min-[400px]:mb-6 mb-4">
          About Me
        </h1>
        <div className="border-0 bg-white/5 backdrop-blur-sm shadow-2xl p-6 rounded-2xl">
          <div className="space-y-6">
            <p className="sm:text-lg min-[400px]:text-base min-[350px]:text-sm text-xs text-white/90 leading-relaxed font-medium">
              I'm a{" "}
              <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                self-taught full-stack developer
              </strong>{" "}
              specializing in the modern Next.js ecosystem. I transform ideas
              into production-ready, type-safe applications that don't just
              function, they deliver exceptional speed, security, and user
              experience.
            </p>
            <p className="sm:text-lg min-[400px]:text-base min-[350px]:text-sm text-xs text-white/90 leading-relaxed font-medium">
              With expertise across the full stack—from the UI (
              <strong className="text-yellow-400">
                Next.js, React, Tailwind CSS
              </strong>
              ) to the backend and database. I build cohesive, scalable systems
              that stand up to real-world demands.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="sm:p-6 min-[400px]:p-4 px-2 py-4 grid grid-cols-2 gap-6 rounded-2xl text-center bg-white/5 backdrop-blur-sm">
        {statsData.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-center justify-center"
          >
            <p className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {stat.title}
            </p>
            <p className="sm:text-base min-[400px]:text-sm text-xs font-medium">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutLeft;
