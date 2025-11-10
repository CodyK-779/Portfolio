import { Code, Shield, Zap, Globe } from "lucide-react";
import AboutContent from "./AboutContent";

export const skills = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    category: "Backend",
    technologies: ["Next.js API", "Prisma", "Better-Auth", "REST APIs"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Prisma ORM"],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    category: "Tools",
    technologies: ["Git", "Vercel", "VS Code", "Figma"],
    icon: <Zap className="w-6 h-6" />,
  },
];

const AboutPage = () => {
  return <AboutContent />;
};

export default AboutPage;
