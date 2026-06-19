import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './gradient/ThemeProvider';
import { MouseTrail } from './gradient/MouseTrail';
import { Nav } from './gradient/Nav';
import { Hero } from './gradient/Hero';
import { About } from './gradient/About';
import { Skills } from './gradient/Skills';
import { Experience } from './gradient/Experience';
import { Projects } from './gradient/Projects';
import { Certifications } from './gradient/Certifications';
import { Contact } from './gradient/Contact';
import { Footer } from './gradient/Footer';
import { Preloader } from './gradient/Preloader';

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      } else {
        return;
      }
      
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseOver = (e: MouseEvent | TouchEvent) => {
      // Only apply hover effects on devices that support true hover (desktop)
      if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
        return;
      }
      
      try {
        const target = e.target as HTMLElement;
        if (target && target.closest && target.closest('a, button, .glass-panel, .group, .cursor-pointer')) {
          document.documentElement.classList.add('glow-away');
        } else {
          document.documentElement.classList.remove('glow-away');
        }
      } catch (err) {
        // Silently ignore
      }
    };
    
    // Clear the glow on touch end just in case
    const handleTouchEnd = () => {
      document.documentElement.classList.remove('glow-away');
    };
    
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchstart', handleMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchstart', handleMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col transition-colors duration-500">
      <Preloader loading={loading} onComplete={() => setLoading(false)} />

      <div className={loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000"}>
        <MouseTrail />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
