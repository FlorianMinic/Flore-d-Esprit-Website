'use client';

import Link from 'next/link';
import { useRef, useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FaYoutube, FaInstagram, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';
import { useLocale } from '@/hooks/useLocale';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

/* ===================== Mini lecteur audio ===================== */
type MiniAudioPlayerProps = {
  src: string;
  title: string;
  autoplay?: boolean;
};

function MiniAudioPlayer({ src, title, autoplay = false }: MiniAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play(); // ignore proprement la promesse
    } else {
      el.pause();
    }
  };

  // Événements du <audio>
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (!Number.isFinite(el.duration) || el.duration <= 0) return;
      setProgress(el.currentTime / el.duration);
    };
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onEnded);

    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onEnded);
    };
  }, []);

  // Quand la source change
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    setProgress(0);
    el.pause();
    el.currentTime = 0;
    el.load();

    if (autoplay) {
      const tryPlay = () => {
        void el.play().catch(() => {});
      };
      if (el.readyState >= 2) tryPlay();
      else el.addEventListener('canplay', tryPlay, { once: true });
    } else {
      setPlaying(false);
    }
  }, [src, autoplay]);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        type="button"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? '❚❚' : '►'}
      </button>

      <div className="w-40 sm:w-48 select-none">
        <div className="text-[11px] text-gray-300 leading-none mb-1 truncate" title={title}>
          {title}
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden" aria-hidden>
          <div
            className="h-full bg-purple-400 transition-[width]"
            style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
          />
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="none" />
    </div>
  );
}

