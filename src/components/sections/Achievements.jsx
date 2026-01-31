import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements.js';
import { Trophy, Code, Award, Book, Users, Star, Target, Zap, ExternalLink, Image as ImageIcon } from 'lucide-react';

const iconMap = {
  trophy: Trophy,
  code: Code,
  award: Award,
  book: Book,
  users: Users,
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-dark-bg">
       {/* Background Grid & Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16" style={{ marginBottom: '10px' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4">
              <span className="text-white">My</span> <span className="gradient-text">Achievement</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-dark-muted max-w-2xl mx-auto font-mono flex items-center flex-wrap justify-center gap-2 px-4"
               style={{ paddingBottom: '10px', marginLeft: '-110px' }}>
              <Target className="w-4 h-4 text-cyber-cyan" />
              <span>Mission history and trophy collection</span>
              <Target className="w-4 h-4 text-cyber-cyan" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon] || Trophy;
              const isOngoing = achievement.date === "Ongoing";
              const statusColor = isOngoing ? "text-yellow-400 border-yellow-400/50" : "text-green-400 border-green-400/50";
              const statusText = isOngoing ? "ACTIVE QUEST" : "MISSION COMPLETE";
              
              return (
                <motion.div
                  key={achievement.id}
                  className="group relative h-full bg-dark-bg/40 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ translateY: -5, boxShadow: "0 0 20px rgba(6,182,212,0.15)" }}
                >
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Card Content */}
                  <div 
                    className="flex flex-col h-full relative z-10 p-4 sm:p-5 md:p-6"
                    style={{ padding: '8px' }}
                  >
                    
                    {/* Header: Icon & Status */}
                    <div className="flex justify-between items-start mb-6" >
                      <div className={`p-3 rounded-lg bg-dark-bg  ${achievement.color.replace('bg-gradient-to-br', 'text')} shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300 relative`} >
                        <div className={`absolute inset-0 blur opacity-20 ${achievement.color.replace('text', 'bg')}`} />
                        <Icon className="w-6 h-6 relative z-10" />
                      </div>
                      <span className={`px-2 sm:px-3 py-1 rounded text-[10px] font-mono font-bold border bg-dark-bg/80 backdrop-blur-md tracking-wider flex items-center gap-1.5 ${statusColor} shadow-sm`} style={{ padding: '2px 4px' }}>
                         <span className={`w-1.5 h-1.5 rounded-full ${isOngoing ? 'animate-pulse bg-yellow-400' : 'bg-green-400'}`}/>
                         {statusText}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="mb-4" >
                       <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyber-cyan/80 tracking-widest uppercase">
                         {achievement.category}
                       </div>
                       <h3 className="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors leading-tight">
                         {achievement.title}
                       </h3>
                    </div>

                    {/* Description */}
                    <p className="text-dark-muted text-sm mb-4 flex-grow leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Proof / Image */}
                    {achievement.image && (
                      <a 
                        href={achievement.link || '#'}
                        target={achievement.link ? "_blank" : "_self"}
                        rel={achievement.link ? "noopener noreferrer" : ""}
                        className={`mb-4 rounded-lg overflow-hidden h-32 w-full border border-white/10 group-hover:border-cyber-cyan/30 transition-colors relative group/image block ${achievement.link ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <img 
                          src={achievement.image} 
                          alt={achievement.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay Action Button */}
                        {achievement.link && (
                          <div 
                            className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-black/60 hover:bg-cyber-cyan/90 backdrop-blur-md border border-white/20 hover:border-cyber-cyan rounded-md text-[10px] font-bold text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            VIEW
                          </div>
                        )}
                      </a>
                    )}

                    {/* XP / Loot List */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-white/5 relative" style={{ padding: '10px 2px' }}>
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />

                      <ul className="space-y-2">
                        {achievement.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-gray-400 group-hover:text-gray-200 transition-colors"
                          >
                            <Zap className="w-3 h-3 text-primary-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
