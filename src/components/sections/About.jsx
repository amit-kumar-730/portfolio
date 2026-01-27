import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal.js';
import { Code, Rocket, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      desc: "Expert in MERN stack with FastAPI integration"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI & RAG Specialist",
      desc: "Building intelligent systems with LangChain & Vector DBs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      desc: "Led 3-6 member teams to successful project delivery"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      desc: "Improved app performance by up to 30%"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-dark-muted mb-16 max-w-2xl mx-auto">
            Building innovative solutions at the intersection of AI and web development
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-dark-muted leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-dark-muted leading-relaxed mb-6">
                I specialize in developing end-to-end applications with a focus on AI integration,
                performance optimization, and delivering maintainable, scalable code. My expertise
                spans from building RESTful APIs and implementing RAG pipelines to leading development
                teams and mentoring junior developers.
              </p>
              <p className="text-dark-muted leading-relaxed">
                Currently pursuing Bachelor of Computer Applications at Kaashi Institute of Technology,
                I've already made my mark by winning Smart India Hackathon 2025 and solving 300+ DSA problems.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 border border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, boxShadow: "0 0 20px rgba(6,182,212,0.1)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="text-cyber-cyan mb-4 p-3 bg-cyber-cyan/10 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
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
