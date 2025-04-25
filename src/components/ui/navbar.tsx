'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale'; // Hook de langue (dans src/hooks/useLocale.ts)

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-purple-600">Flore d'Esprit</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                {locale === 'fr' ? 'Accueil' : 'Home'}
              </span>
            </Link>
            <Link href="/presse">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                {locale === 'fr' ? 'Dossier de presse' : 'Press Kit'}
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                {locale === 'fr' ? 'À propos' : 'About'}
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                {locale === 'fr' ? 'Contact' : 'Contact'}
              </span>
            </Link>

            {/* BOUTON LANGUE */}
            <button
              onClick={toggleLocale}
              className="ml-6 px-3 py-2 text-sm font-medium border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition"
              aria-label="Changer la langue"
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Mobile burger icon */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
          <Link href="/">
            <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">
              {locale === 'fr' ? 'Accueil' : 'Home'}
            </span>
          </Link>
          <Link href="/presse">
            <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">
              {locale === 'fr' ? 'Dossier de presse' : 'Press Kit'}
            </span>
          </Link>
          <Link href="/about">
            <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">
              {locale === 'fr' ? 'À propos' : 'About'}
            </span>
          </Link>
          <Link href="/contact">
            <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">
              {locale === 'fr' ? 'Contact' : 'Contact'}
            </span>
          </Link>
          <button
            onClick={toggleLocale}
            className="w-full text-left px-3 py-2 text-base font-medium text-purple-600 border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      )}
    </nav>
  );
}
