'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

export default function ContactPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    fr: {
      title: 'Contact',
      subtitle: "Entrer en contact avec Flore d'Esprit",
      content:
        "Pour toute demande de collaboration, de presse ou d'informations, n'hésitez pas à me contacter via les réseaux sociaux ou par e-mail.",
      ctaMail: 'Écrire un e‑mail',
      ctaPress: 'Dossier de presse',
      socials: 'Réseaux officiels',
    },
    en: {
      title: 'Contact',
      subtitle: "Get in touch with Flore d'Esprit",
      content:
        'For any collaboration, press, or information requests, feel free to contact me via social media or email.',
      ctaMail: 'Send an email',
      ctaPress: 'Press kit',
      socials: 'Official socials',
    },
  }[locale];

  // Styles communs (dark + glass, aligné avec About/PressKit/Partners)
  const card = 'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const title = 'text-3xl md:text-5xl font-extrabold tracking-tight';
  const h2 = 'text-xl md:text-2xl font-bold tracking-tight';
  const ring =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* halos doux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }}
        />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className={`${card} p-8 md:p-12 text-center`}>
            <h1 className={`${title} text-purple-300`}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-5 items-start">
          <article className={`md:col-span-3 ${card} p-6 md:p-8`}>
            <h2 className={`${h2} text-purple-200 mb-3`}>{isFr ? 'Informations' : 'Information'}</h2>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">{t.content}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:floredesprit1@gmail.com"
                className={`${ring} inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow`}
              >
                {t.ctaMail}
              </a>
              <Link
                href="/presskit"
                className={`${ring} inline-flex items-center gap-2 rounded-full border border-cyan-400/30 hover:border-cyan-300/70 px-5 py-2.5 text-sm font-medium`}
              >
                {t.ctaPress}
              </Link>
            </div>
          </article>

          <aside className={`md:col-span-2 ${card} p-6 md:p-8`}>
            <h3 className="font-semibold text-slate-200">{t.socials}</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>
                <a href="https://www.instagram.com/floredesprit" target="_blank" className="underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@flordesprit" target="_blank" className="underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300">YouTube</a>
              </li>
              <li>
                <a href="https://suno.com/@flordesprit" target="_blank" className="underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300">Suno</a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" className="underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300">X</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
