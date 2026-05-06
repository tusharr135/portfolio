import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Freelance Designer & Video Editor",
    company: "Independent Contracts",
    period: "2023 - Present",
    location: "Remote",
    description: [
      "Crafted visually compelling social media posters and marketing creatives for various clients.",
      "Edited high-engagement short-form videos and reels using professional software.",
      "Managed end-to-end client communications, from requirement gathering to final delivery.",
      "Ensured brand consistency across digital platforms for independent brands."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience">
      <div className="section-padding">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional journey and freelance contributions."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col md:flex-row gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-1 w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-8`}>
                <div className="glass-card p-8 group overflow-hidden relative">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Briefcase size={80} />
                   </div>
                   
                   <div className={`flex items-center gap-2 mb-2 text-primary-400 text-sm font-bold uppercase tracking-widest ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                     <Calendar size={14} /> {exp.period}
                   </div>
                   
                   <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                   <div className={`flex items-center gap-2 text-slate-300 font-medium mb-6 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                     {exp.company} <span className="text-slate-500">•</span> <MapPin size={14} className="text-slate-400" /> {exp.location}
                   </div>

                   <ul className={`space-y-3 text-slate-400 text-sm leading-relaxed ${i % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                     {exp.description.map((item, idx) => (
                       <li key={idx} className="relative">
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
