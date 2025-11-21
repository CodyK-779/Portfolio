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

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/10 backdrop-blur-sm">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5" />

      <section className="max-container relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-medium text-neutral-400">
              © {currentYear} Khant Zaw Thein
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Crafting digital experiences with modern tech
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="flex items-center gap-4">
              {footerSocials.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex items-center justify-center 
                          size-12 rounded-xl 
                          bg-white/5 backdrop-blur-sm 
                          border border-white/10 
                          transition-all duration-300 ease-out
                          hover:bg-white/10 hover:border-white/20
                          hover:shadow-lg hover:shadow-blue-500/10
                          ${social.color}
                        `}
                      >
                        <i
                          className={`${social.icon} text-lg text-neutral-300 transition-colors duration-300`}
                        ></i>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="font-medium text-sm">{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a
                href="#home"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-neutral-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-center text-xs text-neutral-500">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </section>
    </footer>
  );
};

export default ModernFooter;
