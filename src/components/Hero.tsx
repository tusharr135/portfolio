import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const titles = ["Frontend Developer", "UI Designer", "Creative Web Developer", "Problem Solver"];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated backgrounds */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-medium text-primary-400 border border-primary-500/20"
          >
            Available for Internships & Projects
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Tushar Prakash Raut</span>
          </h1>

          <div className="h-12 mb-8">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-slate-300 font-medium"
            >
              {titles[titleIndex]}
            </motion.p>
          </div>

          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Final-year B.Sc. Computer Science student passionate about building modern websites, UI design, and creative digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="btn-primary flex items-center gap-2 group">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/RESUMEnew.pdf" download="Tushar_Prakash_Raut_Resume.pdf" className="btn-outline flex items-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Geometric Shapes Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            
            <div className="absolute inset-4 glass rounded-full overflow-hidden border-2 border-white/20">
               <img 
                 src="/photo.png" 
                 alt="Portrait of Tushar Prakash Raut" 
                 className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
               />
            </div>
            
            {/* Labels floating */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-8 glass p-4 rounded-2xl shadow-xl backdrop-blur-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                  <span className="font-bold">8.60</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">CGPA</div>
                  <div className="text-sm font-bold">Academic Rank</div>
                </div>
              </div>
            </motion.div>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
