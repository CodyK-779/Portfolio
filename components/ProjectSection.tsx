import Image from "next/image";
import { projectsData } from "./projectsData";
import { RainbowButton } from "./ui/rainbow-button";
import { Globe } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="grid grid-cols-3 gap-4">
      {projectsData.map((data) => (
        <div
          key={data.title}
          className="border border-neutral-600 bg-black rounded-lg overflow-hidden cursor-pointer group"
        >
          <a href={data.link}>
            <div className="relative w-full h-48">
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
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
              <p className="text-sm  text-neutral-300">{data.desc}</p>
              <h4 className="font-semibold mt-4 text-neutral-100">
                Technologies Used:
              </h4>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                {data.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="border font-medium text-xs border-neutral-800 px-3 rounded-full py-0.5"
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <RainbowButton
                variant="outline"
                className="flex items-center justify-center h-8 rounded px-3"
                asChild
              >
                <a href={data.github}>
                  <i className="ri-github-fill text-black text-lg"></i>
                  <p className="text-black font-medium">GitHub</p>
                </a>
              </RainbowButton>
              <RainbowButton
                className="flex items-center justify-center h-8 rounded px-3"
                asChild
              >
                <a href={data.link}>
                  <Globe />
                  <p className="font-medium">Live Demo</p>
                </a>
              </RainbowButton>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
