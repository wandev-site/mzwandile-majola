import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe, Github, Linkedin, Award, BookOpen, Briefcase, Code, User } from 'lucide-react';
import { EXPERIENCE, SKILLS, EDUCATION } from '../data/portfolio';
import { useEffect } from 'react';

export function CV() {
  const handlePrint = () => window.print();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-[#1a1a1a] py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden print:shadow-none print:rounded-none">
        {/* CV Header Controls */}
        <div className="flex items-center justify-between p-6 bg-gray-900 text-white no-print">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground/80 font-medium hover:text-white transition-colors">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all"
          >
            <Printer size={18} />
            Print CV
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-4 bg-gray-50 p-8 md:p-10 border-r border-gray-100 print:bg-white print:border-r-2 print:border-gray-200">
            <div className="mb-10 text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 print:border-2 print:shadow-none">
                <img 
                  src="https://lh3.googleusercontent.com/d/1gMXx373pBDI4FT0OuVa0THQcXoWLuc4E" 
                  alt="Mzwandile Majola" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">Mzwandile <br />Majola</h1>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">IT Support & Web Developer</p>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  <Mail size={14} className="text-primary" /> Contact Info
                </h2>
                <div className="space-y-3 text-sm font-medium">
                  <p className="flex items-center gap-3"><Mail size={14} className="text-primary/60" /> mzwandilemajola23@gmail.com</p>
                  <p className="flex items-center gap-3"><Phone size={14} className="text-primary/60" /> 074 802 1881</p>
                  <p className="flex items-center gap-3"><MapPin size={14} className="text-primary/60" /> Durban, KZN</p>
                  <p className="flex items-center gap-3"><Globe size={14} className="text-primary/60" /> wanmajola.github.io</p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  <BookOpen size={14} className="text-primary" /> Education
                </h2>
                <div className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <div key={edu.degree}>
                      <h3 className="font-bold text-sm">{edu.degree}</h3>
                      <p className="text-xs text-gray-600">{edu.school}</p>
                      <p className="text-[10px] font-bold text-primary mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  <Code size={14} className="text-primary" /> Technical Skills
                </h2>
                <div className="space-y-5">
                  {SKILLS.map(skill => (
                    <div key={skill.category}>
                      <h3 className="text-[10px] font-black uppercase text-gray-900 mb-2">{skill.category}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.items.map(item => (
                          <span key={item} className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded-md print:border-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  <Globe size={14} className="text-primary" /> Languages
                </h2>
                <div className="space-y-2 text-sm font-medium">
                  <p>English</p>
                  <p>Zulu</p>
                </div>
              </section>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-8 p-8 md:p-12 space-y-12">
            <section>
              <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-widest mb-6 pb-2 border-b-2 border-gray-900">
                <Award size={20} className="text-primary" /> About Me
              </h2>
              <p className="text-sm leading-relaxed text-gray-700 italic border-l-4 border-primary/20 pl-6">
                "IT Support & Web Developer with a Diploma in Information Technology and experience in web development, IT support, and customer operations within the insurance industry. Skilled in PHP, JavaScript, ReactJs, Bootstrap, and MySQL, with exposure to financial systems, data accuracy, and process-driven environments."
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-widest mb-8 pb-2 border-b-2 border-gray-900">
                <Briefcase size={20} className="text-primary" /> Work Experience
              </h2>
              <div className="space-y-10">
                {EXPERIENCE.map(exp => (
                  <div key={exp.company} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-primary before:rounded-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <span className="text-xs font-black text-primary bg-primary/5 px-3 py-1 rounded-full print:bg-transparent print:border print:border-primary">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-widest mb-8 pb-2 border-b-2 border-gray-900">
                <User size={20} className="text-primary" /> Reference
              </h2>
              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50 print:bg-white print:border-gray-200">
                <h3 className="font-bold text-sm mb-1">Buyiseluxolo Magwaza</h3>
                <p className="text-xs text-gray-500 mb-2">NetApps Development / CEO</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Phone: 061 540 4728 / 071 175 3994</p>
                  <p>Email: info@netappsdevelopment.com</p>
                </div>
              </div>
            </section>

            <footer className="pt-12 border-t border-gray-100 text-center md:text-left">
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                Mzwandile Majola &copy; 2026 | Professional Portfolio CV
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
