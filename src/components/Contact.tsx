import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="section-padding">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's build something extraordinary together. Feel free to reach out for collaborations or opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="glass-card p-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                    <p className="text-lg font-medium text-slate-200">tusharraut819@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-500/10 flex items-center justify-center text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Phone</p>
                    <p className="text-lg font-medium text-slate-200">+91 91584 74213</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="text-lg font-medium text-slate-200">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Social Connect</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, link: "https://github.com/tusharr135" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/tushar-raut-bb0637370/" },
                    { icon: Instagram, link: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tushar Raut"
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tushar@example.com"
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3">
                 Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
