import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative pb-12 px-4 md:px-8 z-10">
      <div className="max-w-5xl mx-auto bg-[var(--panel-bg)] border border-[var(--panel-border)] shadow-[var(--glass-shadow)] backdrop-blur-[40px] p-6 md:py-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2rem] md:rounded-full relative overflow-hidden">
        
        <div className="text-2xl font-semibold tracking-tight text-[var(--text-main)] flex items-center font-display">
          Hemanth<sup className="text-xs font-normal ml-0.5 text-[var(--accent)]">®</sup>
        </div>

        <div className="text-[13px] text-[var(--text-muted)] font-medium">
          &copy; {new Date().getFullYear()} Hemanth Kumar K. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
