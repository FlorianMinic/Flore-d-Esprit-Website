'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaYoutube, FaTwitter, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Menu toggle (mobile) */}
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
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</span>
            </Link>
            <Link href="/presskit">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Press Kit</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</span>
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 pl-4">
              <Link href="https://youtube.com" target="_blank" className="text-purple-600 hover:scale-110 transition">
                <FaYoutube />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-purple-600 hover:scale-110 transition">
                <FaTwitter />
              </Link>
              <Link href="https://tiktok.com" target="_blank" className="text-purple-600 hover:scale-110 transition">
                <FaTiktok />
              </Link>
              <Link href="https://spotify.com" target="_blank" className="text-purple-600 hover:scale-110 transition">
                <FaSpotify />
              </Link>
              <Link href="https://deezer.com" target="_blank" className="text-purple-600 hover:scale-110 transition">
                <FaDeezer />
              </Link>
              <Link href="https://app.suno.ai/profile/FloreDesprit" target="_blank" className="text-purple-600 hover:scale-110 transition">
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
              <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">Home</span>
            </Link>
            <Link href="/presskit">
              <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">Press Kit</span>
            </Link>
            <Link href="/about">
              <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">About</span>
            </Link>
            <Link href="/contact">
              <span className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">Contact</span>
            </Link>
            {/* Réseaux en mobile ? à activer si besoin */}
          </div>
        </div>
      )}
    </nav>
  );
}
