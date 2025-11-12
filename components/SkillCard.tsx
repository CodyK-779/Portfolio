import Image from "next/image";
import { TabsContent } from "./ui/tabs";
import { ShineBorder } from "./ui/shine-border";

interface DataType {
  name: string;
  img: string;
  desc: string;
}

interface Props {
  tabValue: string;
  skillData: DataType[];
}

const SkillCard = ({ tabValue, skillData }: Props) => {
  return (
    <TabsContent value={tabValue} className="max-w-5xl mx-auto mt-16 w-full">
      <div className="grid min-[972px]:grid-cols-3 grid-cols-2 gap-4">
        {skillData.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3.5 p-3.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group hover:-translate-y-1.5 transition-transform duration-300 ease-in"
          >
            <ShineBorder
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in"
              shineColor={["#ef4444", "#2563eb", "#ef4444", "#2563eb"]}
            />
            <div className="relative min-[654px]:size-11 size-10 rounded overflow-hidden ">
              <Image
                src={skill.img}
                alt={skill.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="min-[654px]:text-lg text-base font-semibold">
                {skill.name}
              </p>
              <p className="text-sm text-neutral-300">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default SkillCard;
