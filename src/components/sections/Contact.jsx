import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, Phone, Terminal, Wifi, Shield, Activity } from 'lucide-react';
import { personalInfo } from '../../data/personal.js';
import TiltCard from '../ui/TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS configuration
    emailjs
      .send(
        'service_vxle8hd', // EmailJS service ID
        'template_o8b20yb', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email,
        },
        'tP-_Xbj4XOCp3wCLj' // EmailJS public key
      )
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          setTimeout(() => setStatus(''), 3000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <section id="contact" className="section-padding py-20 bg-dark-bg relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Matrix Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
      <div className="container-custom relative z-10 w-full flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="w-full flex flex-col items-center"
        >
          <div className="text-center mb-12 md:mb-16 px-4" style={{ padding: '15px' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4">
              <span className="text-white">Initialize</span> <span className="gradient-text">Communication</span>
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-cyber-cyan tracking-widest opacity-80">
              <span className="flex items-center gap-1"><Wifi className="w-3 h-3 animate-pulse" /> SIGNAL: STRONG</span>
              <span>|</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> ENCRYPTION: SECURE</span>
            </div>
          </div>

          <div className="max-w-3xl w-full mx-auto relative z-20">
            {/* Terminal Window */}
            <TiltCard className="h-full w-full">
            <motion.div
              className="rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl bg-[#0a0a0a] p-2 sm:p-4 md:p-6"
              style={{ padding: '8px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Terminal Title Bar */}
              <div className="bg-[#121212] border-b border-white/10 px-6 py-4 flex items-center justify-between"
               style={{padding:"5px", marginBottom: '15px'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-white/40 tracking-widest uppercase hidden sm:block">Secured Uplink v2.0</div>
                <Activity className="w-4 h-4 text-cyber-cyan opacity-50 hidden sm:block" />
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
                 
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {/* Name */}
                    <div className="group relative">
                      <label htmlFor="name" className="block text-xs font-bold font-mono text-cyber-cyan mb-2 sm:mb-3 ml-0.5 sm:ml-1 tracking-widest uppercase" style={{ margin: '0px 0px 3px 5px' }}>Identity</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm sm:text-base font-mono focus:outline-none focus:border-cyber-cyan focus:bg-cyber-cyan/5 transition-all placeholder-white/20"
                        style={{ padding: '3px 5px 3px 10px' }}
                        placeholder="ENTER NAME"
                      />
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyber-cyan group-hover:w-full transition-all duration-500" />
                    </div>

                    {/* Mobile No */}
                    <div className="group relative">
                      <label htmlFor="phone" className="block text-xs font-bold font-mono text-cyber-cyan mb-2 sm:mb-3 ml-0.5 sm:ml-1 tracking-widest uppercase" style={{ margin: '0px 0px 3px 5px' }}>Frequency</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm sm:text-base font-mono focus:outline-none focus:border-cyber-cyan focus:bg-cyber-cyan/5 transition-all placeholder-white/20"
                        style={{ padding: '3px 5px 3px 10px' }}
                        placeholder="+91..."
                      />
                       <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyber-cyan group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {/* Email */}
                    <div className="group relative">
                      <label htmlFor="email" className="block text-xs font-bold font-mono text-cyber-cyan mb-2 sm:mb-3 ml-0.5 sm:ml-1 tracking-widest uppercase mt-3 sm:mt-4" style={{ margin: '12px 0px 3px 5px' }}>Digital Coordinates</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                         className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm sm:text-base font-mono focus:outline-none focus:border-cyber-cyan focus:bg-cyber-cyan/5 transition-all placeholder-white/20"
                         style={{ padding: '3px 5px 3px 10px' }}
                        placeholder="USER@EXAMPLE.COM"
                      />
                       <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyber-cyan group-hover:w-full transition-all duration-500" />
                    </div>
                    
                    {/* Subject */}
                    <div className="group relative">
                      <label htmlFor="subject" className="block text-xs font-bold font-mono text-cyber-cyan mb-2 sm:mb-3 ml-0.5 sm:ml-1 tracking-widest uppercase mt-3 sm:mt-4" style={{ margin: '12px 0px 3px 5px' }}>Subject Protocol</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                         className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm sm:text-base font-mono focus:outline-none focus:border-cyber-cyan focus:bg-cyber-cyan/5 transition-all placeholder-white/20"
                         style={{ padding: '3px 5px 3px 10px' }}
                        placeholder="PROJECT INQUIRY"
                      />
                       <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyber-cyan group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <label htmlFor="message" className="block text-xs font-bold font-mono text-cyber-cyan mb-2 sm:mb-3 ml-0.5 sm:ml-1 tracking-widest uppercase mt-3 sm:mt-4" style={{ margin: '12px 0px 3px 5px' }}>Transmission Data</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                       className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 bg-white/5 border border-white/10 rounded-lg text-white text-sm sm:text-base font-mono focus:outline-none focus:border-cyber-cyan focus:bg-cyber-cyan/5 transition-all placeholder-white/20 resize-none leading-relaxed"
                       style={{ padding: '3px 5px 3px 10px' }}
                      placeholder="INITIATE MESSAGE STREAM..."
                    />
                     <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyber-cyan group-hover:w-full transition-all duration-500" />
                  </div>

                  <div className="flex justify-center pt-4 sm:pt-6 md:pt-8">
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-primary w-full md:w-auto md:px-12 lg:px-16 py-4 sm:py-4.5 md:py-5 flex items-center justify-center gap-2 sm:gap-3 group rounded-none skew-x-[-10deg] border border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all shadow-[0_0_30px_rgba(139,92,246,0.2)] text-sm sm:text-base"
                        style={{ margin: '10px 0px' }}
                    >
                        <span className="skew-x-[10deg] flex items-center gap-2 sm:gap-3 font-bold font-display tracking-wider sm:tracking-[0.15em] md:tracking-[0.2em] uppercase text-base sm:text-lg">
                            <Terminal className="w-5 h-5" />
                            {status === 'sending' ? 'TRANSMITTING...' : 'EXECUTE TRANSMISSION'}
                            <Send className={`w-4 h-4 ${status === 'sending' ? 'animate-ping' : 'group-hover:translate-x-1 transition-transform'}`} />
                        </span>
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm text-center font-mono flex items-center justify-center gap-2 rounded-lg">
                       <Wifi className="w-4 h-4" /> TRANSMISSION SUCCESSFUL
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm text-center font-mono flex items-center justify-center gap-2 rounded-lg">
                      <Shield className="w-4 h-4" /> TRANSMISSION FAILED
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
