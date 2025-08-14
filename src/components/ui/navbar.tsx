'use client';

import Link from 'next/link';
import { useRef, useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FaYoutube, FaInstagram, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Icône officielle X (ex-Twitter)
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
  const [tabletPanel, setTabletPanel] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname() || '/';

  const normalizedPath = useMemo(
    () => pathname.replace(/^\/(fr|en)(?=\/|$)/, '') || '/',
    [pathname]
  );

  const t = {
    fr: {
      home: 'Accueil',
      news: 'Actualités',
      aboutme: 'À propos de moi',
      partners: 'Partenaires',
      contact: 'Contact',
      creationsAI: 'Créations IA',
      merch: 'Merch',
      nowPlaying: "Écoute : Extrait",
      open: 'Ouvrir',
      close: 'Fermer',
      menu: 'Menu',
      more: 'Plus'
    },
    en: {
      home: 'Home',
      news: 'News',
      aboutme: 'About me',
      partners: 'Partners',
      contact: 'Contact',
      creationsAI: 'AI Creations',
      merch: 'Merch',
      nowPlaying: 'Now playing: Preview',
      open: 'Open',
      close: 'Close',
      menu: 'Menu',
      more: 'More'
    },
  }[locale];

  const links = [
    { label: t.home, href: '/' },
    { label: t.creationsAI, href: '/creation-ai' },
    { label: t.news, href: '/news' },
    { label: t.aboutme, href: '/aboutme' },
    { label: t.partners, href: '/partners' },
    { label: t.merch, href: '/merch' },
    { label: t.contact, href: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
    setTabletPanel(false);
  }, [normalizedPath]);

  const pillBase = 'px-3 py-1 rounded-full text-[13px] lg:text-sm font-medium transition-colors';
  const pillIdle = 'text-gray-300 hover:text-white hover:bg-white/10';
  const pillActive = 'text-white bg-white/15 ring-1 ring-white/20';

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md">
      {/* ---------------- Desktop ≥ xl ---------------- */}
      <div className="relative hidden xl:block h-14">
        <div className="absolute inset-y-0 left-0 pl-4 lg:pl-6 flex items-center gap-4">
          <MiniAudioPlayer src="/audio/extrait.mp3" title={t.nowPlaying} />
          <Link href="/" className="flex-shrink-0">
            <span className={`${audiowide.className} text-[18px] lg:text-xl tracking-wide text-purple-300`}>
              Flore d&apos;Esprit
            </span>
          </Link>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ul className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
        </div>

        <div className="absolute inset-y-0 right-0 pr-4 lg:pr-6 flex items-center justify-end gap-3">
          <Link href="https://www.youtube.com/@FloredEsprit-k7c" target="_blank" aria-label="YouTube" className="social-link"><FaYoutube size={16} /></Link>
          <Link href="https://x.com/FloreD72226" target="_blank" aria-label="X" className="social-link"><SiX size={16} /></Link>
          <Link href="https://www.instagram.com/flore_desprit/" target="_blank" aria-label="Instagram" className="social-link"><FaInstagram size={16} /></Link>
          <Link href="https://www.tiktok.com/@floredesprit" target="_blank" aria-label="TikTok" className="social-link"><FaTiktok size={16} /></Link>
          <Link href="https://open.spotify.com/intl-fr/artist/7FVerziPMd52srNMLo14FU" target="_blank" aria-label="Spotify" className="social-link"><FaSpotify size={16} /></Link>
          <Link href="https://www.deezer.com/en/artist/281712681" target="_blank" aria-label="Deezer" className="social-link"><FaDeezer size={16} /></Link>
          <Link href="https://suno.com/@flordesprit" target="_blank" aria-label="Suno" className="social-link"><HiOutlineMusicalNote size={16} /></Link>
          <div className="pl-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* ---------------- Tablette md → <xl ---------------- */}
      {tabletPanel && (
        <div className="md:block xl:hidden border-t border-white/10 bg-black/85 backdrop-blur-md">
          <div className="px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="https://www.youtube.com/@FloredEsprit-k7c" target="_blank" aria-label="YouTube" className="social-link"><FaYoutube size={18} /></Link>
              <Link href="https://x.com/FloreD72226" target="_blank" aria-label="X" className="social-link"><SiX size={18} /></Link>
              <Link href="https://www.instagram.com/flore_desprit/" target="_blank" aria-label="Instagram" className="social-link"><FaInstagram size={18} /></Link>
              <Link href="https://www.tiktok.com/@floredesprit" target="_blank" aria-label="TikTok" className="social-link"><FaTiktok size={18} /></Link>
              <Link href="https://open.spotify.com/intl-fr/artist/7FVerziPMd52srNMLo14FU" target="_blank" aria-label="Spotify" className="social-link"><FaSpotify size={18} /></Link>
              <Link href="https://www.deezer.com/en/artist/281712681" target="_blank" aria-label="Deezer" className="social-link"><FaDeezer size={18} /></Link>
              <Link href="https://suno.com/@flordesprit" target="_blank" aria-label="Suno" className="social-link"><HiOutlineMusicalNote size={18} /></Link>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
