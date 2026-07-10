import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative pb-12 px-4 md:px-8 z-10">
      <div className="max-w-5xl mx-auto glass-panel !p-6 md:!py-5 md:!px-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2rem] md:rounded-full hover:!translate-y-0">
        
        <div className="text-2xl font-semibold tracking-tight text-[var(--text-main)] flex items-center font-display">
          Hemanth<sup className="text-xs font-normal ml-0.5 text-[var(--accent)]">®</sup>
        </div>

        <div className="text-[13px] text-[var(--text-muted)] font-medium">
          &copy; {new Date().getFullYear()} Hemanth Kumar K. All rights reserved.
        </div>

        <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)]">
          <a href="https://www.linkedin.com/in/hemanth-kumar-98744b313" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors">LinkedIn</a>
          <a href="https://github.com/hemanthnanu-tech" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors">GitHub</a>
          <a href="mailto:hemanth2678nanu@gmail.com" className="px-4 py-2 rounded-full hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors">Email</a>
        </div>

      </div>
    </footer>
  );
};
