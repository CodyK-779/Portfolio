import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import TiltedCard from "./ui/TiltedCard";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const socialIcons = [
  {
    icon: "ri-facebook-fill",
    name: "Faceook",
    href: "#",
    color: "bg-blue-600",
  },
  {
    icon: "ri-instagram-line",
    name: "Instagram",
    href: "#",
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
  },

  {
    icon: "ri-linkedin-box-fill",
    name: "Linkedin",
    href: "#",
    color: "bg-blue-700",
  },
  {
    icon: "ri-github-fill",
    name: "Github",
    href: "https://github.com/CodyK-779",
    color: "bg-gray-700",
  },
];

const HeroSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 min-h-screen flex justify-center lg:mt-6 mt-28">
      <div className="grid lg:grid-cols-2 w-full grid-cols-1 items-center justify-center lg:gap-16">
        {/* First Column */}
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
            I specialize in building scalable and responsive full-stack
            applications using <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Prisma</strong> and{" "}
            <strong>Tailwind CSS</strong>— with a focus on clean UI and secure
            authentication powered by <strong>Better-Auth</strong>.
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
              <a
                key={social.icon}
                href={social.href}
                className="group relative overflow-hidden"
              >
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <div
                      className={`relative ${social.color}  border border-neutral-800 size-11 rounded-full flex items-center justify-center group-hover:border-transparent transition-all duration-300`}
                    >
                      <i
                        className={`${social.icon} text-lg text-white relative z-10`}
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

        {/* Second Column with Profile Picture */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="lg:size-[425px] md:size-[400px] sm:size-[350px] min-[450px]:size-[280px] size-[250px] aspect-square rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.4)]">
            <TiltedCard
              imageSrc="/test.jpeg"
              altText="Profile Picture"
              captionText="Khant Zaw Thein"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
