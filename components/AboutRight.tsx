"use client";

import { aboutData } from "./aboutData";
import { motion } from "framer-motion";

const AboutRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="transition-all duration-300 ease-out"
    >
      <h1 className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold min-[400px]:mb-6 mb-4">
        What I Deliver
      </h1>
      <div className="space-y-4">
        {aboutData.map((data) => (
          <div key={data.title} className={data.style}>
            <div className="flex items-start gap-4">
              {data.icon}
              <div>
                <h3 className="sm:text-lg min-[375px]:text-base text-sm text-white font-semibold mb-1.5">
                  {data.title}
                </h3>
                <p className="text-white/80 sm:text-base min-[375px]:text-sm text-xs">
                  {data.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutRight;
