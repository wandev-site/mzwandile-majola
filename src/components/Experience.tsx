import { motion } from 'motion/react';
import { EXPERIENCE } from '../data/portfolio';
import { cn } from '../lib/utils';

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
          
          <div className="relative space-y-12 before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:top-0 before:w-px before:h-full before:bg-white/10 before:hidden md:before:block">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />
                
                <div className={cn(
                  "w-full md:w-1/2",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <span className="text-primary font-mono text-sm pl-4 md:pl-0">{exp.period}</span>
                  <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-foreground/40 font-medium mb-4">{exp.company}</p>
                </div>
                
                <div className="w-full md:w-1/2 glass-card p-6">
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
