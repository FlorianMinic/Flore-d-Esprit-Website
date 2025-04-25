'use client';

import { useEffect, useState } from 'react';

type Locale = 'fr' | 'en';

export function useLocale(): { locale: Locale; toggleLocale: () => void } {
  const [locale, setLocale] = useState<Locale>('fr');

  useEffect(() => {
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'fr') setLocale(stored);
  }, []);

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'fr' ? 'en' : 'fr';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    window.location.reload(); // Recharge le site avec la nouvelle langue
  };

  return { locale, toggleLocale };
}
