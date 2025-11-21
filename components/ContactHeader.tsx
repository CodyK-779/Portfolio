"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm mb-6">
        <Briefcase className="w-4 h-4" />
        <p className="font-medium">Open to Opportunities</p>
      </div>

      <h2 className="md:text-5xl min-[400px]:text-4xl text-3xl font-bold min-[400px]:mb-4 mb-2.5">
        Get In{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Touch
        </span>
      </h2>

      <p className="lg:text-xl sm:text-lg min-[400px]:text-base min-[366px]:text-sm text-xs font-medium text-neutral-300 sm:max-w-2xl w-full mx-auto leading-relaxed">
        Seeking remote full-stack developer positions worldwide. Ready to bring
        modern tech expertise to your distributed team.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
