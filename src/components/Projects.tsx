import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "NCC Unit Portal",
    description: "Responsive management portal for NCC units with enrollment, attendance, and Excel automated export system.",
    image: "/nccportal.png",
    tech: ["React.js", "TypeScript", "EmailJS", "ExcelJS"],
    github: "https://github.com/tusharr135",
    featured: true
  },
  {
    title: "SWANAURA E-Commerce",
    description: "Modern clothing brand website with a stylish product showcase and ultra-responsive layout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
    tech: ["HTML5", "CSS3", "JavaScript", "Animation"],
    github: "https://github.com/tusharr135"
  },
  {
    title: "Bike Price Prediction",
    description: "Machine learning project predicting bike prices using Python, Pandas, Scikit-learn and dataset analysis.",
    image: "/bike.webp",
    tech: ["Python", "ML", "Pandas", "Matplotlib"],
    github: "https://github.com/tusharr135"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-bg-darker/50">
      <div className="section-padding">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my technical explorations and commercial work."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col group overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
                {project.featured && (
                   <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-400 border-primary-500/30">
                     Featured
                   </span>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary-500 hover:bg-primary-600 rounded-xl text-sm font-medium text-white transition-colors"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-16 text-center"
        >
          <a href="https://github.com/tusharr135" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white group">
            View all projects on GitHub <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
