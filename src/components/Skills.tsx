import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
      { name: 'JavaScript (ES6+)', level: 40 },
      { name: 'React.js', level: 5 },
    ]
  },
  {
    title: 'Programming & Logic',
    skills: [
      { name: 'Python', level: 60 },
      { name: 'Data Structures', level: 0 },
      { name: 'Problem Solving', level: 85 },
    ]
  },
  {
    title: 'Tools & Creative',
    skills: [
      { name: 'GitHub / Git', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Canva', level: 90 },
      { name: 'Video Editing', level: 90 },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 95 },
      { name: 'Creativity', level: 85 },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden">
      <div className="section-padding">
        <SectionHeader 
          title="My Toolbox" 
          subtitle="A blend of technical prowess and creative thinking."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons cloud can be added here if needed */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 opacity-30 grayscale pointer-events-none">
          {['React', 'Python', 'Tailwind', 'JS', 'HTML', 'CSS', 'GitHub', 'Figma', 'VS Code'].map((tech) => (
            <span key={tech} className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
