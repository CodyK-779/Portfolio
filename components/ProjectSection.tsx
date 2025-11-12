import Image from "next/image";
import { projectsData } from "./projectsData";
import { RainbowButton } from "./ui/rainbow-button";
import { ExternalLink } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

const ProjectSection = () => {
  return (
    <section className="grid min-[1180px]:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-6">
      {projectsData.map((data) => (
        <div
          key={data.title}
          className="relative border border-neutral-600 bg-black rounded-lg overflow-hidden cursor-pointer group"
        >
          <ShineBorder
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in"
            shineColor={["#ef4444", "#2563eb", "#ef4444", "#2563eb"]}
          />
          <a href={data.link}>
            <div className="relative w-full aspect-video min-[1180px]:h-48">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-300 ease-in"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <Image
                src={data.image2}
                alt={data.title}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </a>
          <div className="p-4 relative min-h-[380px]">
            <div className="pb-16 sm:pb-0">
              <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
              <p className="min-[375px]:text-sm text-xs text-neutral-300">
                {data.desc}
              </p>
              <h4 className="font-semibold mt-4 text-neutral-100">
                Technologies Used:
              </h4>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                {data.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 border font-medium text-xs border-neutral-800 pr-2 pl-1 rounded-full py-[3px]"
                  >
                    <div className="relative size-4 rounded-full overflow-hidden">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 left-4">
              <div className="flex items-center gap-2 pt-8">
                <RainbowButton
                  variant="outline"
                  className="flex items-center justify-center h-8 rounded px-3"
                  asChild
                >
                  <a href={data.github}>
                    <i className="ri-github-fill text-black text-lg"></i>
                    <p className="max-[400px]:text-xs text-black font-medium">
                      GitHub
                    </p>
                  </a>
                </RainbowButton>
                <RainbowButton
                  className="flex items-center justify-center h-8 rounded px-3"
                  asChild
                >
                  <a href={data.link}>
                    <ExternalLink />
                    <p className="max-[400px]:text-xs font-medium">Live Demo</p>
                  </a>
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
