import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A robust full-stack shopping solution with real-time inventory management and seamless payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/project1.jpg",
    github: "#",
    live: "#",
    caseStudy: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool featuring AI integration to boost productivity.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    image: "/project2.jpg",
    github: "#",
    live: "#",
    caseStudy: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with modern design and animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/project3.jpg",
    github: "#",
    live: "#",
    caseStudy: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with user authentication, CMS, and real-time notifications.",
    tech: ["Gatsby", "GraphQL", "Contentful"],
    image: "/project4.jpg",
    github: "#",
    live: "#",
    caseStudy: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-10">
          A selection of projects demonstrating my expertise in modern web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02] bg-white dark:bg-gray-800"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <FiGithub size={20} />
                    <span className="hidden md:inline">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span className="hidden md:inline">Live</span>
                  </a>
                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      <FiFileText size={20} />
                      <span className="hidden md:inline">Case Study</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
