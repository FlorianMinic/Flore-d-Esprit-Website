'use client';

import Link from 'next/link';
import { FaYoutube, FaTwitter, FaTiktok, FaSpotify, FaDeezer, FaInstagram } from 'react-icons/fa';
import { useLocale } from '@/hooks/useLocale';

export function Footer() {
  const { locale } = useLocale();

  const t = {
    fr: {
      heading: 'Retrouvez-moi sur les réseaux',
      copyright: `© ${new Date().getFullYear()} Flore d’Esprit`,
    },
    en: {
      heading: 'Find me on social media',
      copyright: `© ${new Date().getFullYear()} Flore d’Esprit`,
    },
  }[locale];

  return (
    <footer className="bg-black text-white py-8 text-center">
      <h2 className="text-xl font-semibold mb-4">{t.heading}</h2>

      <div className="flex justify-center gap-6 text-3xl">
        <Link href="https://youtube.com" target="_blank" className="hover:text-red-500 hover:scale-125 transition">
          <FaYoutube />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 hover:scale-125 transition">
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="hover:text-pink-600 hover:scale-125 transition">
          <FaInstagram />
        </Link>
        <Link href="https://tiktok.com" target="_blank" className="hover:text-pink-500 hover:scale-125 transition">
          <FaTiktok />
        </Link>
        <Link href="https://spotify.com" target="_blank" className="hover:text-green-400 hover:scale-125 transition">
          <FaSpotify />
        </Link>
        <Link href="https://deezer.com" target="_blank" className="hover:text-purple-400 hover:scale-125 transition">
          <FaDeezer />
        </Link>
      </div>

      <p className="mt-4 text-sm text-gray-400">{t.copyright}</p>
    </footer>
  );
}
