"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 transition-all duration-300 ease-out"
    >
      <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-full px-4 py-2 mb-6">
        <Globe className="sm:size-4 size-3" />
        <p className="sm:text-sm text-xs font-medium">Production Apps</p>
      </div>
      <h1 className="lg:text-5xl md:text-4xl min-[400px]:text-3xl min-[350px]:text-2xl text-2xl font-bold min-[400px]:mb-4 mb-2.5">
        Featured{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <p className="lg:text-xl sm:text-lg min-[400px]:text-base text-sm font-medium sm:max-w-2xl w-full mx-auto text-neutral-300">
        A collection of my production-ready applications built with modern
        technologies and best practices.
      </p>
    </motion.div>
  );
};

export default ProjectHeader;
