// components/Services.jsx
import { motion } from "framer-motion";
import { FiCode, FiServer, FiCloud, FiDatabase } from "react-icons/fi";

const services = [
  {
    icon: <FiCode className="w-12 h-12 text-blue-500" />,
    title: "Frontend Development",
    description: "Building responsive, user-friendly interfaces with React.js and modern frameworks.",
  },
  {
    icon: <FiServer className="w-12 h-12 text-green-500" />,
    title: "Backend Development",
    description: "Developing scalable REST APIs using Node.js, Express, and secure authentication.",
  },
  {
    icon: <FiCloud className="w-12 h-12 text-purple-500" />,
    title: "Cloud & DevOps",
    description: "Deploying applications on cloud platforms and setting up CI/CD pipelines.",
  },
  {
    icon: <FiDatabase className="w-12 h-12 text-yellow-500" />,
    title: "Database Management",
    description: "Designing efficient MongoDB & SQL databases with optimized queries.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          My Services
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-10">
          I specialize in modern web development, ensuring high-performance, scalable applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
