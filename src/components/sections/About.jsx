import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal.js';
import { Code, Rocket, Users, Zap, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievement Unlocked",
      desc: "Winner - Smart India Hackathon 2025"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Party Leader",
      desc: "Led 3-6 member squads to victory"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed Buff",
      desc: "Boosted app performance by 30%"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Tech Arsenal",
      desc: "Mastering MERN, FastAPI & AI"
    }
  ];

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

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  style={{ padding: '24px' }} // FORCE PADDING
                  className="glass border border-white/5 hover:border-cyber-cyan/50 transition-all duration-300 group relative overflow-hidden rounded-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className={`mb-4 p-3 rounded-lg inline-block transition-transform duration-300 group-hover:scale-110 ${
                      index === 0 ? 'bg-yellow-500/10 text-yellow-400' : 
                      index === 1 ? 'bg-purple-500/10 text-purple-400' :
                      index === 2 ? 'bg-pink-500/10 text-pink-400' :
                      'bg-cyber-cyan/10 text-cyber-cyan'
                    }`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold font-display text-white mb-2 text-lg group-hover:text-cyber-cyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-dark-muted group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
