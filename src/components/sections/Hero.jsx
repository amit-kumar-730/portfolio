import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter, Code2, ExternalLink, Gamepad2, Trophy, Zap } from 'lucide-react';
import { personalInfo, techStack, socialLinks } from '../../data/personal.js';

const TextLoop = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="h-10 md:h-12 overflow-hidden inline-flex items-center align-middle ml-2 relative top-1">
      <div className="relative h-full w-full">
        {items.map((item, index) => (
          <motion.span
            key={item}
            className="absolute left-0 text-3xl md:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyber-pink whitespace-nowrap"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: index === currentIndex ? 0 : index < currentIndex ? -50 : 50,
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} 
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-dark-bg pt-20 lg:pt-0 overflow-hidden">
      
      {/* Cyber Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagonal Grid or Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyber-pink/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT (7 Columns) with Gamified Typography */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {/* Player Ready Badge */}
            <motion.div 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyber-green/30 bg-cyber-green/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-green"></span>
                </span>
                <span className="text-sm font-bold font-mono text-cyber-green tracking-wide uppercase">Player Ready</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <h2 className="text-xl md:text-2xl font-medium font-display text-primary-400 mb-4">Hello, I'm</h2>
              <div className="glitch-wrapper mb-6">
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tight leading-[1.1] drop-shadow-lg glitch" data-text={personalInfo.name}>
                   {personalInfo.name}
                 </h1>
              </div>
            </motion.div>

            {/* Dynamic Description loop */}
            <motion.div 
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-xl md:text-3xl text-dark-muted mb-10 h-16 md:h-20 flex flex-wrap justify-center lg:justify-start gap-2 items-center"
            >
              <span className="font-light font-display">Engineering</span>
              <TextLoop items={techStack} />
            </motion.div>

            {/* Gamified Stats Row (Achievements) */}
            <motion.div 
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mb-12 w-full"
            >
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-3xl md:text-4xl font-bold font-display text-white group-hover:text-yellow-400 transition-colors">300+</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-dark-muted group-hover:text-white transition-colors">Problems Solved</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-2">
                   <Gamepad2 className="w-5 h-5 text-cyber-cyan" />
                   <span className="text-3xl md:text-4xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">Lvl 10+</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-dark-muted group-hover:text-white transition-colors">Projects Deployed</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyber-pink" />
                  <span className="text-3xl md:text-4xl font-bold font-display text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Winner</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-dark-muted group-hover:text-white transition-colors">SIH 2025</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-primary-600 rounded-xl font-bold font-display text-white overflow-hidden transition-transform active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 z-10">
                  Mission: View Work <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <a 
                href={personalInfo.resumeUrl}
                download
                className="group px-8 py-4 glass rounded-xl font-bold font-display text-white hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/10 hover:border-cyber-cyan/50"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-cyber-cyan" />
                Download Data
              </a>
            </motion.div>

            {/* Social Links */}
             <motion.div 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, url: socialLinks.github.url },
                { icon: Linkedin, url: socialLinks.linkedin.url },
                { icon: Twitter, url: socialLinks.twitter.url },
                { icon: Code2, url: socialLinks.leetcode.url }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-muted hover:text-primary-400 transition-colors hover:scale-110 transform duration-200 hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (5 Columns) */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Image Container with organic shape */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              
              {/* Back Glow - Cyber Purple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-cyber-pink rounded-full blur-[60px] opacity-30 animate-pulse" />
              
              {/* Main Image Mask - Hexagon or Card */}
              <div className="relative w-full h-full rounded-[30px] rotate-3 border border-white/10 glass p-2 overflow-hidden shadow-2xl backdrop-blur-sm bg-black/20">
                 <div className="w-full h-full rounded-[24px] overflow-hidden bg-dark-card relative group">
                    <img 
                      src={personalInfo.profileImage}
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Glass Overlay Gradient at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                 </div>
              </div>

               {/* Decorative Elements - Floating Badges */}
               <motion.div 
                 className="absolute -top-6 -right-6 w-24 h-24 bg-dark-card border border-primary-500/30 rounded-2xl glass flex items-center justify-center p-4 shadow-xl rotate-[15deg] z-20 group"
                 whileHover={{ scale: 1.1, rotate: 0 }}
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <Code2 className="w-10 h-10 text-primary-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
               </motion.div>

               <motion.div 
                 className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl border border-cyber-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] z-20"
                 whileHover={{ scale: 1.05 }}
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <div className="text-xs text-cyber-cyan font-bold uppercase tracking-wider mb-1 font-mono">Current Quest</div>
                 <div className="text-white font-bold font-display flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_8px_cyan]" />
                    AI Agents & RAG
                 </div>
               </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
