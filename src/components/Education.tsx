import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

export const EducationAndCertifications = () => {
  return (
    <section id="education" className="bg-bg-darker/50">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Education Section */}
          <div>
            <SectionHeader title="Education" align="left" />
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 border-l-4 border-l-primary-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">B.Sc. Computer Science</h3>
                    <p className="text-slate-300 flex items-center gap-2 mt-1">
                      S.D.S.M College, Palghar
                    </p>
                  </div>
                  <div className="glass px-3 py-1 rounded-lg text-sm font-bold text-primary-400">
                    2023 - 2026
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    <span className="font-bold text-xl">8.2</span>
                    <span className="text-slate-400 text-sm">CGPA</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-slate-300 text-sm font-medium">Final Year Student</span>
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <SectionHeader title="Achievements" align="left" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, label: "NCC JUO Leadership", color: "text-orange-500" },
                  { icon: Award, label: "Athlete", color: "text-blue-500" },
                  { icon: Star, label: "Top Rank Cricketer", color: "text-yellow-500" },
                  { icon: Award, label: "Event Coordinator", color: "text-pink-500" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <SectionHeader title="Certifications" align="left" />
            <div className="space-y-4">
              {[
                { title: "Basics of Python", issuer: "Infosys Springboard", date: "2023", color: "from-blue-500/20 to-green-500/20" },
                { title: "Artificial Intelligence", issuer: "IBM SkillBuild", date: "2023", color: "from-blue-600/20 to-purple-600/20" },
                { title: "Web Development Hackathon", issuer: "Tutedude", date: "2023", color: "from-orange-500/20 to-pink-500/20" },
                { title: "NCC 'B' Certificate", issuer: "Indian Army / NCC", date: "2022", color: "from-red-600/20 to-yellow-600/20" }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-6 flex items-center gap-6 hover:bg-gradient-to-r ${cert.color}`}
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center glass text-primary-400">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{cert.title}</h4>
                    <p className="text-slate-400 text-sm font-medium">{cert.issuer} • {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
