'use client';

import { HeroSection } from '@/components/ui/HeroSection';
import { FaArrowDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

export default function HomePage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    fr: {
      aiTitle: "À propos de l’utilisation de l’IA dans mon art",
      aiP1:
        'Flore d’Esprit est un artiste virtuel né d’une collaboration entre moi, être humain, et des outils d’intelligence artificielle.',
      aiP2:
        'L’IA n’est pas là pour remplacer la créativité humaine mais pour l’amplifier : elle m’aide à explorer, prototyper et pousser des idées plus loin.',
      aiP3:
        'Derrière chaque image, chanson ou texte : mes choix, ma direction artistique et mes émotions. L’IA est un partenaire, pas un substitut.',
      aiP4:
        'Mon intention n’est pas de supprimer des métiers, mais d’ouvrir de nouvelles voies, d’inventer d’autres formats et de collaborer avec des artistes humains.',
      aiBulletsTitle: 'Concrètement, l’IA m’aide à :',
      aiBullets: [
        'itérer plus vite (maquettes, concepts, variations) pour mieux décider',
        'expérimenter des styles visuels/sonores inédits',
        'rendre accessible une vision artistique avec peu de moyens',
        'rester focalisé sur l’écriture, la direction et l’émotion',
      ],

      universTitle: "L’univers de Flore d’Esprit",
      universText: `Flore d’Esprit, c’est une explosion de sons, de couleurs et d’émotions.\nInspiré par les paillettes, les grooves psychédéliques et une liberté totale,\nil casse les codes pour faire danser les esprits autant que les corps.\n\nDerrière chaque beat se cache un monde à explorer. Entre électro déjantée et hymnes funky,\nFlore d'Esprit t’invite à lâcher prise et à entrer dans sa bulle pleine de créativité.`,
      musiqueTitle: 'Le son de Flore d’Esprit',
      musiqueText: `Plonge dans l’univers musical déjanté de Flore d’Esprit.\nDes sons créés avec passion, inspirés par le groove, les paillettes et une pincée de folie cosmique.`,
      playlistTitle: 'Playlist officielle',
      playlistText: 'Écoute les derniers sons de Flore d’Esprit sur ta plateforme préférée :',
      sunoText: 'Écouter sur Suno →',
      videosTitle: 'Vidéos',
      videosText: "Découvre l'univers visuel de Flore d’Esprit à travers ces vidéos captivantes.",
    },
    en: {
      aiTitle: 'About AI in my work',
      aiP1:
        'Flore d’Esprit is a virtual artist born from a collaboration between me, a human creator, and AI tools.',
      aiP2:
        'AI doesn’t replace human creativity — it amplifies it. It helps me explore, prototype and push ideas further.',
      aiP3:
        'Behind every image, song or text are my choices, direction and emotions. AI is a partner, not a replacement.',
      aiP4:
        'My goal isn’t to remove jobs, but to open new paths, invent new formats and collaborate with human artists.',
      aiBulletsTitle: 'In practice, AI helps me to:',
      aiBullets: [
        'iterate faster (drafts, concepts, variations) to decide better',
        'experiment with new visual/sonic styles',
        'make an artistic vision possible with modest resources',
        'stay focused on writing, direction and emotion',
      ],

      universTitle: "The world of Flore d'Esprit",
      universText: `Flore d'Esprit is an explosion of sound, color, and emotion.\nInspired by glitter, psychedelic grooves, and total freedom,\nit breaks the rules to make both your body and mind dance.\n\nBehind every beat lies a world to explore. Between wild electro and funky anthems,\nFlore d'Esprit invites you to let go and step into a bubble of creativity.`,
      musiqueTitle: "The sound of Flore d'Esprit",
      musiqueText: `Dive into the eccentric musical universe of Flore d'Esprit.\nSounds created with passion, inspired by groove, glitter, and a touch of cosmic madness.`,
      playlistTitle: 'Official Playlist',
      playlistText: "Listen to the latest sounds from Flore d'Esprit on your favorite platform:",
      sunoText: 'Listen on Suno →',
      videosTitle: 'Videos',
      videosText: 'Discover Flore d’\u2019Esprit’s visual universe through these captivating videos.',
    },
  }[locale];

  // utilitaires de style
  const card = 'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const ring = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const h2 = 'text-3xl md:text-4xl font-bold tracking-tight text-cyan-200';
  // flèches animées (plus douces que animate-bounce)
  const arrowBtn = [
    'group inline-flex items-center justify-center leading-none',
    'w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full',
    'text-slate-100 border border-white/10 bg-white/10 backdrop-blur-md',
    'shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'transition-transform duration-300 hover:scale-110 hover:bg-white/20',
    'motion-safe:animate-[bounce_2s_ease-in-out_infinite]',
    'hover:animate-bounce-cartoon'
  ].join(' ');

  return (
    <main className="relative scroll-smooth text-slate-100 min-h-screen">
      {/* HERO */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <HeroSection />
      </div>

      {/* AI Philosophy — SECTION A */}
      <section id="ai" className="relative px-6 md:px-20 pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32 lg:pb-40 md:min-h-screen grid place-items-center text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* halos cyan */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }} />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }} />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className={h2}>{t.aiTitle}</h2>
          <div className={`${card} mt-6 p-6 text-left md:text-left`}>
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              <p>{t.aiP1}</p>
              <p>{t.aiP2}</p>
              <p>{t.aiP3}</p>
              <p>{t.aiP4}</p>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-semibold mb-2 text-slate-100">{t.aiBulletsTitle}</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-300">
                {t.aiBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#univers" className={`mt-8 ${arrowBtn}`} aria-label="Scroll to universe">
            <FaArrowDown size={22} className="shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
          </a>
        </div>
      </section>

      {/* Univers — SECTION B */}
      <section id="univers" className="relative px-6 md:px-20 pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32 lg:pb-40 md:min-h-screen grid place-items-center text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* halos violets */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }} />
          <div className="absolute -bottom-20 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.35), transparent)' }} />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className={h2}>{t.universTitle}</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed whitespace-pre-line text-slate-300 mt-4">{t.universText}</p>
          <a href="#musique" className={`mt-8 ${arrowBtn}`} aria-label="Scroll to music">
            <FaArrowDown size={22} className="shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
          </a>
        </div>
      </section>

      {/* Musique — SECTION A */}
      <section id="musique" className="relative px-6 md:px-20 pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32 lg:pb-40 md:min-h-screen grid place-items-center text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* halos cyan */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }} />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }} />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className={h2}>{t.musiqueTitle}</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed whitespace-pre-line text-slate-300 mt-4">{t.musiqueText}</p>
          <div className={`${card} mt-8 p-4 max-w-md mx-auto`}>
            <audio controls className="w-full">
              <source src="/audio/extrait.mp3" type="audio/mpeg" />
              {isFr ? 'Ton navigateur ne supporte pas la lecture audio.' : 'Your browser does not support audio playback.'}
            </audio>
          </div>
          <a href="#playlist" className={`mt-8 ${arrowBtn}`} aria-label="Scroll to playlist">
            <FaArrowDown size={22} className="shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
          </a>
        </div>
      </section>

      {/* Playlist — SECTION B */}
      <section id="playlist" className="relative px-6 md:px-20 pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32 lg:pb-40 md:min-h-screen grid place-items-center text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* halos violets */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }} />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.35), transparent)' }} />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className={h2}>{t.playlistTitle}</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300 mt-4">{t.playlistText}</p>
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-stretch">
            <iframe
              src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className={`${card} rounded-xl md:w-[420px]`}
            />
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              className={`${card} ${ring} rounded-xl md:w-[420px] grid place-items-center text-xl font-semibold hover:bg-white/10`}
            >
              {t.sunoText}
            </Link>
          </div>
          <a href="#videos" className={`mt-10 ${arrowBtn}`} aria-label="Scroll to videos">
            <FaArrowDown size={22} className="shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
          </a>
        </div>
      </section>

      {/* Vidéos — SECTION A */}
      <section id="videos" className="relative px-6 md:px-20 pt-16 md:pt-20 lg:pt-24 pb-28 md:pb-32 lg:pb-40 md:min-h-screen grid place-items-center text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* halos cyan */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }} />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }} />
        </div>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={h2}>{t.videosTitle}</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300 mt-4">{t.videosText}</p>
          <div className="w-full mt-8">
            <Swiper modules={[Navigation]} navigation spaceBetween={24} slidesPerView={1} className="w-full">
              <SwiperSlide>
                <div className={`${card} aspect-video w-full rounded-xl overflow-hidden`}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Yg9JtvsR61k"
                    title="Bubblegum Mood"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${card} aspect-video w-full rounded-xl overflow-hidden`}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/-aX3vJ8RZFQ"
                    title="Gravity Falls"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
