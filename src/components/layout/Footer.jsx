import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Mail, Phone, MapPin, ArrowUp, Zap, Cpu } from 'lucide-react';
import { socialLinks, personalInfo } from '../../data/personal.js';


const Footer = () => {
  const socials = [
    { name: 'GitHub', icon: Github, url: socialLinks.github.url },
    { name: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin.url },
    { name: 'Twitter', icon: Twitter, url: socialLinks.twitter.url },
    { name: 'LeetCode', icon: Code, url: socialLinks.leetcode.url },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t-2 border-cyber-cyan/50 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0)_2px,transparent_2px)] bg-[size:30px_30px] opacity-10 pointer-events-none" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Column 1: Brand & Status */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2 font-display tracking-wider">
                <span className="text-white">AMIT</span> <span className="text-cyber-cyan">KUMAR</span>
              </h3>
              <p className="text-dark-muted font-mono text-sm leading-relaxed max-w-md border-l-2 border-cyber-cyan/30 pl-4">
                "Initializing shutdown sequence... Memory fragments archived. Re-deployment ready on demand."
              </p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xs font-mono text-green-400">SYSTEM STATUS: ONLINE</span>
               </div>
               <div className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center gap-2">
                 <Cpu className="w-3 h-3 text-cyber-cyan" />
                 <span className="text-xs font-mono text-cyber-cyan">V 2.4.0</span>
               </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-none skew-x-[-10deg] text-dark-muted hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 skew-x-[10deg]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Matrix */}
          <div>
            <h4 className="text-white font-bold font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyber-cyan" /> Navigation Matrix
            </h4>
            <ul className="space-y-3 font-mono text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-muted hover:text-cyber-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-cyber-cyan/0 group-hover:text-cyber-cyan transition-all duration-300">›_</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Transmission Channels */}
          <div>
            <h4 className="text-white font-bold font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-500" /> Transmission
            </h4>
            <div className="space-y-4 font-mono">
               {/* Email */}
               <div className="group">
                 <span className="text-[10px] text-dark-muted uppercase tracking-wider block mb-1 group-hover:text-pink-400 transition-colors">Digital Coordinates</span>
                 <a href={`mailto:${personalInfo.email}`} className="text-sm text-white hover:text-pink-400 transition-colors flex items-center gap-2">
                   <Mail className="w-4 h-4" /> {personalInfo.email}
                 </a>
               </div>

               {/* Phone */}
               <div className="group">
                  <span className="text-[10px] text-dark-muted uppercase tracking-wider block mb-1 group-hover:text-pink-400 transition-colors">Frequency</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm text-white hover:text-pink-400 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {personalInfo.phone}
                  </a>
               </div>

               {/* Location */}
               <div className="group">
                 <span className="text-[10px] text-dark-muted uppercase tracking-wider block mb-1 group-hover:text-pink-400 transition-colors">Base Station</span>
                 <span className="text-sm text-white flex items-center gap-2">
                   <MapPin className="w-4 h-4" /> {personalInfo.location}
                 </span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <div className="text-left">
             <p className="text-dark-muted text-xs font-mono">
              SYSTEM COPYRIGHT © {new Date().getFullYear()} <span className="text-white">AMIT KUMAR</span>. ALL SECTORS SECURED.
            </p>
          </div>

          {/* Respawn Button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-2 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan font-display font-bold text-sm tracking-widest hover:bg-cyber-cyan hover:text-black transition-all rounded-none skew-x-[-10deg]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="skew-x-[10deg] flex items-center gap-2">
              REBOOT_SYSTEM <ArrowUp className="w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
