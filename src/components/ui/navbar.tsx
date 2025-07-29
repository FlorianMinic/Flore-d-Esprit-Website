'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';
import { useLocale } from '@/hooks/useLocale';

/**
 * Barre de navigation améliorée : on conserve la structure fonctionnelle
 * du composant original et on applique une police Google custom uniquement
 * sur le logo via un style inline. Pour charger cette police, ajoutez
 * l'URL correspondante dans votre layout global (par exemple dans
 * app/layout.tsx ou votre <Head> global) :
 *
 * <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
 *
 * Vous pouvez aussi définir cette police dans tailwind.config.js et utiliser
 * la classe font-righteous à la place du style inline.
 */
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();

  const t = {
    fr: {
      home: 'Accueil',
      news: 'Actualités',
      presskit: 'Press Kit',
      about: 'À propos',
      partners: 'Partenaires',
      contact: 'Contact',
    },
    en: {
      home: 'Home',
      news: 'News',
      presskit: 'Press Kit',
      about: 'About',
      partners: 'Partners',
      contact: 'Contact',
    },
  }[locale];

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo avec police Righteous appliquée via style inline */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span
                style={{ fontFamily: 'Righteous, sans-serif' }}
                className="text-xl font-bold text-purple-600 dark:text-purple-300"
              >
                Flore d&apos;Esprit
              </span>
            </Link>
          </div>

          {/* Menu toggle (mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 dark:text-purple-300 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.home}
              </span>
            </Link>
            <Link href="/news">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.news}
              </span>
            </Link>
            <Link href="/presskit">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.presskit}
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.about}
              </span>
            </Link>
            <Link href="/partners">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.partners}
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                {t.contact}
              </span>
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 pl-4">
              <Link href="https://youtube.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaYoutube />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaInstagram />
              </Link>
              <Link href="https://tiktok.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaTiktok />
              </Link>
              <Link href="https://spotify.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaSpotify />
              </Link>
              <Link href="https://deezer.com" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <FaDeezer />
              </Link>
              <Link href="https://app.suno.ai/profile/FloreDesprit" target="_blank" className="text-purple-600 dark:text-purple-300 hover:scale-110 transition">
                <HiOutlineMusicalNote />
              </Link>
            </div>

            {/* Sélecteur de langue */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.home}
              </span>
            </Link>
            <Link href="/news">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.news}
              </span>
            </Link>
            <Link href="/presskit">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.presskit}
              </span>
            </Link>
            <Link href="/about">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.about}
              </span>
            </Link>
            <Link href="/partners">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.partners}
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
                {t.contact}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
