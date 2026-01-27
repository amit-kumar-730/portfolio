import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements.js';
import { Trophy, Code, Award, Book, Users } from 'lucide-react';

const iconMap = {
  trophy: Trophy,
  code: Code,
  award: Award,
  book: Book,
  users: Users,
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-center text-dark-muted mb-16 max-w-2xl mx-auto">
            Milestones that showcase dedication, technical excellence, and continuous learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon] || Trophy;
              
              return (
                <motion.div
                  key={achievement.id}
                  className="glass-hover p-8 group h-full flex flex-col relative overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 clickable bg-gradient-to-br from-white/5 to-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ translateY: -5, boxShadow: "0 10px 30px -10px rgba(139,92,246,0.3)" }}
                >
                  {/* Hover Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color.replace('text', 'from')}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Header: Icon & Date */}
                  <div className="flex justify-between items-start mb-6 relative z-10 w-full">
                    <div className={`p-4 rounded-xl bg-dark-bg/80 border border-white/10 ${achievement.color.replace('bg-gradient-to-br', 'text')} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 text-primary-300 whitespace-nowrap">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-4 relative z-10 min-h-[5rem]">
                    <span className="text-xs font-bold text-cyber-cyan uppercase tracking-widest mb-2 block">
                      {achievement.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-primary-400 transition-colors leading-tight line-clamp-2">
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Description - Fixed min-height for alignment */}
                  <p className="text-dark-muted mb-6 flex-grow leading-relaxed relative z-10 text-sm min-h-[4rem]">
                    {achievement.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3 relative z-10 mt-auto border-t border-white/5 pt-4">
                    {achievement.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs text-gray-300 group-hover:text-white transition-colors"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "300+", label: "DSA Problems" },
              { value: "1st", label: "SIH 2025" },
              { value: "Top 15%", label: "LeetCode Rank" },
              { value: "10+", label: "Projects Built" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
