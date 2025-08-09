'use client';

import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { useMemo } from 'react';

export default function PressKitPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? 'Dossier de Presse' : 'Press Kit',
      subtitle: isFr
        ? "Bienvenue dans l’univers de Flore d’Esprit : biographie, photos HD, logos, liens d’écoute, vidéos, documents techniques et contacts presse."
        : "Welcome to Flore d’Esprit’s universe: bio, HD photos, logos, listening links, videos, tech docs and press contacts.",
      sections: {
        quickFacts: isFr ? 'Infos clés' : 'Quick Facts',
        bio: isFr ? 'Biographie' : 'Biography',
        listen: isFr ? 'Écouter la musique' : 'Listen to the music',
        downloads: isFr ? 'Médias à télécharger' : 'Downloadable Media',
        photos: isFr ? 'Sélection de photos' : 'Photo Selection',
        contact: isFr ? 'Contact & Booking' : 'Contact & Booking',
      },
    }),
    [isFr]
  );

  // Styles utilitaires (cohérents avec tes autres pages : glass + gradient + rings)
  const card =
    'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const heading = 'text-2xl md:text-3xl font-bold tracking-tight';
  const subHeading = 'text-sm uppercase tracking-wider text-slate-300/80';
  const ringable =
    'transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* SEO JSON-LD */}
      <Script
        id="jsonld-artist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MusicGroup',
            name: 'Flore d’Esprit',
            genre: ['Electro-pop', 'Dark pop', 'Funk'],
            foundingLocation: 'Paris, France',
            image: ['/press/hero.jpg', '/press/photos/photo-1.jpg', '/press/photos/photo-2.jpg'],
            url: 'https://flore-desprit.com',
            sameAs: [
              'https://open.spotify.com/artist/',
              'https://www.youtube.com/@flordesprit',
              'https://www.instagram.com/floredesprit',
              'https://suno.com/@flordesprit',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'Press/Media',
                email: 'floredesprit1@gmail.com',
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className={`${card} relative overflow-hidden p-8 md:p-12`}> 
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{
                background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)'
              }} />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{
                background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)'
              }} />
            </div>

            <h1 className={`${heading} text-cyan-300`}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl">{t.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:floredesprit1@gmail.com"
                className={`${ringable} inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow`}
              >
                {isFr ? 'Contacter la presse' : 'Contact press'}
              </a>
              <Link
                href="/downloads/press-release.pdf"
                target="_blank"
                className={`${ringable} inline-flex items-center gap-2 rounded-full border border-cyan-400/30 hover:border-cyan-300/70 px-5 py-2.5 text-sm font-medium`}
              >
                {isFr ? 'Télécharger le dossier (PDF)' : 'Download press kit (PDF)'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 flex items-end justify-between">
            <h2 className={`${heading} text-cyan-200`}>{t.sections.quickFacts}</h2>
            <span className={`${subHeading}`}>{isFr ? 'aperçu' : 'overview'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              [isFr ? 'Genre' : 'Genre', 'Electro-pop • Rock • Funk'],
              [isFr ? 'Ville' : 'City', 'Bordeaux, France'],
              [isFr ? 'Années actives' : 'Years active', '2024 – present'],
              [isFr ? 'Pour les médias' : 'For media', isFr ? 'Diffusion radio/web OK' : 'Radio/web friendly'],
            ].map(([k, v]) => (
              <div key={k as string} className={`${card} p-4`}> 
                <p className="text-xs text-slate-400">{k as string}</p>
                <p className="mt-1 font-medium">{v as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-5 items-start">
          <div className={`lg:col-span-3 ${card} p-6`}>
            <h2 className={`${heading} text-cyan-200 mb-3`}>{t.sections.bio}</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                {isFr
                  ? 'Flore d’Esprit mêle groove, textures électroniques et image néo‑pop pour des titres dansants et introspectifs.'
                  : 'Flore d’Esprit blends groove, electronic textures and neo‑pop imagery into danceable, introspective tracks.'}
              </p>
              <p>
                {isFr
                  ? 'Le projet explore liberté d’expression, puissance collective et une pointe de surréalisme cosmique.'
                  : 'The project explores free expression, collective power and a hint of cosmic surrealism.'}
              </p>
            </div>
          </div>
          <div className={`lg:col-span-2 ${card} overflow-hidden`}> 
            <div className="relative w-full aspect-[4/5]">
              <Image src="/images/FlorePortrait.png" alt="Flore d’Esprit" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* LISTEN */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${heading} text-cyan-200 mb-4`}>{t.sections.listen}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${card} p-4`}>
              <iframe
                src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className={`${ringable} rounded-xl`}
              />
            </div>
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              className={`${card} ${ringable} grid place-items-center p-6 hover:bg-white/[0.07]`}
            >
              <span className="text-lg font-semibold">{isFr ? 'Écouter sur Suno' : 'Listen on Suno'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${heading} text-cyan-200 mb-4`}>{t.sections.downloads}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [isFr ? 'Dossier de presse (PDF)' : 'Press Release (PDF)', '/downloads/press-release.pdf'],
              [isFr ? 'Biographie (PDF)' : 'Biography (PDF)', '/downloads/biographie.pdf'],
              [isFr ? 'Photos HD (ZIP)' : 'HD Photos (ZIP)', '/downloads/photos.zip'],
            ].map(([label, href]) => (
              <Link
                key={href as string}
                href={href as string}
                target="_blank"
                className={`${card} ${ringable} p-4 hover:bg-white/[0.07]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{label as string}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-70">
                    <path fillRule="evenodd" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-5.25a.75.75 0 01.75.75v5.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V7.5A.75.75 0 0112 6.75z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${heading} text-cyan-200 mb-4`}>{t.sections.photos}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['/images/FlorePortrait.png', '/images/PosingPhoto.png', '/images/Portrait2.png'].map((src, i) => (
              <div key={src} className={`${card} overflow-hidden`}> 
                <div className="relative w-full aspect-[4/5]">
                  <Image src={src} alt={`Flore d’Esprit — photo ${i + 1}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className={`${card} p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}> 
            <div>
              <h2 className={`${heading} text-cyan-200`}>{t.sections.contact}</h2>
              <p className="text-slate-300 mt-1">{isFr ? 'Pour interview, chroniques, diffusions ou booking.' : 'For interviews, reviews, airplay or booking.'}</p>
            </div>
            <a
              href="mailto:floredesprit1@gmail.com"
              className={`${ringable} inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow`}
            >
              floredesprit1@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
