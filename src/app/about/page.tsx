'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { useLocale } from '@/hooks/useLocale';

export default function AboutPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? 'À propos' : 'About',
      subtitle: isFr
        ? "Découvre l'univers de Flore d'Esprit"
        : "Discover the world of Flore d'Esprit",
      content: isFr
        ? `Flore d'Esprit est un projet musical mêlant électro, groove et paillettes, visant à libérer les esprits par la danse et la créativité. Derrière chaque morceau se cache une invitation à explorer un monde intérieur vibrant et coloré.`
        : `Flore d'Esprit is a musical project blending electro, groove, and glitter, aiming to free minds through dance and creativity. Behind each track lies an invitation to explore a vibrant and colorful inner world.`,
    }),
    [isFr]
  );

  // Utilitaires de style communs (cohérents avec presskit/merch/news)
  const card = 'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const ring = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const title = 'text-3xl md:text-5xl font-extrabold tracking-tight';
  const h2 = 'text-xl md:text-2xl font-bold tracking-tight';

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Ambiance douce */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }} />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className={`${card} relative overflow-hidden p-8 md:p-12`}>
            <h1 className={`${title} text-cyan-300`}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl">{t.subtitle}</p>

            {/* visuel optionnel (place une image dans public/images/about-hero.jpg) */}
            <div className="hidden md:block absolute -right-6 -bottom-6 w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              {/* Commente la ligne ci-dessous si l'image n'existe pas */}
              <Image src="/images/about-hero.jpg" alt="About visual" fill className="object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-5 items-start">
          <article className={`md:col-span-3 ${card} p-6`}>
            <h2 className={`${h2} text-cyan-200 mb-3`}>{isFr ? 'Le projet' : 'The project'}</h2>
            <p className="text-slate-300 leading-relaxed">{t.content}</p>
          </article>

          <aside className={`md:col-span-2 ${card} p-6`}>
            <h3 className="font-semibold text-slate-100">{isFr ? 'Repères rapides' : 'Quick markers'}</h3>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>
                <span className="text-slate-400 text-xs">{isFr ? 'Styles' : 'Styles'}</span>
                <div className="font-medium">Electro • Groove • Pop</div>
              </li>
              <li>
                <span className="text-slate-400 text-xs">{isFr ? 'Ambiance' : 'Mood'}</span>
                <div className="font-medium">{isFr ? 'Dansant, introspectif, lumineux' : 'Dancey, introspective, luminous'}</div>
              </li>
              <li>
                <span className="text-slate-400 text-xs">{isFr ? 'Vision' : 'Vision'}</span>
                <div className="font-medium">{isFr ? "Libérer les esprits par l'art" : 'Free minds through art'}</div>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* CTA (optionnel) */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className={`${card} p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
            <div>
              <h2 className={`${h2} text-cyan-200`}>{isFr ? 'Envie d\'en savoir plus ?' : 'Want to know more?'}</h2>
              <p className="text-slate-300">{isFr ? 'Consulte le dossier de presse complet.' : 'Check the full press kit.'}</p>
            </div>
            <a href="/presskit" className={`${ring} inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow`}>
              {isFr ? 'Voir le Press Kit' : 'View Press Kit'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
