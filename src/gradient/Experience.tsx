import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERIENCE = [
  {
    id: 'exp1',
    company: 'Government Tool Room and Training Centre (GTTC)',
    role: 'Industrial Automation Intern',
    period: 'Feb 2026 – May 2026',
    location: 'Bangalore',
    bullets: [
      'Engineered PLC programs and ladder logic for complex industrial automation processes utilizing TIA Portal.',
      'Designed and deployed SCADA systems and HMI interfaces to streamline machine control.',
      'Architected Python-based IoT logic seamlessly integrated with PLC hardware.',
    ],
    tags: ['TIA Portal', 'PLC', 'SCADA', 'Python', 'IoT'],
  },
  {
    id: 'exp2',
    company: 'Semi-Pro Tech',
    role: 'PCB Assembly Intern',
    period: 'Mar 2024 – Jun 2024',
    location: 'Bangalore',
    bullets: [
      'Executed precise PCB fabrication, assembly, and soldering to strict industry standards.',
      'Spearheaded component-level testing and troubleshooting of electronic circuits.',
      'Conducted quality assurance inspections ensuring high reliability.',
    ],
    tags: ['PCB Design', 'Soldering', 'Circuit Testing'],
  },
];

export const Experience = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-[var(--panel-border)] ml-3 md:ml-6 space-y-12 pb-10">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-[40px] md:top-[48px] w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_10px_var(--accent)] transition-all duration-300 z-10" />
              
              <div className="glass-panel p-6 md:p-8 hover:bg-[var(--panel-hover)] transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-[var(--text-main)] font-display tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <div className="text-[15px] md:text-[16px] text-[var(--accent)] mt-1 font-medium">
                      {exp.role}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="text-[12px] font-mono text-[var(--text-main)] bg-[var(--btn-bg)] border border-[var(--panel-border)] px-3 py-1 rounded-full w-fit whitespace-nowrap">
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 text-[13px] text-[var(--text-muted)] md:justify-end">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.bullets.map((b, i) => (
                    <div key={i} className="text-[15px] text-[var(--text-muted)] leading-relaxed flex items-start gap-3">
                      <span className="text-[var(--accent)] opacity-50 mt-1.5 text-[10px]">■</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--panel-border)]">
                  {exp.tags.map(t => (
                    <span key={t} className="px-3 py-1 text-[12px] font-mono tracking-wider text-[var(--text-main)] bg-[var(--btn-bg)] border border-[var(--panel-border)] rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
