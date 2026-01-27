import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks, personalInfo } from '../../data/personal.js';


const Footer = () => {
  const socials = [
    { name: 'GitHub', icon: Github, url: socialLinks.github.url },
    { name: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin.url },
    { name: 'Twitter', icon: Twitter, url: socialLinks.twitter.url },
    { name: 'LeetCode', icon: Code, url: socialLinks.leetcode.url },
  ];

  return (
    <footer className="bg-dark-card/50 border-t border-white/5">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="gradient-text">Amit</span>
                <span className="text-white">.dev</span>
              </h3>
              <p className="text-dark-muted text-sm leading-relaxed max-w-xs">
                Building innovative solutions at the intersection of AI and full-stack development.
              </p>
            </div>
            
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-dark-muted hover:text-primary-400 hover:border-primary-500/30 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-muted hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-colors duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
               {/* Email */}
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400 shrink-0">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="text-xs text-dark-muted uppercase tracking-wider block mb-1">Email</span>
                   <a href={`mailto:${personalInfo.email}`} className="text-sm text-white hover:text-primary-400 transition-colors font-medium">
                     {personalInfo.email}
                   </a>
                 </div>
               </div>

               {/* Phone */}
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400 shrink-0">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="text-xs text-dark-muted uppercase tracking-wider block mb-1">Phone</span>
                   <a href={`tel:${personalInfo.phone}`} className="text-sm text-white hover:text-primary-400 transition-colors font-medium">
                     {personalInfo.phone}
                   </a>
                 </div>
               </div>

               {/* Location */}
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400 shrink-0">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="text-xs text-dark-muted uppercase tracking-wider block mb-1">Location</span>
                   <span className="text-sm text-white font-medium">
                     {personalInfo.location}
                   </span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-dark-muted text-sm">
            © {new Date().getFullYear()} Amit Kumar. All rights reserved.
          </p>
          <p className="text-dark-muted text-sm flex items-center gap-1.5">
            Built with <span className="text-red-500">❤</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
