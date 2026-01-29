import { motion } from 'framer-motion';
import { featuredProjects } from '../../data/projects.js';
import { useState } from 'react';
import { ExternalLink, Github, X, Trophy } from 'lucide-react';

import TiltCard from '../ui/TiltCard';

const ProjectCard = ({ project, onClick }) => {
  return (
    <TiltCard className="h-full" >
    <motion.div
      className="glass p-6 cursor-pointer group h-full flex flex-col border border-white/5 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden clickable rounded-xl" style={{ padding: '5px'}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {/* Tech Borders (Top & Bottom) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/20 group-hover:border-cyber-cyan transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/20 group-hover:border-cyber-cyan transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/20 group-hover:border-cyber-cyan transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/20 group-hover:border-cyber-cyan transition-colors" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"  />

      {/* Thumbnail Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl mb-4 overflow-hidden group-hover:bg-[#0f0f0f] transition-colors">
        {project.sihWinner && (
          <div className="absolute top-3 right-3 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 blur-md opacity-20 animate-pulse" />
              <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 px-3 py-1 text-xs font-bold font-display tracking-wider flex items-center gap-1 backdrop-blur-md">
                <Trophy className="w-3 h-3" /> SIH_WINNER
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/90">
          {project.images && project.images.length > 0 ? (
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-full object-contain opacity-100"
            />
          ) : (
            <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500 transform">
              💻
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow relative z-10"  style={{marginTop: '5px'}}>
        {/* Category Tag */}
        <div className="flex items-center justify-between mb-2" >
           <span className="text-[10px] text-primary-400 font-mono tracking-widest uppercase border border-primary-500/20 px-2 py-0.5 rounded-sm bg-primary-500/5"  style={{padding: '1px 3px'}}>
            {project.category}
          </span>
          <span className="text-[10px] text-white/30 font-mono">
             ID: {project.id.toString().padStart(3, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary-400 transition-colors tracking-wide" >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-dark-muted text-sm mb-4 line-clamp-3 flex-grow font-mono leading-relaxed opacity-90">
          {project.shortDesc}
        </p>

        {/* Tech Stack Modules */}
        <div className="flex flex-wrap gap-2 mb-4"  style={{marginBottom: '7px'}}>
          {project.tech.slice(0, 7).map((tech, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono uppercase tracking-wider group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all rounded-sm shadow-[0_0_10px_rgba(139,92,246,0.1)]"
               style={{padding: '1px 3px'}}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 7 && (
            <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/50 font-mono rounded-sm hover:text-white transition-colors"  style={{padding: '1px 3px'}}>
              +{project.tech.length - 7}_MORE
            </span>
          )}
        </div>

        {/* Access Button */}
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group/btn"  style={{padding: '5px 0px'}}>
          <span className="text-white/40 font-mono text-xs group-hover:text-white transition-colors">
            STATUS: READY
          </span>
          <div className="text-primary-400 font-bold font-mono text-xs flex items-center gap-2 group-hover/btn:tracking-widest transition-all">
            <span>{'>'} ACCESS_DATA</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
    </TiltCard>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 glass-hover rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Project Image Banner */}
        {project.images && project.images.length > 0 && (
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 relative group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
             <img 
               src={project.images[0]} 
               alt={project.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>
        )}

        {/* Title & Category */}
        <div className="mb-6">
          <span className="text-sm text-primary-400 font-semibold uppercase tracking-wider">
            {project.category} • {project.year}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-2">
            {project.title}
          </h2>
          {project.sihWinner && (
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full mt-2">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Smart India Hackathon 2025 Winner</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-dark-muted leading-relaxed mb-6">
          {project.fullDesc}
        </p>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass p-6">
            <h4 className="text-lg font-bold text-white mb-3">❓ Problem</h4>
            <p className="text-dark-muted text-sm">{project.problem}</p>
          </div>
          <div className="glass p-6">
            <h4 className="text-lg font-bold text-white mb-3">💡 Solution</h4>
            <p className="text-dark-muted text-sm">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4">🛠️ Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-2 glass-hover text-sm font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4">📊 Impact & Results</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {project.impact.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 glass p-3 rounded-lg"
              >
                <span className="text-xl">{item.split(' ')[0]}</span>
                <span className="text-dark-muted text-sm">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-8">
            <h4 className="text-lg font-bold text-white mb-4">✨ Key Features</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-dark-muted text-sm"
                >
                  <span className="text-primary-400 mt-1">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="section-padding bg-dark-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-center text-dark-muted mb-16 max-w-2xl mx-auto">
              Showcasing innovative solutions that blend cutting-edge technology with real-world impact
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
