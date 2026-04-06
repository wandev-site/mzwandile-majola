import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';
import { haptics } from '../lib/haptics';



export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    haptics.success();
    window.location.href = `mailto:wandev.site@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
            <p className="text-foreground/60 mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/40 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-lg font-medium"><a href="mailto:wandev.site@gmail.com?subject=Web%20Development%20Enquiry" className="hover:text-primary transition-colors">wandev.site@gmail.com</a></p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/40 uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-lg font-medium"><a href="tel:+27748021881" className="hover:text-primary transition-colors">+27 74 802 1881</a></p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/40 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-medium">Durban, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/60">Full Name</label>
                  <input type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="John Doe" required onInvalid={() => haptics.error()} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/60">Email Address</label>
                  <input type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="john@example.com" required onInvalid={() => haptics.error()} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/60">Subject</label>
                <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" required onInvalid={() => haptics.error()}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="E-commerce Solution">E-commerce Solution</option>
                  <option value="Website Maintenance">Website Maintenance</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Project Quote">Project Quote</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/60">Message</label>
                <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Tell me about your project..." required onInvalid={() => haptics.error()}></textarea>

              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
