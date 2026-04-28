import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
const STORAGE_KEY = 'or_noir_group_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }
    return window.localStorage.getItem(STORAGE_KEY) || 'en';
  });
  const languages = ['en', 'de', 'it'];

  const setLang = (nextLang) => {
    setLangState(nextLang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    }
  };
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
