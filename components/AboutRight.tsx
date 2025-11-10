import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./AboutContent";
import { skills } from "./About";

const AboutRight = () => {
  return (
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
          <div className="text-sm opacity-90 font-medium">
            Production-Ready Applications
          </div>
          {/* <div className="text-sm opacity-90 font-medium">Full-Stack Projects</div> */}
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
          <div className="text-sm opacity-90 font-medium">
            TypeScript Coverage
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold mb-1">Modern</div>
          <div className="text-sm opacity-90 font-medium">Tech Stack Focus</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold mb-1">Secure</div>
          <div className="text-sm opacity-90 font-medium">Authentication</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutRight;
