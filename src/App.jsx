import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <AnimatePresence>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Services />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                  </>
                }
              />
              <Route path="/case-study/:id" element={<CaseStudy />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
