import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

import CustomCursor from './components/ui/CustomCursor';
import CyberBackground from './components/ui/CyberBackground';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen cursor-none relative text-dark-text"> {/* Hide default cursor, removed bg-dark-bg */}
        <ScrollProgress />
        <CustomCursor />
        <CyberBackground />
        
        <Helmet>
          <title>Amit Kumar | Full Stack Developer | SIH 2025 Winner</title>
          <meta
            name="description"
            content="Portfolio of Amit Kumar - SIH 2025 Winner, Full Stack Developer specializing in MERN, FastAPI, AI/RAG, and modern web technologies."
          />
          <meta
            name="keywords"
            content="Amit Kumar, Full Stack Developer, MERN Stack, AI, GenAI, RAG, FastAPI, React, Node.js, Portfolio"
          />
          
          {/* Open Graph */}
          <meta property="og:title" content="Amit Kumar - Full Stack Developer" />
          <meta
            property="og:description"
            content="SIH 2025 Winner | Building AI-powered web applications with MERN & FastAPI"
          />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Amit Kumar - Full Stack Developer" />
          <meta
            name="twitter:description"
            content="SIH 2025 Winner | Building AI-powered web applications"
          />
        </Helmet>

        <Header />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

