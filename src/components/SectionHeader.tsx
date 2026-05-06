import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        {title} <span className="text-primary-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
