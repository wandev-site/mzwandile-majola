import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { useTransitionNavigate } from '../hooks/useTransitionNavigate';

export function Projects() {
  const { isTransitioning, navigateWithTransition } = useTransitionNavigate();

  return (
    <section id="projects" className="py-24 bg-primary/5">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-primary italic"
            >
              Loading Project...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/60 max-w-lg">A selection of my recent work in web development and data analysis.</p>
          </div>
          <a href="#" className="text-primary font-medium hover:underline flex items-center gap-2">
            View all on GitHub <Github size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(99, 102, 241, 0.3)" 
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                scale: { type: "spring", stiffness: 300, damping: 20 },
                boxShadow: { duration: 0.2 }
              }}
              className="glass-card overflow-hidden group cursor-pointer border border-white/10"
              onClick={() => {
                navigateWithTransition(project.link);
                setTimeout(() => window.location.href = project.link, 300);
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-6 py-2 bg-white text-primary font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.link} className="text-foreground/40 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="text-foreground/40 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
