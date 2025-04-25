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

  const t = {
    fr: {
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

      {/* SECTION - Univers */}
      <section
        id="univers"
        className="min-h-screen bg-white text-black px-6 md:px-20 flex items-center justify-center text-center relative"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.universTitle}</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed whitespace-pre-line">
            {t.universText}
          </p>
        </div>

        <a
          href="#musique"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-purple-300 text-purple-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to music"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Musique */}
      <section
        id="musique"
        className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-black px-6 py-20 md:px-20 text-center flex flex-col items-center justify-center relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.musiqueTitle}</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10 whitespace-pre-line">
          {t.musiqueText}
        </p>

        <audio controls className="mb-8 w-full max-w-md shadow-lg rounded-lg">
          <source src="/audio/extrait.mp3" type="audio/mpeg" />
          {locale === 'fr' ? "Ton navigateur ne supporte pas la lecture audio." : "Your browser does not support audio playback."}
        </audio>

        <a
          href="#playlist"
          className="w-14 h-14 bg-purple-300 text-purple-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce absolute bottom-6 left-1/2 transform -translate-x-1/2"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.playlistTitle}</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">{t.playlistText}</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <iframe
            src="https://open.spotify.com/embed/playlist/INSERT_SPOTIFY_PLAYLIST_ID"
            width="300"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>

          <a
            href="https://app.suno.ai/profile/FloreDesprit"
            target="_blank"
            className="w-[300px] h-[380px] rounded-xl bg-purple-200 flex items-center justify-center text-purple-900 font-bold text-xl shadow-lg hover:scale-105 transition"
          >
            {t.sunoText}
          </a>
        </div>

        <a
          href="#videos"
          className="w-14 h-14 bg-purple-300 text-purple-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce mt-16"
          aria-label="Scroll to videos"
        >
          <FaArrowDown />
        </a>
      </section>

      {/* SECTION - Vidéos */}
      <section
        id="videos"
        className="min-h-screen bg-purple-100 text-black px-6 py-20 md:px-20 text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.videosTitle}</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">{t.videosText}</p>

        <div className="w-full max-w-4xl">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            <SwiperSlide>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Vidéo 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            </SwiperSlide>

            <SwiperSlide>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_2"
                title="Vidéo 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
