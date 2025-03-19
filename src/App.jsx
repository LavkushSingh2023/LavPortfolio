// App.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import About from './components/About';
import Services from './components/Services';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <AnimatePresence>
          {loading ? (
            <Loader setLoading={setLoading} />
          ) : (
            <>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Hero />
              <About/>
              <Services/>
              <Skills />
              <Experience />
              <Projects />             
              <Contact />              
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;