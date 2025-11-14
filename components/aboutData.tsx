import { Code, Shield, Zap, Brain } from "lucide-react";

export const statsData = [
  {
    title: "3+",
    desc: "Production Apps",
  },
  {
    title: "100%",
    desc: "Typescript Coverage",
  },
  {
    title: "Modern",
    desc: "Tech Stack",
  },
  {
    title: "Secure",
    desc: "Authentication",
  },
];

export const aboutData = [
  {
    icon: <Zap className="size-6 text-yellow-400 mt-1" />,
    title: "Performance & Scalability",
    desc: "Architecting applications that remain fast and reliable as they grow, ensuring optimal user experience at any scale.",
    style:
      "border-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm px-4 py-5 rounded-2xl",
  },
  {
    icon: <Code className="size-6 text-blue-400 mt-1" />,
    title: "Type-Safe Development",
    desc: "Leveraging 100% TypeScript coverage to eliminate runtime errors and ensure maintainable, robust code.",
    style:
      "border-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 py-5 rounded-2xl",
  },
  {
    icon: <Shield className="size-6 text-green-400 mt-1" />,
    title: "Secure by Design",
    desc: "Implementing robust authentication and data protection from the start, building trust through security.",
    style:
      "border-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm px-4 py-5 rounded-2xl",
  },
  {
    icon: <Brain className="size-6 text-purple-400 mt-1" />,
    title: "Continuous Learning",
    desc: "Always exploring new tools and patterns to solve problems more effectively in this rapidly evolving industry.",
    style:
      "border-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm px-4 py-5 rounded-2xl",
  },
];
