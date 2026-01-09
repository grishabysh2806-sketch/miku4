'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Preloader } from '../components/Preloader';
import { CONTENT } from '../lib/constants';
import { Language } from '../lib/types';

export default function Home() {
  const [lang, setLang] = useState<Language>('ru');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const savedLang = localStorage.getItem('lang') as Language | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark
      document.documentElement.classList.add('dark');
    }

    if (savedLang) {
      setLang(savedLang);
    }
    
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const content = CONTENT[lang];

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <main className={`min-h-screen ${isLoading ? 'hidden' : 'block'}`}>
        <Navbar 
          items={content.nav} 
          lang={lang} 
          setLang={handleSetLang}
          theme={theme}
          toggleTheme={toggleTheme}
          ui={content.ui}
        />
        
        <Hero 
          content={content.hero} 
          onExplore={() => {
            const portfolio = document.getElementById('portfolio');
            portfolio?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        <div id="about">
          <About 
            content={content.about} 
            lang={lang}
            setLang={handleSetLang}
            theme={theme}
            toggleTheme={toggleTheme}
            onScrollDown={() => {
              const services = document.getElementById('services');
              services?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        <div id="services">
          <Services content={content.services} ui={content.ui} />
        </div>

        <div id="portfolio">
          <Portfolio content={content.portfolio} />
        </div>
        
        <Process content={content.process} />
        
        <FAQ 
          items={content.faq.items} 
          title={content.faq.title} 
          subtitle={content.faq.subtitle} 
          ui={content.ui}
        />
        
        <div id="contact">
          <Contact ui={content.ui} />
        </div>
        
        <Footer 
          content={content.footer} 
          navItems={content.nav} 
        />
      </main>
    </>
  );
}
