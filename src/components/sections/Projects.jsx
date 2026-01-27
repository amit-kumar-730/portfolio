import { motion } from 'framer-motion';
import { featuredProjects } from '../../data/projects.js';
import { useState } from 'react';
import { ExternalLink, Github, X, Trophy } from 'lucide-react';

import TiltCard from '../ui/TiltCard';

const ProjectCard = ({ project, onClick }) => {
  return (
    <TiltCard className="h-full">
    <motion.div
      className="glass p-6 cursor-pointer group h-full flex flex-col border border-white/5 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden clickable"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Thumbnail Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl mb-4 overflow-hidden">
        {project.sihWinner && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-dark-bg px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
            <Trophy className="w-4 h-4" />
            SIH Winner
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
          💻
        </div>
      </div>

      {/* Category Tag */}
      <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>

      {/* Short Description */}
      <p className="text-dark-muted text-sm mb-4 line-clamp-3 flex-grow">
        {project.shortDesc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-white/5 text-dark-muted rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs px-2 py-1 bg-white/5 text-dark-muted rounded">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>

      {/* View Details */}
      <div className="text-primary-400 font-bold font-mono text-sm flex items-center gap-2 mt-auto group-hover:text-cyber-green transition-colors">
        <span className="relative">
          View Details
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-green transition-all group-hover:w-full" />
        </span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Tech Decoration */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-40 transition-opacity">
         <span className="w-1 h-3 bg-white/50 rounded-full" />
         <span className="w-1 h-2 bg-white/50 rounded-full" />
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
          className="absolute top-4 right-4 p-2 glass-hover rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

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
