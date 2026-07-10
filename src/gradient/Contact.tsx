import React, { useState } from 'react';
import { Send, Mail, Phone, Github, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappNumber = "919538520031"; // Standard wa.me format without the +
    const text = `Hello Hemanth,\n\nMy name is ${form.name}.\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the form
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-medium text-[var(--text-main)] mb-6 tracking-tight">Let's build something extraordinary.</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-12 max-w-md">
              Whether you have an idea for a project, need a technical consultation, or just want to chat about embedded systems and web tech—I'd love to hear from you.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
              {/* Box 1: Email (Wide) */}
              <motion.a 
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href="mailto:hemanth2678nanu@gmail.com" 
                className="col-span-2 sm:col-span-3 glass-panel !p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-[#EA4335]/5 hover:border-[#EA4335]/30 transition-all cursor-pointer"
              >
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--btn-bg)] flex items-center justify-center text-[#EA4335]">
                       <Mail size={24} />
                    </div>
                    <div>
                       <div className="text-[12px] text-[var(--text-muted)] font-mono uppercase tracking-widest mb-1">Email Me</div>
                       <div className="text-sm sm:text-lg font-medium text-[var(--text-main)]">hemanth2678nanu@gmail.com</div>
                    </div>
                 </div>
                 <ArrowUpRight className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity text-[#EA4335]" size={24} />
              </motion.a>

              {/* Box 2: LinkedIn (Square) */}
              <motion.a 
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="https://www.linkedin.com/in/hemanth-kumar-98744b313" 
                target="_blank" rel="noreferrer"
                className="col-span-1 glass-panel !p-5 flex flex-col items-center justify-center text-center group hover:bg-[#0A66C2]/5 hover:border-[#0A66C2]/30 transition-all aspect-square sm:aspect-auto sm:h-40 cursor-pointer"
              >
                 <Linkedin size={32} className="text-[#0A66C2] mb-3 group-hover:scale-110 transition-transform" />
                 <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">LinkedIn</div>
                 <div className="text-[11px] text-[var(--text-muted)] truncate w-full">hemanth-kumar</div>
              </motion.a>

              {/* Box 3: GitHub (Square) */}
              <motion.a 
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="https://github.com/hemanthnanu-tech" 
                target="_blank" rel="noreferrer"
                className="col-span-1 glass-panel !p-5 flex flex-col items-center justify-center text-center group hover:bg-[var(--text-main)]/5 hover:border-[var(--text-main)]/20 transition-all aspect-square sm:aspect-auto sm:h-40 cursor-pointer"
              >
                 <Github size={32} className="text-[var(--text-main)] mb-3 group-hover:scale-110 transition-transform" />
                 <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">GitHub</div>
                 <div className="text-[11px] text-[var(--text-muted)] truncate w-full">hemanthnanu-tech</div>
              </motion.a>

              {/* Box 4: WhatsApp (Square/Wide on mobile) */}
              <motion.a 
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href="tel:+919538520031" 
                className="col-span-2 sm:col-span-1 glass-panel !p-5 flex flex-col items-center justify-center text-center group hover:bg-[#25D366]/5 hover:border-[#25D366]/30 transition-all sm:h-40 cursor-pointer"
              >
                 <Phone size={32} className="text-[#25D366] mb-3 group-hover:scale-110 transition-transform" />
                 <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">WhatsApp</div>
                 <div className="text-[11px] text-[var(--text-muted)] truncate w-full">+91 9538520031</div>
              </motion.a>

              {/* Box 5: Location (Wide) */}
              <motion.div 
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-2 sm:col-span-3 glass-panel !p-4 flex items-center justify-center gap-3 text-center group hover:bg-[#4285F4]/5 hover:border-[#4285F4]/30 transition-all cursor-default"
              >
                 <MapPin size={18} className="text-[#4285F4]" />
                 <span className="text-[13px] font-medium text-[var(--text-main)] tracking-wide">Bangalore, Karnataka, India</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel lg:mt-20 h-fit"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="input-glass"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="input-glass"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                />
              </div>
              <textarea 
                rows={6}
                placeholder="Tell me about your project or inquiry..." 
                required 
                className="input-glass resize-none"
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              />
              <button type="submit" className="btn-hero w-full py-4 mt-2 text-[15px]">
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
