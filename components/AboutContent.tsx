"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="max-container min-h-screen my-20" id="about">
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-xl font-medium text-neutral-300 max-w-2xl mx-auto">
          Passionate about crafting digital experiences that are both beautiful
          and functional
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Story & Values */}
        <AboutLeft />

        {/* Right Column - Skills & Technologies */}
        <AboutRight />
      </div>
    </section>
  );
};

export default AboutContent;

/*




*/