/* ===================== NavBar ===================== */
type Track = { src: string; title: string };
type NavLink = { label: string; href: string };

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { locale } = useLocale();
  const pathname = usePathname() || '/';

  // --- Playlist ---
  const tracks: Track[] = [
    { src: '/audio/Craving-saving.wav', title: 'Craving Saving' },
    { src: '/audio/Whats-your-poison.wav', title: "What's Your Poison" },
    { src: '/audio/Dance-with-the-wind.wav', title: 'Dance with the Wind' },
    { src: '/audio/Save-Me-from-the-fall.wav', title: 'Save Me from the Fall' },
  ];
  const [current, setCurrent] = useState<number>(0);
  const [autoplayFlag, setAutoplayFlag] = useState<boolean>(false);

  const next = () => {
    setCurrent((i) => (i + 1) % tracks.length);
    setAutoplayFlag((f) => !f);
  };
  const prev = () => {
    setCurrent((i) => (i - 1 + tracks.length) % tracks.length);
    setAutoplayFlag((f) => !f);
  };

  const normalizedPath = useMemo<string>(
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
      open: 'Ouvrir',
      close: 'Fermer',
      menu: 'Menu',
      more: 'Plus',
    },
    en: {
      home: 'Home',
      news: 'News',
      aboutme: 'About me',
      partners: 'Partners',
      contact: 'Contact',
      creationsAI: 'AI Creations',
      merch: 'Merch',
      open: 'Open',
      close: 'Close',
      menu: 'Menu',
      more: 'More',
    },
  }[locale];

  const links: NavLink[] = [
    { label: t.home, href: '/' },
    { label: t.creationsAI, href: '/creation-ai' },
    { label: t.aboutme, href: '/aboutme' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [normalizedPath]);

  const pillBase =
    'px-3 py-1 rounded-full text-[13px] lg:text-sm font-medium transition-colors';
  const pillIdle = 'text-gray-300 hover:text-white hover:bg-white/10';
  const pillActive = 'text-white bg-white/15 ring-1 ring-white/20';

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md">
      {/* ===== Barre supérieure commune ===== */}
      <div className="h-14 px-4 lg:px-6 flex items-center justify-between">
        {/* GAUCHE : Logo + lecteur (prev/next à partir de md) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex-shrink-0 mr-1">
            <span
              className={`${audiowide.className} text-[18px] lg:text-xl tracking-wide text-purple-300`}
            >
              Flore d&apos;Esprit
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              type="button"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              aria-label="Previous track"
            >
              ‹
            </button>

            <MiniAudioPlayer
              src={tracks[current].src}
              title={tracks[current].title}
              autoplay={autoplayFlag}
            />

            <button
              onClick={next}
              type="button"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              aria-label="Next track"
            >
              ›
            </button>
          </div>
        </div>

        {/* CENTRE (xl+) : liens */}
        <div className="hidden xl:flex items-center justify-center">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
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

        {/* DROITE : réseaux + langue (xl+), bouton menu (mobile/tablette) */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="https://www.youtube.com/@FloredEsprit-k7c"
              target="_blank"
              aria-label="YouTube"
              className="social-link"
            >
              <FaYoutube size={16} />
            </Link>
            <Link
              href="https://x.com/FloreD72226"
              target="_blank"
              aria-label="X"
              className="social-link"
            >
              <SiX size={16} />
            </Link>
            <Link
              href="https://www.instagram.com/flore_desprit/"
              target="_blank"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram size={16} />
            </Link>
            <Link
              href="https://www.tiktok.com/@floredesprit"
              target="_blank"
              aria-label="TikTok"
              className="social-link"
            >
              <FaTiktok size={16} />
            </Link>
            <Link
              href="https://open.spotify.com/intl-fr/artist/7FVerziPMd52srNMLo14FU"
              target="_blank"
              aria-label="Spotify"
              className="social-link"
            >
              <FaSpotify size={16} />
            </Link>
            <Link
              href="https://www.deezer.com/en/artist/281712681"
              target="_blank"
              aria-label="Deezer"
              className="social-link"
            >
              <FaDeezer size={16} />
            </Link>
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              aria-label="Suno"
              className="social-link"
            >
              <HiOutlineMusicalNote size={16} />
            </Link>
            <div className="pl-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Bouton menu mobile/tablette */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="xl:hidden inline-flex items-center justify-center px-3 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            aria-expanded={menuOpen}
            aria-controls="mobile-panel"
            type="button"
          >
            {menuOpen ? t.close : t.menu}
          </button>
        </div>
      </div>

      {/* Panneau mobile/tablette */}
      {menuOpen && (
        <div
          id="mobile-panel"
          className="xl:hidden border-t border-white/10 bg-black/85 backdrop-blur-md"
        >
          <div className="px-4 py-3">
            <ul className="flex flex-wrap items-center gap-2">
              {links.map(({ label, href }) => {
                const active = normalizedPath === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        active
                          ? 'text-white bg-white/15 ring-1 ring-white/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Réseaux + langue pour mobile */}
            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.youtube.com/@FloredEsprit-k7c"
                  target="_blank"
                  aria-label="YouTube"
                  className="social-link"
                >
                  <FaYoutube size={18} />
                </Link>
                <Link
                  href="https://x.com/FloreD72226"
                  target="_blank"
                  aria-label="X"
                  className="social-link"
                >
                  <SiX size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/flore_desprit/"
                  target="_blank"
                  aria-label="Instagram"
                  className="social-link"
                >
                  <FaInstagram size={18} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@floredesprit"
                  target="_blank"
                  aria-label="TikTok"
                  className="social-link"
                >
                  <FaTiktok size={18} />
                </Link>
                <Link
                  href="https://open.spotify.com/intl-fr/artist/7FVerziPMd52srNMLo14FU"
                  target="_blank"
                  aria-label="Spotify"
                  className="social-link"
                >
                  <FaSpotify size={18} />
                </Link>
                <Link
                  href="https://www.deezer.com/en/artist/281712681"
                  target="_blank"
                  aria-label="Deezer"
                  className="social-link"
                >
                  <FaDeezer size={18} />
                </Link>
                <Link
                  href="https://suno.com/@flordesprit"
                  target="_blank"
                  aria-label="Suno"
                  className="social-link"
                >
                  <HiOutlineMusicalNote size={18} />
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
