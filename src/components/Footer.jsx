import { FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Lavkush Singh</h3>
            <p className="text-sm">Full-Stack Developer specializing in MERN stack applications</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm flex justify-between items-center">
          <span>© {new Date().getFullYear()} Lavkush Singh. All rights reserved.</span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-400" />}
            <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
