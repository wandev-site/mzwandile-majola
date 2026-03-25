import { motion } from 'motion/react';
import { SKILLS } from '../data/portfolio';
import * as Icons from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/60">Specialized skills across the full development stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => {
            const Icon = (Icons as any)[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-foreground/60 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
