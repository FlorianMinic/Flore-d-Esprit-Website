'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Complete press kit page with Spotify and YouTube embeds similar to HomePage
export default function PressKitPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  return (
    <div className="min-h-screen px-6 py-20 md:px-20 bg-white text-black">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-purple-700">
        {isFr ? 'Dossier de Presse' : 'Press Kit'}
      </h1>

      {/* Intro */}
      <section className="mb-12 max-w-4xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          {isFr ? (
            <>Bienvenue dans l’univers de <strong>Flore d’Esprit</strong>. Ce dossier vous offre un aperçu complet de l’artiste, son univers et sa musique.</>
          ) : (
            <>Welcome to the world of <strong>Flore d’Esprit</strong>. This press kit gives you a complete overview of the artist, their universe and music.</>
          )}
        </p>
      </section>

      {/* Biographie */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Biographie' : 'Biography'}
        </h2>
        <p className="text-base leading-relaxed mb-4">
          {isFr
            ? "Flore d’Esprit est un projet musical alliant groove, paillettes et liberté créative. Son univers mêle sons électro-funk déjantés, visuels éclatants et messages profonds."
            : "Flore d’Esprit is a musical project combining groove, glitter and creative freedom. The universe blends wild electro-funk sounds, vibrant visuals and meaningful messages."}
        </p>
        <p className="text-base leading-relaxed">
          {isFr
            ? "À travers ses compositions, Flore d’Esprit explore des thèmes comme la liberté d’expression, la puissance du collectif et l’imaginaire cosmique. Chaque morceau est une invitation à danser, à réfléchir et à rêver."
            : "Through compositions, Flore d’Esprit explores themes such as freedom of expression, collective power and cosmic imagination. Each track is an invitation to dance, reflect and dream."}
        </p>
      </section>

      {/* Médias téléchargeables */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Médias à télécharger' : 'Downloadable Media'}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/downloads/press-release.pdf" target="_blank" className="text-purple-700 underline">
              {isFr ? 'Dossier de presse PDF' : 'Press release PDF'}
            </Link>
          </li>
          <li>
            <Link href="/downloads/biographie.pdf" target="_blank" className="text-purple-700 underline">
              {isFr ? 'Biographie longue PDF' : 'Long biography PDF'}
            </Link>
          </li>
          <li>
            <Link href="/downloads/photos.zip" target="_blank" className="text-purple-700 underline">
              {isFr ? 'Photos HD à télécharger' : 'Download HD Photos'}
            </Link>
          </li>
          <li>
            <Link href="/downloads/logo-flore.zip" target="_blank" className="text-purple-700 underline">
              {isFr ? 'Logos et éléments graphiques' : 'Logos and graphic elements'}
            </Link>
          </li>
        </ul>
      </section>

      {/* Musique */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Écouter la musique' : 'Listen to the music'}
        </h2>
        <p className="text-lg leading-relaxed mb-4 max-w-2xl mx-auto text-center">
          {isFr
            ? 'Plonge dans l’univers musical déjanté de Flore d’Esprit. Sons créés avec passion, inspirés par le groove, les paillettes et une pincée de folie cosmique.'
            : 'Dive into the eccentric musical universe of Flore d’Esprit. Sounds created with passion, inspired by groove, glitter, and a touch of cosmic madness.'}
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
          <iframe
            src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
            width="300"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>

          <a
            href="https://suno.com/@flordesprit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[300px] h-[380px] rounded-xl bg-purple-200 flex items-center justify-center text-purple-900 font-bold text-xl shadow-lg hover:scale-105 transition"
          >
            {isFr ? 'Écouter sur Suno →' : 'Listen on Suno →'}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <iframe
            src="https://open.spotify.com/embed/track/48dt9KbbgYN8JncxA0yKUV"
            width="300"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/7bP7Gmpfe6hLpW02dXJVuL"
            width="300"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Vidéos */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Vidéos' : 'Videos'}
        </h2>
        <p className="text-lg leading-relaxed mb-4 max-w-2xl mx-auto text-center">
          {isFr
            ? 'Découvre l’univers visuel de Flore d’Esprit à travers ces vidéos captivantes.'
            : 'Discover Flore d’Esprit’s visual universe through these captivating videos.'}
        </p>
        <div className="w-full max-w-4xl mx-auto">
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
                className="rounded-xl shadow-lg"
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
                className="rounded-xl shadow-lg"
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>


      {/* Contact / Booking */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Contact & Booking' : 'Contact & Booking'}
        </h2>
        <p className="leading-relaxed mb-2">
          {isFr
            ? "Pour toute demande d'interview, de booking ou d'information supplémentaire, veuillez contacter :"
            : 'For interviews, bookings or additional information, please contact:'}
        </p>
        {/* Lien mailto qui ouvre la fenêtre d'envoi d'e‑mail */}
        <a href="mailto:floredesprit1@gmail.com" className="mb-1 font-medium text-purple-600 hover:underline block">
          floredesprit1@gmail.com
        </a>
        {/* … reste du contenu … */}
      </section>
    </div>
  );
}
