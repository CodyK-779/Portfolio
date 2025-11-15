"use client";

import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 transition-all duration-300 ease-out"
    >
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
