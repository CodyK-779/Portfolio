"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

const footerSocials = [
  {
    name: "GitHub",
    icon: "ri-github-fill",
    link: "https://github.com/yourusername",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-box-fill",
    link: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: "ri-mail-fill",
    link: "mailto:your.email@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "Portfolio",
    icon: "ri-global-fill",
    link: "https://yourportfolio.vercel.app",
    color: "hover:text-green-400",
  },
];

const DSFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <section className="max-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-400">
              © {currentYear} Khant Zaw Thein. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {footerSocials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center 
                  size-10 rounded-lg 
                  bg-white/5 border border-white/10
                  transition-all duration-300
                  hover:bg-white/10 hover:scale-110
                  ${social.color}
                `}
              >
                <i className={`${social.icon} text-base text-neutral-300`}></i>
              </a>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <p className="text-xs text-neutral-500">
              ⚡ Powered by Next.js & Vercel
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default DSFooter;
