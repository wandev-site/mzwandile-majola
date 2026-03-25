/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CV } from './components/CV';
import { ClanMarquee } from './components/ClanMarquee';
import { TransitionLock } from './components/TransitionLock';

function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ClanMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}
