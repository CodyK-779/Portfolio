import { RainbowButton } from "./ui/rainbow-button";
import Link from "next/link";
import { socialIcons } from "./HeroSection";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const HeroDetails = () => {
  return (
    <div className="flex flex-col lg:text-start text-center order-2 lg:order-1 lg:mt-0 md:mt-10">
      <p className="min-[450px]:text-3xl text-2xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Khant Zaw Thein
        </span>
      </p>
      <h1 className="min-[450px]:text-4xl text-3xl font-bold mt-4">
        Full-Stack Developer
      </h1>
      <p className="min-[450px]:text-base text-sm mt-4 mb-6 text-neutral-300">
        I specialize in building scalable and responsive full-stack applications
        using <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
        <strong>Prisma</strong> and <strong>Tailwind CSS</strong>— with a focus
        on clean UI and secure authentication powered by{" "}
        <strong>Better-Auth</strong>.
      </p>
      <div className="flex items-center lg:justify-start justify-center gap-4">
        <RainbowButton asChild className="sm:lg-rainbow-btn">
          <Link href="#projects">View My Projects</Link>
        </RainbowButton>
        <RainbowButton variant="outline" className="sm:lg-rainbow-btn">
          Download CV{" "}
        </RainbowButton>
      </div>
      {/* Socials */}
      <div className="flex items-center lg:justify-start justify-center gap-3 mt-8">
        {socialIcons.map((social) => (
          <a key={social.icon} href={social.href} className="group relative">
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <div
                  className={`relative ${social.color} size-11 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-current/40 group-hover:-translate-y-1`}
                >
                  <i
                    className={`${social.icon} text-lg text-white relative z-10 transition-transform duration-500 group-hover:scale-110`}
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
    </div>
  );
};

export default HeroDetails;
