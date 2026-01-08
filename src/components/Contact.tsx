'use client';

import React from 'react';
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { UIContent } from '../lib/types';

interface ContactProps {
  ui?: UIContent;
}

export const Contact: React.FC<ContactProps> = ({ ui }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brown/5 dark:bg-neon/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brown/5 dark:bg-neon/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal dark:text-white mb-8">
                {ui?.readyToStart || "Готовы начать?"}
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md">
                Мы всегда открыты для новых вызовов и партнерства. Давайте создадим следующее поколение цифровых продуктов вместе.
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.2}>
                <a href="https://t.me/interphase_art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-white/5 border border-charcoal/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-brown dark:group-hover:border-neon group-hover:scale-110">
                    <Send size={24} className="text-charcoal dark:text-white group-hover:text-brown dark:group-hover:text-neon" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Telegram</div>
                    <div className="text-xl font-medium text-charcoal dark:text-white">@interphase_art</div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right: Simple Contact Card / Form Alternative */}
          <Reveal delay={0.3}>
            <div className="bg-white dark:bg-white/5 border border-charcoal/10 dark:border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Написать нам</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Самый быстрый способ обсудить ваш проект — написать нам в Telegram.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  href="https://t.me/interphase_art" 
                  variant="primary" 
                  className="w-full justify-between group"
                >
                  Написать в Telegram
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-charcoal/5 dark:border-white/5">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Статус системы: Онлайн и готова к работе
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
