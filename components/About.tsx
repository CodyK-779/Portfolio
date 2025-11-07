"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Shield, Zap, Globe } from "lucide-react";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 max-w-6xl mx-auto" id="#about">
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
          Passionate about crafting digital experiences that are both beautiful
          and functional
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Story & Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-neutral-300 leading-relaxed">
              I'm a self-taught full-stack developer who discovered my passion
              for building things on the web. What started as curiosity has
              evolved into a dedicated pursuit of mastering modern web
              technologies.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              I specialize in the <strong>Next.js ecosystem</strong>, creating
              performant, type-safe applications with excellent developer and
              user experiences. Every project is an opportunity to solve
              interesting problems and push my skills further.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              My Approach
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Clean Code:</strong> Readable, maintainable, and
                  well-documented
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Type Safety:</strong> Leveraging TypeScript to catch
                  errors early
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Performance:</strong> Fast-loading, optimized
                  applications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Security:</strong> Robust authentication and data
                  protection
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Column - Skills & Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {skillGroup.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">3+</div>
              <div className="text-sm opacity-90">Full-Stack Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">TypeScript Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">Modern</div>
              <div className="text-sm opacity-90">Tech Stack</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">Secure</div>
              <div className="text-sm opacity-90">Authentication</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
