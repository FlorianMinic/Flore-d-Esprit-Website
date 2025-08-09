'use client';

import Link from 'next/link';
import { useRef, useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';
import { useLocale } from '@/hooks/useLocale';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

/* -------- Mini lecteur audio compact -------- */
function MiniAudioPlayer({ src = '/audio/extrait.mp3', title }: { src?: string; title?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    el.paused ? el.play() : el.pause();
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => el.duration && setProgress(el.currentTime / el.duration);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onPause);
    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onPause);
    };
  }, []);

  return (
    <div className="hidden md:flex items-center gap-3">
      <button
        onClick={toggle}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? '❚❚' : '▶'}
      </button>
      <div className="w-28 select-none">
        {title && <div className="text-[11px] text-gray-400 leading-none mb-1 truncate">{title}</div>}
        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-purple-400 transition-[width]" style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }} />
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="none" />
    </div>
  );
}

/* --------------------- NavBar --------------------- */
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname() || '/';

  // Normalise le pathname: retire /fr ou /en au début si présent
  const normalizedPath = useMemo(
    () => pathname.replace(/^\/(fr|en)(?=\/|$)/, '') || '/',
    [pathname]
  );

  const t = {
    fr: {
      home: 'Accueil',
      news: 'Actualités',
      presskit: 'Press Kit',
      about: 'À propos',
      partners: 'Partenaires',
      contact: 'Contact',
      creationsAI: 'Créations IA',
      merch: 'Merch',
      nowPlaying: "Écoute : Extrait",
    },
    en: {
      home: 'Home',
      news: 'News',
      presskit: 'Press Kit',
      about: 'About',
      partners: 'Partners',
      contact: 'Contact',
      creationsAI: 'AI Creations',
      merch: 'Merch',
      nowPlaying: 'Now playing: Preview',
    },
  }[locale];

  const links = [
    { label: t.home, href: '/' },
    { label: t.news, href: '/news' },
    { label: t.presskit, href: '/presskit' },
    { label: t.about, href: '/about' },
    { label: t.partners, href: '/partners' },
    { label: t.contact, href: '/contact' },
    { label: t.creationsAI, href: '/creation-ai' },
    { label: t.merch, href: '/merch' },
  ];

  // Ferme le menu mobile quand on change de route
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedPath]);

  const pillBase = 'px-3 py-1 rounded-full text-[13px] lg:text-sm font-medium transition-colors';
  const pillIdle = 'text-gray-300 hover:text-white hover:bg-white/10';
  const pillActive = 'text-white bg-white/15 ring-1 ring-white/20';

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center h-14 gap-6">
          {/* Gauche */}
          <div className="flex items-center gap-4">
            <MiniAudioPlayer src="/audio/extrait.mp3" title={t.nowPlaying} />
            <Link href="/" className="flex-shrink-0">
              <span className={`${audiowide.className} text-[18px] lg:text-xl tracking-wide text-purple-300`}>
                Flore d&apos;Esprit
              </span>
            </Link>
          </div>

          {/* Centre */}
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {links.map(({ label, href }) => {
              const active = normalizedPath === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${pillBase} ${active ? pillActive : pillIdle}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Droite */}
          <div className="flex items-center justify-end gap-3">
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="social-link"><FaYoutube size={16} /></Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter/X" className="social-link"><FaTwitter size={16} /></Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-link"><FaInstagram size={16} /></Link>
            <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" className="social-link"><FaTiktok size={16} /></Link>
            <Link href="https://spotify.com" target="_blank" aria-label="Spotify" className="social-link"><FaSpotify size={16} /></Link>
            <Link href="https://deezer.com" target="_blank" aria-label="Deezer" className="social-link"><FaDeezer size={16} /></Link>
            <Link href="https://app.suno.ai/profile/FloreDesprit" target="_blank" aria-label="Suno" className="social-link"><HiOutlineMusicalNote size={16} /></Link>
            <div className="pl-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between h-14">
          <Link href="/" className="flex-shrink-0">
            <span className={`${audiowide.className} text-[17px] tracking-wide text-purple-300`}>
              Flore d&apos;Esprit
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(v => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-purple-300 hover:bg.white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg.black/85 backdrop-blur-md border-t border-white/10" id="mobile-menu">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <MiniAudioPlayer src="/audio/extrait.mp3" title={t.nowPlaying} />
            {links.map(({ label, href }) => {
              const active = normalizedPath === href;
              return (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      active ? 'text-white bg-white/10' : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}

      {/* Style icônes réseaux */}
      <style jsx global>{`
        .social-link { display:inline-flex; align-items:center; justify-content:center; color: rgb(216 180 254); }
        .social-link:hover { transform: translateY(-1px); filter: drop-shadow(0 0 6px rgba(168,85,247,.35)); transition: all 150ms; }
        .dark .social-link { color: rgb(216 180 254); }
      `}</style>
    </nav>
  );
}
