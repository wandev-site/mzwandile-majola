import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 no-print">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">MM.</h3>
            <p className="text-sm text-foreground/40">© 2026 Mzwandile Majola. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>

          <div className="text-sm text-foreground/40 italic">
            Mchunu • Macingwane • Yeyesa • Phakade
          </div>
        </div>
      </div>
    </footer>
  );
}
