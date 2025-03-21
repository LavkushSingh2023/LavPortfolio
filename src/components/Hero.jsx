// components/Hero.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiNodedotjs, SiTailwindcss, SiMongodb, SiReact } from 'react-icons/si';

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
          <div className="relative inline-block">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            >
              Lavkush Singh
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full" />
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-md"
          >
            Crafting scalable, high-performance web applications with modern technologies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <button 
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/LavResume.pdf";
                link.download = "Lavkush_Singh_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg transition-all flex items-center gap-2"
            >
              <FiFileText className="text-xl" />
              <span>Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-10" />
            </button>
            
            <div className="flex gap-3">
              <a 
                href="https://github.com/LavkushSingh2023" 
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:-translate-y-1 transform"
              >
                <FiGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lavkushsingh2023/" 
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:-translate-y-1 transform"
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>
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
              src="/LavPhoto.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 dark:border-gray-800/20 shadow-xl"
            />
            
            {/* Rotating Icons Container */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full"
              >
                {/* Top Left */}
                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <SiNodedotjs className="text-3xl text-blue-600 dark:text-purple-400" />                 
                </div>
                {/* Top Right */}
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <SiTailwindcss className="text-3xl text-blue-600 dark:text-purple-400" />
                </div>
                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <SiMongodb className="text-3xl text-blue-600 dark:text-purple-400" />
                </div>
                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
                  <SiReact className="text-3xl text-blue-600 dark:text-purple-400" />                  
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
