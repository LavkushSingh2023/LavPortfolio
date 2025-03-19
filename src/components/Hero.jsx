// components/Hero.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Crafting scalable, high-performance web applications with modern technologies.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center gap-2">
              <FiFileText /> Download CV
            </button>
            <div className="flex gap-3">
              <a href="#" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md">
                <FiGithub className="text-xl" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md">
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-blue-600/20 rounded-full"
            />
            <img
              src="/profile-placeholder.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 dark:border-gray-800/20"
            />
          </div>
          {/* Floating Tech Icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 text-blue-500 text-4xl"
          >
            <SiReact />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 text-green-500 text-4xl"
          >
            <SiNodedotjs />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 text-cyan-500 text-4xl"
          >
            <SiTailwindcss />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 text-green-600 text-4xl"
          >
            <SiMongodb />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;