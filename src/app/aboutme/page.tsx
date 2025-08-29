'use client';

import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { useMemo } from 'react';

export default function AboutMePage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? 'À propos de moi' : 'About me',
      subtitle: isFr
        ? "Bienvenue dans l’univers de Flore d’Esprit : biographie, photos HD, logos, liens d’écoute, vidéos, documents techniques et contacts."
        : "Welcome to Flore d’Esprit’s world: bio, HD photos, logos, listening links, videos, tech docs and contacts.",
      sections: {
        quickFacts: isFr ? 'Infos clés' : 'Quick Facts',
        bio: isFr ? 'Biographie' : 'Biography',
        listen: isFr ? 'Écouter la musique' : 'Listen to the music',
        photos: isFr ? 'Sélection de photos' : 'Photo Selection',
        contact: isFr ? 'Contact & Booking' : 'Contact & Booking',
      },
      // Biographie FR/EN (paragraphes)
      bioParagraphs: isFr
        ? [
            "Je suis Flore d’Esprit, artiste bordelais mêlant funk, rock et électro dans un univers en perpétuelle évolution. La musique fait partie de moi depuis avant ma naissance – ma mère me faisait déjà écouter Frankie Goes to Hollywood alors que je n’étais encore qu’un bébé dans son ventre. Très jeune, j’ai reçu mon premier synthé, puis j’ai appris le piano, le chant, un peu de danse et la guitare.",
            "En 2002, alors que je traversais une période de doute, j’ai fait un rêve si réaliste où je me voyais sur scène. Ce souvenir, associé aux mots de ma prof de musique au collège – « Tu es fait pour la musique » – n’a jamais cessé de résonner en moi.",
            "J’ai brièvement joué dans un groupe amateur, Everlast, avec lequel j’ai connu mes premières scènes et un petit succès en 2008-2009. Plus récemment, j’ai participé à plusieurs concours communautaires sur Suno, atteignant régulièrement le Top 5 ou 6 face à une forte concurrence.",
            "Mon style est funky et énergique, parfois plus rock, toujours ouvert à l’expérimentation. Comme David Bowie, j’aime explorer différentes « phases musicales » et créer des sons novateurs.",
            "Aujourd’hui, je prépare un nouvel album que je rêve de partager à grande échelle. Je veux aussi m’entourer de créateurs passionnés pour collaborer, échanger et grandir ensemble, et ainsi offrir au public des expériences musicales uniques.",
          ]
        : [
            "I’m Flore d’Esprit, an artist from Bordeaux blending funk, rock and electronic music in a constantly evolving universe. Music has been part of me since before I was born — my mother was already playing Frankie Goes to Hollywood to me when I was still a baby in her belly. At a very young age I got my first synth, then learned piano, vocals, a bit of dance and guitar.",
            "In 2002, while going through a period of doubt, I had a dream so realistic that I saw myself on stage. That memory, together with my middle-school music teacher’s words — “You’re made for music” — has kept resonating ever since.",
            "I briefly played in an amateur band called Everlast, which brought my first shows and a bit of success in 2008–2009. More recently, I took part in several community contests on Suno, often reaching the Top 5–6 against strong competition.",
            "My style is funky and energetic, sometimes more rock, and always open to experimentation. Like David Bowie, I love exploring different “musical phases” and crafting innovative sounds.",
            "Today I’m preparing a new album that I dream of sharing widely. I also want to surround myself with passionate creators to collaborate, exchange and grow together — to offer audiences truly unique musical experiences.",
          ],
    }),
    [isFr]
  );

  // Styles utilitaires
  const card =
    'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const heading = 'text-2xl md:text-3xl font-bold tracking-tight';
  const subHeading = 'text-sm uppercase tracking-wider text-slate-300/80';

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
            genre: ['Electro-pop', 'Rock', 'Funk'],
            foundingLocation: 'Bordeaux, France',
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
              <div
                className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }}
              />
              <div
                className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }}
              />
            </div>

            <h1 className={`${heading} text-cyan-300`}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 flex items-end justify-between">
            <h2 className={`${heading} text-cyan-200`}>{t.sections.quickFacts}</h2>
            <span className={subHeading}>{isFr ? 'aperçu' : 'overview'}</span>
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
            <div className="space-y-4 text-slate-300 leading-relaxed">
              {t.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
                className="rounded-xl"
              />
            </div>
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              className={`${card} grid place-items-center p-6 hover:bg-white/[0.07]`}
            >
              <span className="text-lg font-semibold">{isFr ? 'Écouter sur Suno' : 'Listen on Suno'}</span>
            </Link>
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
              <p className="text-slate-300 mt-1">
                {isFr ? 'Pour interview, chroniques, diffusions ou booking.' : 'For interviews, reviews, airplay or booking.'}
              </p>
            </div>
            <a
              href="mailto:floredesprit1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow"
            >
              floredesprit1@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
