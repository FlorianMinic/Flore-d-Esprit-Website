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

  const t = {
    fr: {
      aiBadge: 'IA • Processus',
      universeBadge: 'Univers',
      mediaBadge: 'Musique & Vidéo',
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
      universText: `Flore d’Esprit, c’est une explosion de sons, de couleurs et d’émotions.
Inspiré par les paillettes, les grooves psychédéliques et une liberté totale,
il casse les codes pour faire danser les esprits autant que les corps.

Derrière chaque beat se cache un monde à explorer. Entre électro déjantée et hymnes funky,
Flore d'Esprit t’invite à lâcher prise et à entrer dans sa bulle pleine de créativité.`,
      mediaTitle: 'Playlist officielle & Vidéos',
      mediaText: 'Écoute et regarde : musique et clips au même endroit.',
      playlistText: 'Écoute les derniers sons de Flore d’Esprit :',
      sunoText: 'Écouter sur Suno →',
      videosTitle: 'Vidéos',
    },
    en: {
      aiBadge: 'AI • Process',
      universeBadge: 'Universe',
      mediaBadge: 'Music & Video',
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
      universText: `Flore d'Esprit is an explosion of sound, color, and emotion.
Inspired by glitter, psychedelic grooves, and total freedom,
it breaks the rules to make both your body and mind dance.

Behind every beat lies a world to explore. Between wild electro and funky anthems,
Flore d'Esprit invites you to let go and step into a bubble of creativity.`,
      mediaTitle: 'Official Playlist & Videos',
      mediaText: 'Listen and watch: music and clips in one place.',
      playlistText: 'Listen to the latest tracks:',
      sunoText: 'Listen on Suno →',
      videosTitle: 'Videos',
    },
  }[locale];

  /* ---------- styles utilitaires ---------- */
  const sectionBase =
    'relative px-5 sm:px-6 md:px-10 lg:px-20 pt-12 sm:pt-14 md:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-28 lg:pb-36 min-h-[88svh] md:min-h-[96svh] grid place-items-center text-center';
  const hBadge =
    'inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/10 text-cyan-200 border border-white/10 shadow-sm';
  const h2 =
    'mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 text-[26px] sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]';
  const card =
    'rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_6px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_44px_rgba(0,0,0,0.45)] transition-shadow';
  const ring =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const arrowBtn = [
    'group inline-flex items-center justify-center leading-none',
    'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full',
    'text-slate-100 border border-white/10 bg-white/10 backdrop-blur-md',
    'shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
    'transition-transform duration-300 hover:scale-110 hover:bg-white/20',
    'motion-safe:animate-[bounce_2s_ease-in-out_infinite] motion-reduce:animate-none',
    ring,
  ].join(' ');

  // Section média : plus d’air en haut + ancrage confortable + pas de débordement horizontal
  const sectionMedia =
    `${sectionBase} bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ` +
    'pt-20 sm:pt-24 md:pt-28 lg:pt-32 scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36 overflow-x-hidden';

  return (
    <main className="relative scroll-smooth text-slate-100 min-h-screen overflow-x-hidden">
      {/* motif/grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,.6) 1px, transparent 0), radial-gradient(1px 1px at 30px 20px, rgba(255,255,255,.35) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* HERO */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <HeroSection />
      </div>

      {/* AI */}
      <section id="ai" className={`${sectionBase} bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950`}>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }}
          />
          <div
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <span className={hBadge}>{t.aiBadge}</span>
          <h2 className={h2}>{t.aiTitle}</h2>

          <div className={`${card} mt-6 p-5 sm:p-6 text-left`}>
            <div className="space-y-5 text-[15px] sm:text-base md:text-lg leading-7 sm:leading-7 text-slate-300">
              <p>{t.aiP1}</p>
              <p>{t.aiP2}</p>
              <p>{t.aiP3}</p>
              <p>{t.aiP4}</p>
            </div>
            <div className="mt-5 sm:mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="font-semibold mb-2 text-slate-100">{t.aiBulletsTitle}</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[15px] sm:text-base leading-7">
                {t.aiBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#univers" className="mt-7 sm:mt-8 inline-block" aria-label="Scroll to universe">
            <span className={arrowBtn}>
              <FaArrowDown size={20} className="sm:size-[22px] leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
            </span>
          </a>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* UNIVERS */}
      <section id="univers" className={`${sectionBase} bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-16 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }}
          />
          <div
            className="absolute -bottom-20 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.35), transparent)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <span className={hBadge}>{t.universeBadge}</span>
          <h2 className={h2}>{t.universTitle}</h2>
          <p className="max-w-3xl mx-auto text-[15px] sm:text-lg leading-7 sm:leading-7 whitespace-pre-line text-slate-300 mt-4">
            {t.universText}
          </p>

          <a href="#media" className="mt-7 sm:mt-8 inline-block" aria-label="Scroll to media">
            <span className={arrowBtn}>
              <FaArrowDown size={20} className="sm:size-[22px] leading-none transition-transform duration-300 ease-out group-hover:scale-110" />
            </span>
          </a>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* MEDIA — espacement + carrousel unique */}
      <section id="media" className={sectionMedia}>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }}
          />
          <div
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }}
          />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <span className={hBadge}>{t.mediaBadge}</span>
          <h2 className={`${h2} mt-4`}>{t.mediaTitle}</h2>
          <p className="max-w-2xl mx-auto text-[15px] sm:text-lg leading-7 sm:leading-7 text-slate-300 mt-5">
            {t.mediaText}
          </p>

          {/* Stack : Spotify → Suno → Carrousel YouTube */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 gap-7 md:gap-9">
            {/* Spotify */}
            <div className={`${card} rounded-2xl overflow-hidden`}>
              <div className="h-64 sm:h-72 md:h-[360px] lg:h-[420px]">
                <iframe
                  src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
                  width="100%"
                  height="100%"
                  style={{ display: 'block', border: 0 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify playlist"
                />
              </div>
            </div>

            {/* Suno */}
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              rel="noreferrer"
              className={`${card} ${ring} rounded-2xl grid place-items-center text-base sm:text-lg md:text-xl font-semibold hover:bg-white/10 min-h-40 md:min-h-[360px] lg:min-h-[420px]`}
              aria-label={t.sunoText}
            >
              {t.sunoText}
            </Link>

            {/* Vidéos — carrousel unique */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-200 mb-4">{t.videosTitle}</h3>

              <div className="relative w-full overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  navigation={{ enabled: true }}
                  spaceBetween={18}
                  slidesPerView={1}
                  centeredSlides={false}
                  watchOverflow
                  className="w-full overflow-hidden"
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 18 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2, spaceBetween: 24 },
                  }}
                >
                  <SwiperSlide>
                    <div className={`${card} aspect-video w-full rounded-2xl overflow-hidden`}>
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ display: 'block', border: 0 }}
                        src="https://www.youtube.com/embed/Yg9JtvsR61k"
                        title="Bubblegum Mood"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={`${card} aspect-video w-full rounded-2xl overflow-hidden`}>
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ display: 'block', border: 0 }}
                        src="https://www.youtube.com/embed/-aX3vJ8RZFQ"
                        title="Gravity Falls"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>

                  {/* Ajoute d’autres vidéos en dupliquant ce SwiperSlide */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
