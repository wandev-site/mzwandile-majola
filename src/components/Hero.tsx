import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { haptics } from '../lib/haptics';



export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background image on the right side */}
      <motion.div 
        className="absolute right-0 top-0 w-full md:w-2/3 lg:w-1/2 h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-no-repeat bg-right bg-bottom hero-background"
          style={{ 
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.995) 5%, rgba(0,0,0,0.99) 10%, rgba(0,0,0,0.98) 15%, rgba(0,0,0,0.96) 20%, rgba(0,0,0,0.93) 25%, rgba(0,0,0,0.89) 30%, rgba(0,0,0,0.84) 35%, rgba(0,0,0,0.77) 40%, rgba(0,0,0,0.68) 45%, rgba(0,0,0,0.57) 50%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0.14) 70%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.03) 80%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.995) 5%, rgba(0,0,0,0.99) 10%, rgba(0,0,0,0.98) 15%, rgba(0,0,0,0.96) 20%, rgba(0,0,0,0.93) 25%, rgba(0,0,0,0.89) 30%, rgba(0,0,0,0.84) 35%, rgba(0,0,0,0.77) 40%, rgba(0,0,0,0.68) 45%, rgba(0,0,0,0.57) 50%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0.14) 70%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.03) 80%, rgba(0,0,0,0) 100%)"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 tracking-widest uppercase text-sm">Welcome to my world</h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              Mzwandile <br />
              <span className="text-primary">Majola</span>
            </h1>
            <p className="text-xl text-foreground/60 mb-10 leading-relaxed max-w-xl">
              IT Support & Web Developer. 
              Skilled in PHP, JavaScript, ReactJs, Bootstrap, and MySQL, with exposure to financial systems and data accuracy.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:gap-4"
                onClick={() => haptics.tap()}
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition-all"
                onClick={() => haptics.tap()}
              >
                <Mail size={20} />
                Get In Touch
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
