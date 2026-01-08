'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface TelegramContextType {
  user: any;
  webApp: any | null;
  isReady: boolean;
}

const TelegramContext = createContext<TelegramContextType>({
  user: null,
  webApp: null,
  isReady: false,
});

export const useTelegram = () => useContext(TelegramContext);

export const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [webApp, setWebApp] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Dynamically import the SDK only on the client
    const initTWA = async () => {
      try {
        const WebApp = (await import('@twa-dev/sdk')).default;
        
        if (WebApp) {
          WebApp.ready();
          WebApp.setHeaderColor('#000000');
          WebApp.setBackgroundColor('#000000');
          WebApp.expand();

          if (WebApp.initDataUnsafe?.user) {
            setUser(WebApp.initDataUnsafe.user);
          }

          setWebApp(WebApp);
        }
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize Telegram WebApp SDK:', error);
        setIsReady(true); // Still set ready to allow the app to function outside Telegram
      }
    };

    if (typeof window !== 'undefined') {
      initTWA();
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ user, webApp, isReady }}>
      {children}
    </TelegramContext.Provider>
  );
};
