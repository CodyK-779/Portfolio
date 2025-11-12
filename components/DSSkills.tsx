"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Zap,
  Server,
  Globe,
  Terminal,
  Shield,
  GitBranch,
  Cloud,
  Layers,
  Cpu,
} from "lucide-react";

const SkillsSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Palette className="w-5 h-5" />,
      description:
        "Creating responsive, accessible, and performant user interfaces",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "HTML5",
          level: "Advanced",
          icon: "🌐",
          description: "Semantic markup and modern HTML features",
        },
        {
          name: "CSS3",
          level: "Advanced",
          icon: "🎨",
          description: "Modern CSS with Flexbox, Grid, and animations",
        },
        {
          name: "JavaScript",
          level: "Advanced",
          icon: "⚡",
          description: "ES6+, modern syntax, and DOM manipulation",
        },
        {
          name: "TypeScript",
          level: "Advanced",
          icon: "🔷",
          description: "Type-safe JavaScript development",
        },
        {
          name: "React",
          level: "Advanced",
          icon: "⚛️",
          description: "Component-based UI library with hooks",
        },
        {
          name: "Next.js",
          level: "Advanced",
          icon: "▲",
          description: "Full-stack React framework with App Router",
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          icon: "💨",
          description: "Utility-first CSS framework",
        },
      ],
    },
    backend: {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5" />,
      description: "Building robust APIs and efficient data management systems",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Next.js API",
          level: "Advanced",
          icon: "🚀",
          description: "API routes and server-side functionality",
        },
        {
          name: "Prisma",
          level: "Advanced",
          icon: "🗄️",
          description: "Modern database toolkit and ORM",
        },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          icon: "🐘",
          description: "Relational database management",
        },
        {
          name: "Better-Auth",
          level: "Advanced",
          icon: "🔐",
          description: "Modern authentication solutions",
        },
        {
          name: "REST APIs",
          level: "Advanced",
          icon: "🔗",
          description: "Designing and consuming RESTful APIs",
        },
      ],
    },
    tools: {
      title: "Development Tools",
      icon: <Terminal className="w-5 h-5" />,
      description: "Tools and platforms that enhance development workflow",
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          icon: "📚",
          description: "Version control and collaboration",
        },
        {
          name: "Vercel",
          level: "Advanced",
          icon: "▲",
          description: "Cloud platform for frontend frameworks",
        },
        {
          name: "VS Code",
          level: "Expert",
          icon: "💻",
          description: "Code editor with extensive extensions",
        },
        {
          name: "Figma",
          level: "Intermediate",
          icon: "🎨",
          description: "Design and prototyping tool",
        },
        {
          name: "Chrome DevTools",
          level: "Advanced",
          icon: "🔧",
          description: "Debugging and performance analysis",
        },
      ],
    },
  };

  const SkillCard = ({ skill, categoryColor }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{skill.icon}</div>
          <div>
            <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
            <div
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                skill.level === "Expert"
                  ? "bg-green-500/20 text-green-400"
                  : skill.level === "Advanced"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {skill.level}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">
        {skill.description}
      </p>

      {/* Hover gradient effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
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
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
          <Zap className="w-4 h-4" />
          Technical Expertise
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="text-blue-500">Development</span> Stack
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I use to
          build scalable, performant web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
        {/* Category Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-3 sticky top-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 group ${
                  activeCategory === key
                    ? "bg-blue-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/25"
                    : "bg-gray-900/50 border border-gray-800 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {category.title}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {category.description}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillCard
                      skill={skill}
                      categoryColor={skillCategories[activeCategory].color}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Full Stack Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-3xl border border-white/10 p-8 md:p-12"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Full-Stack <span className="text-cyan-500">Capabilities</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end development expertise from database design to
            pixel-perfect interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              phase: "Frontend",
              description: "Modern React-based interfaces",
              technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
              ],
              icon: <Palette className="w-6 h-6" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              phase: "Backend",
              description: "Server logic and data management",
              technologies: [
                "Next.js API",
                "Prisma",
                "PostgreSQL",
                "Better-Auth",
                "REST APIs",
              ],
              icon: <Server className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              phase: "Tools & Deployment",
              description: "Development workflow and deployment",
              technologies: [
                "Git & GitHub",
                "Vercel",
                "VS Code",
                "Figma",
                "Chrome DevTools",
              ],
              icon: <Cloud className="w-6 h-6" />,
              color: "from-orange-500 to-red-500",
            },
          ].map((stack, index) => (
            <motion.div
              key={stack.phase}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stack.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {stack.icon}
              </div>
              <h4 className="font-bold text-white text-xl mb-3">
                {stack.phase}
              </h4>
              <p className="text-gray-400 text-sm mb-6">{stack.description}</p>
              <div className="space-y-2">
                {stack.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="text-white text-sm bg-white/5 rounded-lg py-2 px-3 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Modern <span className="text-purple-500">Tech Stack</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            { name: "Next.js", color: "bg-black text-white" },
            { name: "TypeScript", color: "bg-blue-600 text-white" },
            { name: "React", color: "bg-cyan-500 text-white" },
            { name: "Tailwind CSS", color: "bg-teal-500 text-white" },
            { name: "Prisma", color: "bg-emerald-600 text-white" },
            { name: "PostgreSQL", color: "bg-blue-700 text-white" },
            { name: "Better-Auth", color: "bg-purple-600 text-white" },
            { name: "HTML5", color: "bg-orange-500 text-white" },
            { name: "CSS3", color: "bg-blue-500 text-white" },
            { name: "JavaScript", color: "bg-yellow-500 text-black" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-4 py-2 rounded-full font-semibold text-sm ${tech.color} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection2;
