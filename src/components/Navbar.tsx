import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { haptics } from '../lib/haptics';



const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location.pathname === '/cv') return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print",
      scrolled ? "glass py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
          MM<span className="text-foreground">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <Link to="/cv" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
            <FileText size={16} />
            CV
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => {
            haptics.tap();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="flex flex-col gap-4 p-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Link 
            to="/cv" 
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={18} />
            View CV
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
