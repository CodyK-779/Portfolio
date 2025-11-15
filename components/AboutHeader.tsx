"use client";

import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center min-[366px]:mb-16 mb-14 transition-all duration-300 ease-out"
    >
      <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
        <Rocket className="sm:size-4 size-3 text-blue-500" />
        <span className="sm:text-sm text-xs font-medium text-blue-500">
          Next.js Specialist
        </span>
      </div>
      <h1 className="lg:text-5xl md:text-4xl min-[400px]:text-3xl min-[366px]:text-2xl text-xl font-bold min-[400px]:mb-4 mb-2.5">
        Building{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Scalable Solutions
        </span>
      </h1>

      <p className="lg:text-xl sm:text-lg min-[400px]:text-base min-[366px]:text-sm text-xs font-medium text-neutral-300 sm:max-w-2xl w-full mx-auto">
        Full-stack developer crafting user-centric web applications with
        exceptional performance, security, and user experience.
      </p>
    </motion.div>
  );
};

export default AboutHeader;
