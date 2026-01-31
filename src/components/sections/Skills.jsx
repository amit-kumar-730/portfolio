import { motion } from 'framer-motion';
import { skills } from '../../data/skills.js';
import { FaLaptopCode, FaServer, FaDatabase, FaBrain, FaTools, FaCode, FaReact, FaDocker, FaAws, FaBolt, FaRobot, FaVideo, FaLayerGroup, FaPaperPlane, FaTerminal, FaGoogle, FaGithub, FaGitAlt } from 'react-icons/fa';
import TiltCard from '../ui/TiltCard';

// Map Categories to Icons
const categoryIconMap = {
  layout: FaLaptopCode,
  server: FaServer,
  database: FaDatabase,
  brain: FaBrain,
  wrench: FaTools,
  code: FaCode
};

// Map Categories to Gaming Colors
const categoryColorMap = {
  frontend: "text-cyan-400",
  backend: "text-green-400",
  aiAutomation: "text-purple-400",
  databases: "text-yellow-400",
  programming: "text-pink-400",
  tools: "text-orange-400"
};

const categoryGradientMap = {
  frontend: "from-cyan-400 to-blue-500",
  backend: "from-green-400 to-emerald-600",
  aiAutomation: "from-purple-400 to-indigo-600",
  databases: "from-yellow-400 to-orange-500",
  programming: "from-pink-400 to-rose-500",
  tools: "from-orange-400 to-red-500"
};

// Tech Stack Configuration
const techLoadout = [
  { name: "MERN Stack", icon: FaReact, color: "cyan-400" }, 
  { name: "Next.js", icon: FaCode, color: "slate-200" },
  { name: "FastAPI", icon: FaBolt, color: "teal-400" },
  { name: "PostgreSQL", icon: FaDatabase, color: "blue-400" },
  { name: "Redis", icon: FaLayerGroup, color: "red-500" },
  { name: "Docker", icon: FaDocker, color: "blue-500" },
  { name: "AWS", icon: FaAws, color: "orange-500" },
  { name: "LangChain", icon: FaBrain, color: "emerald-400" },
  { name: "OpenAI API", icon: FaRobot, color: "green-400" },
  { name: "Hugging Face", icon: FaBrain, color: "yellow-400" },
  { name: "Vector DBs", icon: FaDatabase, color: "purple-400" },
  { name: "WebRTC", icon: FaVideo, color: "pink-500" },
  { name: "VS Code", icon: FaTerminal, color: "blue-400" },
  { name: "Postman", icon: FaPaperPlane, color: "orange-600" },
  { name: "Git", icon: FaGitAlt, color: "red-600" },
  { name: "GitHub", icon: FaGithub, color: "slate-300" },
  { name: "Google Gemini", icon: FaGoogle, color: "sky-400" },
  { name: "ChatGPT", icon: FaRobot, color: "teal-500" }
];

const SkillChip = ({ name, level, delay, gradientColor }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex justify-between items-end mb-1">
        <span className="text-white font-medium font-display text-sm group-hover:text-primary-400 transition-colors tracking-wide">
          {name}
        </span>
        <span className="text-xs text-dark-muted font-mono group-hover:text-white transition-colors">
          Lvl {level}
        </span>
      </div>
      
      {/* XP Bar */}
      <div className="h-2 w-full bg-dark-bg border border-white/10 rounded-full overflow-hidden p-[1px]">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradientColor} shadow-sm relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "circOut" }}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-white/40 skew-x-12 w-full -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-dark-bg">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-20 pointer-events-none">
        <FaBrain className="w-96 h-96 text-primary-500 blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 md:mb-6" style={{ paddingBottom: '10px' }}>
              <span className="text-white">My</span> <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-dark-muted max-w-2xl mx-auto font-mono px-4" style={{ paddingBottom: '5px', marginLeft: '-55px' }}>
              Current attribute distribution and skill tree mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(skills).map(([key, category], categoryIndex) => {
              const Icon = categoryIconMap[category.icon] || FaCode;
              const colorClass = categoryColorMap[key] || "text-primary-400";
              const gradientClass = categoryGradientMap[key] || "from-primary-400 to-blue-600";
              

              return (
                <TiltCard
                  key={key}
                  className="h-full"
                >
                  <motion.div
                    className="glass rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] p-4 sm:p-5 md:p-6"
                    style={{ padding: '5px' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  >
                    {/* Category Header */}
                    {/* Redesigned Category Header - Cyber Panel Style */}
                    <div className="relative z-10 mb-8 pb-4 border-b border-white/10 flex items-center justify-between group-hover:border-primary-500/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-dark-bg/50 border border-white/10 ${colorClass} group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold font-display text-white tracking-wider uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-400 transition-all">
                            {category.title}
                          </h3>
                          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientClass} mt-1 opacity-60 group-hover:w-full transition-all duration-500`} />
                        </div>
                      </div>
                      
                      {/* Decorative Tech Bit */}
                      <div className="hidden md:flex flex-col gap-1 items-end opacity-30 group-hover:opacity-80 transition-opacity">
                         <span className="w-1 h-1 bg-white rounded-full" />
                         <span className="w-1 h-3 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* XP List */}
                    <div className="space-y-6 flex-grow relative z-10">
                      {category.items.map((skill, skillIndex) => (
                        <SkillChip
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          gradientColor={gradientClass}
                          delay={categoryIndex * 0.1 + skillIndex * 0.05}
                        />
                      ))}
                    </div>
                  </motion.div>
                </TiltCard>
              );

            })}
          </div>

          {/* Loadout (Tech Stack) */}
          <motion.div
            className="mt-20 py-12 flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Highlighted Banner */}
            <div className="mb-8 md:mb-10 relative group inline-block" style={{ padding: '10px' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-10 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-dark-bg/90 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center gap-2 sm:gap-3 backdrop-blur-md" style={{ padding: '5px' }}>
                <FaTools className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                <span className="text-sm sm:text-base md:text-lg font-bold font-display uppercase tracking-wider sm:tracking-[0.15em] md:tracking-[0.2em] text-cyan-100 text-shadow-sm">
                  Equipped Loadout
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 max-w-5xl px-4">
              {techLoadout.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`rounded-full bg-white/5 border border-white/5 shadow-lg backdrop-blur-sm text-xs sm:text-sm font-bold font-display flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 cursor-default group px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
                  style={{
                    color: `var(--color-${tech.color})`,
                    padding: '7px 7px'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${tech.color}`} />
                  <span className={`text-${tech.color} group-hover:brightness-125 transition-all hidden sm:inline`}>{tech.name}</span>
                  <span className={`text-${tech.color} group-hover:brightness-125 transition-all sm:hidden text-[10px]`}>{tech.name.split(' ')[0]}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
