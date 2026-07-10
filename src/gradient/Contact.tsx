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

            <div className="flex flex-col gap-1">
              {[
                { 
                  icon: <Mail size={20} />, 
                  text: 'hemanth2678nanu@gmail.com', 
                  href: 'mailto:hemanth2678nanu@gmail.com',
                  hoverColor: 'group-hover:text-[#EA4335]'
                },
                { 
                  icon: <Phone size={20} />, 
                  text: '+91 9538520031', 
                  href: 'tel:+919538520031',
                  hoverColor: 'group-hover:text-[#25D366]'
                },
                { 
                  icon: <Linkedin size={20} />, 
                  text: 'hemanth-kumar-98744b313', 
                  href: 'https://www.linkedin.com/in/hemanth-kumar-98744b313',
                  hoverColor: 'group-hover:text-[#0A66C2]'
                },
                { 
                  icon: <Github size={20} />, 
                  text: 'github.com/hemanthnanu-tech', 
                  href: 'https://github.com/hemanthnanu-tech',
                  hoverColor: 'group-hover:text-[var(--text-main)]'
                },
                { 
                  icon: <MapPin size={20} />, 
                  text: 'Bangalore, Karnataka, India',
                  hoverColor: 'group-hover:text-[#4285F4]'
                },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                >
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target={item.href.startsWith('http') ? '_blank' : undefined} 
                      rel="noreferrer" 
                      className="group flex items-center gap-4 p-3 -ml-3 rounded-xl transition-all duration-300 hover:bg-[var(--panel-hover)] w-fit"
                    >
                      <div className={`text-[var(--text-muted)] transition-colors duration-300 ${item.hoverColor}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-[15px] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <div 
                      className="group flex items-center gap-4 p-3 -ml-3 rounded-xl transition-all duration-300 hover:bg-[var(--panel-hover)] w-fit cursor-default"
                    >
                      <div className={`text-[var(--text-muted)] transition-colors duration-300 ${item.hoverColor}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-[15px] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
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
