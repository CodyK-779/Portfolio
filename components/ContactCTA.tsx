"use client";

import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center min-[375px]:mt-10 mt-6"
    >
      <RainbowButton
        asChild
        variant="outline"
        className="min-[375px]:lg-rainbow-btn sm:w-fit w-full group sm:hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Link
          href="#contact"
          className="font-medium flex items-center group-hover:text-lg gap-2"
        >
          Get In Touch
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </RainbowButton>
    </motion.div>
  );
};

export default ContactCTA;
