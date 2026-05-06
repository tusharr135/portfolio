import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Award, Code, GraduationCap, Layout, Lightbulb, Users, Video, ImageIcon, Camera, Share2, Palette } from 'lucide-react';

const aboutDetails = [
  {
    icon: GraduationCap,
    title: 'Final-year Student',
    text: 'B.Sc. Computer Science student at S.D.S.M College, Palghar.',
  },
  {
    icon: Award,
    title: 'NCC JUO',
    text: 'Junior Under Officer (JUO) demonstrating leadership and discipline.',
  },
  {
    icon: Code,
    title: 'Frontend Specialist',
    text: 'Focused on React.js, Tailwind CSS, and modern UI/UX principles.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    text: 'Quick learner with a strong passion for solving complex technical challenges.',
  },
  {
    icon: Layout,
    title: 'UI/UX Enthusiast',
    text: 'Passionate about creating clean, creative, and user-centric digital experiences.',
  },
  {
    icon: Users,
    title: 'Team Leader',
    text: 'Strong leadership and teamwork qualities developed through NCC and academic projects.',
  },
];

export const About = () => {
  return (
    <section id="about" className="bg-bg-darker/50">
      <div className="section-padding">
        <SectionHeader 
          title="About Me" 
          subtitle="A passionate developer exploring the intersection of design and technology."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutDetails.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                <detail.icon className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{detail.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {detail.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-3xl border-primary-500/10"
        >
           <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="flex-1">
               <h3 className="text-2xl font-bold mb-4">My Journey</h3>
               <p className="text-slate-300 leading-relaxed mb-4">
                 I am a final-year B.Sc. Computer Science student with a deep interest in software development and personal growth. Beyond academics, my role as an <strong>NCC Junior Under Officer</strong> has taught me the importance of discipline, leadership, and collaboration in high-pressure environments.
               </p>
               <p className="text-slate-300 leading-relaxed">
                 Currently, I am focusing on mastering <strong>MERN stack</strong> and modern frontend tools to build production-grade applications that solve real-world problems.
               </p>
             </div>
             <div className="w-48 h-48 rounded-full border-4 border-primary-500/20 p-2">
                <div className="w-full h-full rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-display text-lg font-bold text-center p-4">
                  Growth Mindset
                </div>
             </div>
           </div>
        </motion.div>

        {/* Services */}
        <div className="mt-20">
          <SectionHeader title="My Services" subtitle="What I can do for you." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Video, title: 'Video Editing', desc: 'Reels, shorts & professional video edits tailored for social media and brand storytelling.', color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'hover:border-pink-500/30' },
              { icon: ImageIcon, title: 'Poster Design', desc: 'Eye-catching marketing, event & promotional posters with strong visual identity.', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'hover:border-orange-400/30' },
              { icon: Camera, title: 'Photo Editing', desc: 'Professional retouching, color grading and background enhancements.', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'hover:border-blue-400/30' },
              { icon: Share2, title: 'Social Media Management', desc: 'Content planning, scheduling and account growth strategy across platforms.', color: 'text-green-400', bg: 'bg-green-400/10', border: 'hover:border-green-400/30' },
              { icon: Palette, title: 'UI/UX Design', desc: 'Clean, modern and user-centric interface designs built for great experiences.', color: 'text-primary-500', bg: 'bg-primary-500/10', border: 'hover:border-primary-500/30' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 group flex gap-6 items-start border border-white/10 ${service.border} transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={service.color} size={26} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-2 ${service.color}`}>{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
