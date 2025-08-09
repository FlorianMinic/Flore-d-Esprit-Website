'use client';

import { HeroSection } from '@/components/ui/HeroSection';
import { FaArrowDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useLocale } from '@/hooks/useLocale';

export default function HomePage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    fr: {
      aiTitle: "À propos de l’utilisation de l’IA dans mon art",
      aiP1:
        "Flore d’Esprit est un artiste virtuel né d’une collaboration entre moi, être humain, et des outils d’intelligence artificielle.",
      aiP2:
        "L’IA n’est pas là pour remplacer la créativité humaine mais pour l’amplifier : elle m’aide à explorer, prototyper et pousser des idées plus loin.",
      aiP3:
        "Derrière chaque image, chanson ou texte : mes choix, ma direction artistique et mes émotions. L’IA est un partenaire, pas un substitut.",
      aiP4:
        "Mon intention n’est pas de supprimer des métiers, mais d’ouvrir de nouvelles voies, d’inventer d’autres formats et de collaborer avec des artistes humains.",
      aiBulletsTitle: "Concrètement, l’IA m’aide à :",
      aiBullets: [
        "itérer plus vite (maquettes, concepts, variations) pour mieux décider",
        "expérimenter des styles visuels/sonores inédits",
        "rendre accessible une vision artistique avec peu de moyens",
        "rester focalisé sur l’écriture, la direction et l’émotion"
      ],

      universTitle: "L’univers de Flore d’Esprit",
      universText: `Flore d’Esprit, c’est une explosion de sons, de couleurs et d’émotions.
        Inspiré par les paillettes, les grooves psychédéliques et une liberté totale,
        il casse les codes pour faire danser les esprits autant que les corps.

        Derrière chaque beat se cache un monde à explorer. Entre électro déjantée et hymnes funky,
        Flore d'Esprit t’invite à lâcher prise et à entrer dans sa bulle pleine de créativité.`,
      musiqueTitle: "Le son de Flore d’Esprit",
      musiqueText: `Plonge dans l’univers musical déjanté de Flore d’Esprit.
        Des sons créés avec passion, inspirés par le groove, les paillettes et une pincée de folie cosmique.`,
      playlistTitle: "Playlist officielle",
      playlistText: "Écoute les derniers sons de Flore d’Esprit sur ta plateforme préférée :",
      sunoText: "Écouter sur Suno →",
      videosTitle: "Vidéos",
      videosText: "Découvre l'univers visuel de Flore d’Esprit à travers ces vidéos captivantes.",
    },
    en: {
      aiTitle: "About AI in my work",
      aiP1:
        "Flore d’Esprit is a virtual artist born from a collaboration between me, a human creator, and AI tools.",
      aiP2:
        "AI doesn’t replace human creativity — it amplifies it. It helps me explore, prototype and push ideas further.",
      aiP3:
        "Behind every image, song or text are my choices, direction and emotions. AI is a partner, not a replacement.",
      aiP4:
        "My goal isn’t to remove jobs, but to open new paths, invent new formats and collaborate with human artists.",
      aiBulletsTitle: "In practice, AI helps me to:",
      aiBullets: [
        "iterate faster (drafts, concepts, variations) to decide better",
        "experiment with new visual/sonic styles",
        "make an artistic vision possible with modest resources",
        "stay focused on writing, direction and emotion"
      ],

      universTitle: "The world of Flore d'Esprit",
      universText: `Flore d'Esprit is an explosion of sound, color, and emotion.
        Inspired by glitter, psychedelic grooves, and total freedom,
        it breaks the rules to make both your body and mind dance.

        Behind every beat lies a world to explore. Between wild electro and funky anthems,
        Flore d'Esprit invites you to let go and step into a bubble of creativity.`,
      musiqueTitle: "The sound of Flore d'Esprit",
      musiqueText: `Dive into the eccentric musical universe of Flore d'Esprit.
        Sounds created with passion, inspired by groove, glitter, and a touch of cosmic madness.`,
      playlistTitle: "Official Playlist",
      playlistText: "Listen to the latest sounds from Flore d'Esprit on your favorite platform:",
      sunoText: "Listen on Suno →",
      videosTitle: "Videos",
      videosText: "Discover Flore d'Esprit’s visual universe through these captivating videos.",
    },
  }[locale];

  return (
    <div className="scroll-smooth">
      <HeroSection />

      {/* SECTION - AI Philosophy (volet plein écran + flèche vers #univers) */}
      <section
        id="ai"
        className="min-h-screen bg-blue-50 dark:bg-slate-900/40 text-black dark:text-white px-6 md:px-20 flex flex-col items-center justify-center text-center relative"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#003049' }}
          >
            {t.aiTitle}
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <p>{t.aiP1}</p>
            <p>{t.aiP2}</p>
            <p>{t.aiP3}</p>
            <p>{t.aiP4}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200/70 dark:border-blue-400/30 bg-white/80 dark:bg-white/5 p-5 text-left md:text-left">
            <p className="font-semibold mb-2" style={{ color: '#003049' }}>
              {t.aiBulletsTitle}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-200">
              {t.aiBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flèche vers le volet suivant */}
        <a
          href="#univers"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-300 text-blue-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to universe"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Univers */}
      <section
        id="univers"
        className="min-h-screen bg-white text-black px-6 md:px-20 flex items-center justify-center text-center relative"
      >
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#003049' }}
          >
            {t.universTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed whitespace-pre-line text-gray-700">
            {t.universText}
          </p>
        </div>

        <a
          href="#musique"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-300 text-blue-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to music"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Musique */}
      <section
        id="musique"
        className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 text-black px-6 py-20 md:px-20 text-center flex flex-col items-center justify-center relative"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: '#003049' }}
        >
          {t.musiqueTitle}
        </h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10 whitespace-pre-line text-gray-700">
          {t.musiqueText}
        </p>

        <audio controls className="mb-8 w-full max-w-md shadow-lg rounded-lg bg-white/70">
          <source src="/audio/extrait.mp3" type="audio/mpeg" />
          {isFr ? "Ton navigateur ne supporte pas la lecture audio." : "Your browser does not support audio playback."}
        </audio>

        <a
          href="#playlist"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-300 text-blue-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to playlist"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Playlist */}
      <section
        id="playlist"
        className="min-h-screen bg-white text-black px-6 py-20 md:px-20 text-center flex flex-col items-center justify-center relative"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: '#003049' }}
        >
          {t.playlistTitle}
        </h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10 text-gray-700">
          {t.playlistText}
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <iframe
            src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
            width="300"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg bg-white"
          ></iframe>

          <a
            href="https://suno.com/@flordesprit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[300px] h-[380px] rounded-xl bg-blue-200 flex items-center justify-center text-blue-900 font-bold text-xl shadow-lg hover:scale-105 transition"
          >
            {t.sunoText}
          </a>
        </div>

        <a
          href="#videos"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-300 text-blue-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce mt-16"
          aria-label="Scroll to videos"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Vidéos */}
      <section
        id="videos"
        className="min-h-screen bg-blue-100 text-black px-6 py-20 md:px-20 text-center flex flex-col items-center justify-center relative"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: '#003049' }}
        >
          {t.videosTitle}
        </h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10 text-gray-700">
          {t.videosText}
        </p>

        <div className="w-full max-w-4xl">
          <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={1} className="w-full">
            <SwiperSlide>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Yg9JtvsR61k"
                title="Vidéo Bubblegum Mood"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg bg-white"
              ></iframe>
            </SwiperSlide>

            <SwiperSlide>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/-aX3vJ8RZFQ"
                title="Vidéo Gravity Falls"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg bg-white"
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
