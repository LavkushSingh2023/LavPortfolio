// components/Navbar.jsx
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiCode } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = [
     { name: 'About', target: 'about' },
     { name: 'Services', target: 'services'},
    { name: 'Projects', target: 'projects' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <FiCode className="text-xl" />
          <span className="font-semibold">LavPortfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;