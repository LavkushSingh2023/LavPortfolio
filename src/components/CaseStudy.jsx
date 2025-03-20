import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsCaseStydy } from "../data/projectsCaseStudy";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsCaseStydy.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-center text-red-500 text-2xl">Project Not Found</h2>
      </div>
    );
  }

  return (
    // Wrapper provides top padding to clear the fixed Navbar and bottom padding for separation.
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        className="max-w-5xl mx-auto px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-lg shadow-2xl pt-12"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center mb-10"
          variants={sectionVariants}
        >
          {project.title} - Case Study
        </motion.h1>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{project.overview}</p>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Problem Statement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{project.problem}</p>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Solution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{project.solution}</p>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Tech Stack & Architecture
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300">
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Challenges & Solutions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Impact & Future Scope
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {project.impact}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {project.future}
          </p>
        </motion.section>

        <motion.section className="mb-10" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Live Project & Source Code
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-lg shadow-lg"
            >
              Live URL
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-900 transition duration-300 text-white rounded-lg shadow-lg"
            >
              GitHub Repo
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
