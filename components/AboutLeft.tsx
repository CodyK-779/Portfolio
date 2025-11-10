import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { containerVariants, itemVariants } from "./AboutContent";

const AboutLeft = () => {
  return (
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
        <p className="text-neutral-300 leading-relaxed font-medium">
          I'm a self-taught full-stack developer who discovered my passion for
          building things on the web. What started as curiosity has evolved into
          a dedicated pursuit of mastering modern web technologies.
        </p>
        <p className="text-neutral-300 leading-relaxed font-medium">
          I specialize in the <strong>Next.js ecosystem</strong>, creating
          performant, type-safe applications with excellent developer and user
          experiences. Every project is an opportunity to solve interesting
          problems and push my skills further.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center text-neutral-700 gap-2">
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
              <strong>Performance:</strong> Fast-loading, optimized applications
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
  );
};

export default AboutLeft;
