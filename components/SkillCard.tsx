"use client";

import Image from "next/image";
import { TabsContent } from "./ui/tabs";
import { ShineBorder } from "./ui/shine-border";
import { motion } from "framer-motion";

interface DataType {
  name: string;
  img: string;
  desc: string;
  color: string[];
}

interface Props {
  tabValue: string;
  skillData: DataType[];
}

const SkillCard = ({ tabValue, skillData }: Props) => {
  return (
    <TabsContent value={tabValue} className="max-w-5xl mx-auto mt-16 w-full">
      <motion.div
        initial="hidden"
        animate="show"
        className="grid min-[972px]:grid-cols-3 grid-cols-2 gap-4 transition-all duration-300 ease-out"
      >
        {skillData.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            key={skill.name}
            className="transition-all duration-300 ease-out"
          >
            <div className="flex min-[580px]:flex-row flex-col items-center gap-3.5 min-[580px]:p-3.5 px-2 py-3.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group hover:-translate-y-1.5 transition-transform duration-300 ease-in">
              <ShineBorder
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in"
                shineColor={skill.color}
              />
              <div className="relative min-[654px]:size-11 min-[375px]:size-10 size-9 rounded overflow-hidden ">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="flex flex-col min-[580px]:text-start text-center min-[580px]:gap-0.5 gap-1">
                <p className="min-[654px]:text-lg min-[375px]:text-base text-sm font-semibold">
                  {skill.name}
                </p>
                <p className="min-[400px]:text-sm text-xs text-neutral-300">
                  {skill.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </TabsContent>
  );
};

export default SkillCard;
