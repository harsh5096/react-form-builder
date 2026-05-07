import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import useDarkMode from './hooks/useDarkMode';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

const Loader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-10 h-10 rounded-full border-2 border-[var(--border)] border-t-accent animate-spin" />
  </div>
);

export default function App() {
  const [dark, toggleDark] = useDarkMode();
  return (
    <div className="min-h-screen text-[var(--text)] bg-[var(--bg)] selection:bg-accent selection:text-white">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
