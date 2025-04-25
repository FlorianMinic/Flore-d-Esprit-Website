'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

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

      {/* Liens musicaux */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Écouter la musique' : 'Listen to the music'}
        </h2>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="https://open.spotify.com" target="_blank" className="text-purple-600 hover:underline">
            Spotify →
          </Link>
          <Link href="https://deezer.com" target="_blank" className="text-purple-600 hover:underline">
            Deezer →
          </Link>
          <Link href="https://app.suno.ai/profile/FloreDesprit" target="_blank" className="text-purple-600 hover:underline">
            Suno →
          </Link>
        </div>
      </section>

      {/* Presse */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          {isFr ? 'Presse & Citations' : 'Press & Quotes'}
        </h2>
        <ul className="space-y-3">
          <li>
            <em>
              {isFr
                ? '“Un univers hors-norme où le groove devient poésie cosmique.” — Le Mag Musical'
                : '“An extraordinary world where groove becomes cosmic poetry.” — Le Mag Musical'}
            </em>
          </li>
          <li>
            <em>
              {isFr
                ? '“Flore d\'Esprit casse les codes avec génie.” — IndieWave'
                : '“Flore d\'Esprit brilliantly breaks the codes.” — IndieWave'}
            </em>
          </li>
        </ul>
      </section>
    </div>
  );
}
