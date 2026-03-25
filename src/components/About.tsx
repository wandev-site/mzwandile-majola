import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function About() {
  const [showTooltip, setShowTooltip] = useState(false);
  const inspirations = [
    "Code is poetry in motion.",
    "Every bug is a feature waiting to be discovered.",
    "Innovation happens at the intersection of technology and creativity.",
    "The best code is the one that explains itself.",
    "Dream big, code bigger."
  ];
  const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1gMXx373pBDI4FT0OuVa0THQcXoWLuc4E" 
                alt="Mzwandile Majola" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[114px] left-1/2 transform -translate-x-1/4 bg-black/80 text-white px-3 py-2 rounded-lg text-sm max-w-xs"
                  >
                    {randomInspiration}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 glass-card p-6 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold text-primary">2+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-foreground/60">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-foreground/60 leading-relaxed">
              <p>
                I am an <span className="text-foreground font-semibold">IT Support & Web Developer</span> with a Diploma in Information Technology and experience in web development, IT support, and customer operations within the insurance industry.
              </p>
              <p>
                My professional journey includes roles at <span className="text-foreground font-semibold">NetApps Development</span> and <span className="text-foreground font-semibold">CCI South Africa</span>, where I've worked with financial systems, data accuracy, and process-driven environments.
              </p>
              <p>
                I am skilled in <span className="text-foreground font-semibold">PHP, JavaScript, ReactJs, Bootstrap, and MySQL</span>. I am passionate about data integrity and building efficient applications that meet business requirements.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-foreground mb-1">Education</h4>
                <p className="text-xs">Diploma in IT & Big Data Analytics</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-foreground mb-1">Focus</h4>
                <p className="text-xs">Web Dev & IT Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
