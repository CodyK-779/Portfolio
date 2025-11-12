"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code2,
  Shield,
  Database,
  Palette,
  Globe,
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "Next.js",
      level: 95,
      category: "Framework",
      description:
        "Full-stack React framework with App Router, Server Components, and optimized performance",
      icon: "▲",
      color: "from-black to-gray-800",
      projects: ["Dev-Union", "NewsNugget", "Portfolio"],
      proficiency: "Expert",
    },
    {
      name: "TypeScript",
      level: 90,
      category: "Language",
      description:
        "Strongly typed programming language that builds on JavaScript with better tooling",
      icon: "🔷",
      color: "from-blue-600 to-blue-800",
      projects: ["All Projects"],
      proficiency: "Advanced",
    },
    {
      name: "React",
      level: 88,
      category: "Library",
      description:
        "Modern UI library for building interactive user interfaces with hooks and components",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      projects: ["Dev-Union", "NewsNugget", "Portfolio"],
      proficiency: "Advanced",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      category: "Styling",
      description:
        "Utility-first CSS framework for rapidly building custom designs",
      icon: "🎨",
      color: "from-teal-500 to-cyan-500",
      projects: ["All Projects"],
      proficiency: "Expert",
    },
    {
      name: "Prisma",
      level: 85,
      category: "Database",
      description:
        "Modern database toolkit with type-safe database access and migrations",
      icon: "🗄️",
      color: "from-emerald-500 to-green-500",
      projects: ["Dev-Union", "NewsNugget"],
      proficiency: "Advanced",
    },
    {
      name: "Better-Auth",
      level: 82,
      category: "Authentication",
      description:
        "Modern authentication library with built-in security and easy integration",
      icon: "🔐",
      color: "from-purple-500 to-pink-500",
      projects: ["Dev-Union"],
      proficiency: "Advanced",
    },
  ];

  const categories = [
    {
      name: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: <Palette className="w-5 h-5" />,
      description: "Modern frontend development with React ecosystem",
    },
    {
      name: "Backend",
      skills: ["Next.js API", "Prisma", "Better-Auth"],
      icon: <Database className="w-5 h-5" />,
      description: "Server-side logic and API development",
    },
    {
      name: "Full-Stack",
      skills: ["Next.js", "TypeScript", "Prisma", "Better-Auth"],
      icon: <Globe className="w-5 h-5" />,
      description: "End-to-end application development",
    },
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-lg font-bold`}
            >
              {skill.icon}
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.category}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-blue-400 font-bold text-lg">
              {skill.level}%
            </div>
            <div className="text-gray-500 text-xs">{skill.proficiency}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {skill.description}
        </p>

        {/* Used In */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Used in:</span>
          <div className="flex gap-1">
            {skill.projects.map((project, i) => (
              <span key={i} className="px-2 py-1 bg-gray-800 rounded-lg">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
      />
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 max-w-6xl mx-auto"
      ref={ref}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm mb-6">
          <Zap className="w-4 h-4" />
          <p className="font-medium">Technical Stack</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Specialized in the modern web development stack that powers fast,
          secure, and scalable applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      {/* Categories Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-3xl border border-white/10 p-8 mb-16"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Development <span className="text-cyan-500">Specializations</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Organized by development domains and technology categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:border-white/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="font-bold text-white text-lg mb-2">
                {category.name}
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-white text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hover Detail Panel */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 max-w-md z-50"
          >
            <div className="text-center">
              <h4 className="font-bold text-white mb-2">
                {skills.find((s) => s.name === hoveredSkill)?.name}
              </h4>
              <p className="text-gray-300 text-sm">
                {skills.find((s) => s.name === hoveredSkill)?.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
