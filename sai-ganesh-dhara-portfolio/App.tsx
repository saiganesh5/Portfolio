
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <FloatingNav />
      <main>
        <Hero />
        <section id="about" className="py-12" /> {/* Anchor spacer */}
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;
