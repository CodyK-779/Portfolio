"use client";

import { motion, useInView } from "framer-motion";
import { Zap } from "lucide-react";
import { useRef } from "react";

const SkillsHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6">
        <Zap className="sm:size-4 size-3.5" />
        <p className="sm:text-sm text-xs font-medium">Technical Stack</p>
      </div>

      <h2 className="md:text-5xl min-[400px]:text-4xl text-3xl font-bold sm:mb-4 mb-3">
        Technical{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <p className="lg:text-xl sm:text-lg min-[400px]:text-base text-sm font-medium text-gray-300 sm:max-w-2xl w-full mx-auto leading-relaxed">
        Specialized in the modern web development stack that powers fast,
        secure, and scalable applications.
      </p>
    </motion.div>
  );
};

export default SkillsHeader;
