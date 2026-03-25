import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-textPrimary selection:bg-accent selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col w-full h-full">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
