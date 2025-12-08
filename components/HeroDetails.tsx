"use client";

import { RainbowButton } from "./ui/rainbow-button";
import Link from "next/link";
import { socialIcons } from "./HeroSection";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

const HeroDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col lg:text-start text-center lg:mt-0 md:mt-10 transition-all duration-300 ease-out"
    >
      <p className="min-[450px]:text-3xl min-[375px]:text-2xl text-xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Khant Zaw Thein
        </span>
      </p>
      <h1 className="min-[450px]:text-4xl min-[375px]:text-3xl text-2xl font-bold min-[450px]:mt-4 mt-2">
        Full-Stack Developer
      </h1>
      <p className="min-[450px]:text-base min-[350px]:text-sm text-xs mt-4 mb-6 text-neutral-300">
        I specialize in building scalable and responsive Full-Stack applications
        using <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
        <strong>Prisma</strong> and <strong>TailwindCSS—</strong> with a focus
        on clean UI and secure authentication powered by{" "}
        <strong>Better-Auth</strong>.
      </p>
      <div className="flex items-center lg:justify-start justify-center gap-4">
        <RainbowButton
          asChild
          className="sm:lg-rainbow-btn max-[375px]:sm-rainbow-btn"
        >
          <Link href="#projects">View My Projects</Link>
        </RainbowButton>
        <a href="/khantzawthein_web-dev_cv.pdf" download>
          <RainbowButton
            variant="outline"
            className="sm:lg-rainbow-btn max-[375px]:sm-rainbow-btn font-medium"
          >
            Download CV
          </RainbowButton>
        </a>
      </div>
      {/* Socials */}
      <div className="flex items-center lg:justify-start justify-center gap-3 mt-8">
        {socialIcons.map((social) => (
          <a key={social.icon} href={social.href} className="group relative">
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <div
                  className={`relative ${social.color} min-[375px]:size-11 size-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-current/40 group-hover:-translate-y-1`}
                >
                  <i
                    className={`${social.icon} min-[375px]:text-lg text-white relative z-10 transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white">
                <p className="text-black font-medium">{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroDetails;
