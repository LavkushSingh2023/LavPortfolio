import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold dark:text-white mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I am a passionate Full-Stack Developer with a strong foundation in building dynamic, scalable web applications. Proficient in the MERN stack, I specialize in crafting efficient, user-centric solutions while continuously expanding my technical expertise. I thrive in collaborative environments, embrace challenges, and am driven by a desire to create impactful digital experiences.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          My expertise <span className="font-semibold">React, Node.js, Express, MongoDB</span>, and cloud-based deployments. I am committed to best practices, performance optimization, and intuitive design to deliver high-quality applications.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          With a problem-solving mindset and a dedication to innovation, I aim to build software solutions that drive real-world impact—whether independently or as part of a dynamic team.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
