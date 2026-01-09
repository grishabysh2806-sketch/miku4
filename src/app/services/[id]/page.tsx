'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { CONTENT } from '../../../lib/constants';
import { Language } from '../../../lib/types';
import { Reveal } from '../../../components/Reveal';
import { Button } from '../../../components/Button';
import { ChevronLeft, Check, Server, Shield, Zap, Globe } from 'lucide-react';

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [lang, setLang] = useState<Language>('ru');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const savedLang = localStorage.getItem('lang') as Language | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    if (savedLang) {
      setLang(savedLang);
    }
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
  const service = content.services.items.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bone dark:bg-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{content.ui.notFound}</h1>
          <Button onClick={() => router.push('/')}>{content.ui.goHome}</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bone dark:bg-dark transition-colors duration-500">
      <Navbar 
        items={content.nav} 
        lang={lang} 
        setLang={handleSetLang}
        theme={theme}
        toggleTheme={toggleTheme}
        ui={content.ui}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal variant="fade-up">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 hover:text-brown dark:hover:text-neon transition-colors mb-12 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {content.ui.backToServices}
          </button>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal variant="fade-up" delay={0.1}>
              <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brown dark:text-neon mb-4">
                {content.ui.systemModule} {service.number}
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal dark:text-white uppercase leading-none mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                {service.longDescription || service.shortDescription}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-charcoal/5 dark:border-white/5 bg-white/50 dark:bg-white/5">
                    <div className="w-8 h-8 rounded-lg bg-brown/10 dark:bg-neon/10 flex items-center justify-center shrink-0">
                      <Check size={18} className="text-brown dark:text-neon" />
                    </div>
                    <span className="text-charcoal dark:text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-32">
            <Reveal variant="fade-up" delay={0.3}>
              <div className="p-8 md:p-10 rounded-3xl border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-charcoal dark:text-white uppercase tracking-tight">
                  {content.ui.readyToStart}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Мы создаем уникальные решения, ориентированные на ваш бизнес и целевую аудиторию.
                </p>
                <Button 
                  href="https://t.me/interphase_art" 
                  className="w-full justify-center py-6 text-lg"
                >
                  Обсудить проект
                </Button>
                
                <div className="mt-10 pt-10 border-t border-charcoal/5 dark:border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-charcoal/5 dark:bg-white/5 flex items-center justify-center">
                      <Zap size={20} className="text-brown dark:text-neon" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-wider">Скорость</div>
                      <div className="text-xs text-gray-500 uppercase">Оптимизация 100/100</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-charcoal/5 dark:bg-white/5 flex items-center justify-center">
                      <Shield size={20} className="text-brown dark:text-neon" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-wider">Безопасность</div>
                      <div className="text-xs text-gray-500 uppercase">Чистый и защищенный код</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer content={content.footer} navItems={content.nav} />
    </main>
  );
}
