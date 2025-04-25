'use client';

import { useLocale } from '@/hooks/useLocale';

export function LanguageSwitcher() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="ml-6 px-3 py-2 text-sm font-medium border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition"
      aria-label="Changer la langue"
    >
      {locale === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
