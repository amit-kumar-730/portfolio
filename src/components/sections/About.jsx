import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../../data/personal.js';
import { Code, Rocket, Users, Zap, Trophy, Github, Linkedin, Twitter, Code2, FileCode, ExternalLink } from 'lucide-react';
import CyberTree from '../3d/CyberTree';

/* SocialLeaf removed - replaced by 3D CyberTree */

const About = () => {
  /* Highlights Removed - Replaced with Social Tree */

  return (
    <section id="about" className="section-padding bg-dark-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Character <span className="gradient-text">Profile</span>
          </h2>
          <p className="text-center text-dark-muted mb-16 max-w-2xl mx-auto">
            Analyzing player stats and ability trees
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              style={{ padding: '24px' }} // FORCE PADDING
              className="relative rounded-3xl bg-white/5 border border-white/10 hover:border-cyber-cyan/30 transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent h-[20%] w-full animate-scan pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-cyber-green tracking-wider uppercase">System Online</span>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                Full Stack Developer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-primary-500">
                  & AI Architect
                </span>
              </h3>

              <div className="space-y-4 text-dark-muted leading-relaxed mb-8">
                <p>
                  I don't just write code; I craft digital experiences. My mission is to bridge the gap between 
                  robust <strong>Full Stack Engineering</strong> and cutting-edge <strong>Artificial Intelligence</strong>.
                </p>
                <p>
                  From orchestrating complex RAG pipelines to optimizing database queries for maximum FPS (frames per second? no, speed!), 
                  I treat every project like a high-stakes raid—strategy, execution, and loot (results) matter most.
                </p>
              </div>

              {/* Guild / Education Info */}
              <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Current Quest</h4>
                  <p className="text-dark-muted text-sm">
                    Refining skills at <span className="text-white font-medium">Kaashi Institute of Technology</span>
                    <br />
                    <span className="text-xs opacity-70">Bachelor of Computer Applications (BCA)</span>
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Real Cyber Tree Visualization */}
            <motion.div
              className="relative flex items-center justify-center h-[600px] w-[120%] -mr-[20%] -my-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <CyberTree socialLinks={socialLinks} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
