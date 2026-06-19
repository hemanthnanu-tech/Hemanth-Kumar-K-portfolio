import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Cpu, Code2, Factory, Zap } from 'lucide-react';

// Using Devicons for colorful logos where available
const getLogo = (name: string) => {
  const map: Record<string, string> = {
    'C': 'c/c-original.svg',
    'C++': 'cplusplus/cplusplus-original.svg',
    'Python': 'python/python-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'TypeScript': 'typescript/typescript-original.svg',
    'React': 'react/react-original.svg',
    'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
    'HTML5': 'html5/html5-original.svg',
    'Android Studio': 'androidstudio/androidstudio-original.svg',
    'Git': 'git/git-original.svg',
    'VS Code': 'vscode/vscode-original.svg',
    'Arduino': 'arduino/arduino-original.svg'
  };
  
  if (map[name]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${map[name]}`;
  }
  return null;
};

const SKILLS = [
  { cat: 'Core Competencies', icon: <Layers size={20} />, items: ['System Architecture', 'Rapid Prototyping', 'UI/UX Conceptualization', 'Technical Ideation', 'AI-Assisted Workflows'] },
  { cat: 'Hardware & Embedded', icon: <Cpu size={20} />, items: ['PCB Design', 'Arduino', 'IoT Data Acquisition', 'Sensor Integration', 'Circuit Assembly'] },
  { cat: 'Programming', icon: <Code2 size={20} />, items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Verilog'] },
  { cat: 'Industrial Automation', icon: <Factory size={20} />, items: ['PLC Programming', 'SCADA Systems', 'HMI Interfaces', 'TIA Portal', 'Ladder Logic'] },
  { cat: 'Software & Tools', icon: <Zap size={20} />, items: ['React', 'Tailwind CSS', 'HTML5', 'Android Studio', 'Git', 'VS Code'] },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="glow-bg-section" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Technical Expertise
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {SKILLS.map((skill, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={skill.cat}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                    isActive 
                      ? 'bg-[var(--accent)] text-[var(--bg-color)] shadow-lg scale-[1.02]' 
                      : 'glass-panel hover:bg-[var(--btn-bg)] text-[var(--text-main)] hover:scale-[1.01]'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-[var(--bg-color)] text-[var(--accent)]' : 'bg-[var(--btn-bg)] text-[var(--text-muted)]'}`}>
                    {skill.icon}
                  </div>
                  <span className="font-medium text-[15px]">{skill.cat}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Skill Grid */}
          <div className="lg:w-2/3 glass-panel p-8 md:p-12 min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {SKILLS[activeTab].items.map((item, idx) => {
                    const logoUrl = getLogo(item);
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-[var(--btn-bg)] border border-[var(--panel-border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      >
                        {logoUrl ? (
                          <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <img src={logoUrl} alt={`${item} logo`} className="w-full h-full object-contain filter drop-shadow-md" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--panel-border)] text-[var(--accent)] transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Code2 size={24} />
                          </div>
                        )}
                        <span className="font-medium text-[14px] text-center text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
