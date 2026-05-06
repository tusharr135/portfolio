import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-darker pt-20 pb-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.a 
              href="#home"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold font-display tracking-tighter inline-block hover:text-primary-500 transition-colors"
            >
              TR <span className="text-primary-500">.</span>
            </motion.a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building modern digital experiences with a focus on clean code, creative design, and user-centric solutions. Final year B.Sc. CS student & NCC Leader.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, link: "https://github.com/tusharr135" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/tushar-raut-bb0637370/" },
                { icon: Instagram, link: "#" },
                { icon: Twitter, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-tight">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/30 group-hover:bg-primary-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Focus Area */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-tight">Expertise</h4>
            <ul className="space-y-4">
              {[
                'Frontend Development',
                'UI/UX Design',
                'React Applications',
                'Creative Coding',
                'NCC Leadership'
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm flex items-center gap-2 italic">
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-tight">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <Mail size={14} />
                </div>
                <span>tusharraut819@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary-400 group-hover:bg-secondary-500/20 transition-colors">
                  <Phone size={14} />
                </div>
                <span>+91 91584 74213</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                   <MapPin size={14} />
                </div>
                <span>Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium tracking-wide">
            © {currentYear} TUSHAR PRAKASH RAUT. MADE WITH <Heart size={12} className="inline text-red-500 mx-1" /> IN INDIA.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-slate-500 text-xs font-medium">
              Built with <span className="text-primary-500">React</span> & <span className="text-secondary-500 font-bold">Tailwind</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button 
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-primary-400 hover:text-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-pulse"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};
