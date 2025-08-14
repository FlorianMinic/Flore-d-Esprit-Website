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
      ctaMail: 'Écrire un e-mail',
      ctaPress: 'À propos de moi',
      socials: 'Réseaux officiels',
      direct: 'Contact direct',
      directHint: "Réponse rapide, collaborations, booking, presse.",
      directNote:
        "Astuce : écris-moi sur Instagram pour une réponse encore plus rapide.",
      email: 'floredesprit1@gmail.com',
    },
    en: {
      title: 'Contact',
      subtitle: "Get in touch with Flore d'Esprit",
      content:
        'For any collaboration, press, or information requests, feel free to contact me via social media or email.',
      ctaMail: 'Send an email',
      ctaPress: 'About me',
      socials: 'Official socials',
      direct: 'Direct contact',
      directHint: 'Fast reply, collabs, booking, press.',
      directNote:
        'Tip: DM me on Instagram for the fastest reply.',
      email: 'floredesprit1@gmail.com',
    },
  }[locale];

  // Styles (cohérents avec About/PressKit)
  const card =
    'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const title =
    'text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300';
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
        <div className="max-w-5xl mx-auto">
          <div className={`${card} p-8 md:p-12 text-center`}>
            <h1 className={title}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU (hauteurs égales) */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
          {/* Carte Informations */}
          <article className={`${card} flex flex-col h-full p-6 md:p-8`}>
            <h2 className={`${h2} text-cyan-200 mb-3`}>{isFr ? 'Informations' : 'Information'}</h2>
            <p className="text-slate-300 leading-relaxed">{t.content}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${t.email}`}
                className={`${ring} inline-flex items-center gap-2 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow`}
              >
                {t.ctaMail}
              </a>
              <Link
                href="/aboutme"
                className={`${ring} inline-flex items-center gap-2 rounded-full border border-cyan-400/30 hover:border-cyan-300/70 px-5 py-2.5 text-sm font-medium`}
              >
                {t.ctaPress}
              </Link>
            </div>

            {/* Sociaux */}
            <div className="mt-8">
              <h3 className="font-semibold text-slate-200">{t.socials}</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  ['Instagram', 'https://www.instagram.com/floredesprit'],
                  ['YouTube', 'https://www.youtube.com/@flordesprit'],
                  ['Suno', 'https://suno.com/@flordesprit'],
                  ['X', 'https://x.com/'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.07] transition"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* pousse le contenu pour occuper toute la hauteur si besoin */}
            <div className="mt-auto" />
          </article>

          {/* Carte Contact direct (même hauteur) */}
          <aside className={`${card} flex flex-col h-full p-6 md:p-8`}>
            <h2 className={`${h2} text-purple-200`}>{t.direct}</h2>
            <p className="mt-1 text-slate-300">{t.directHint}</p>

            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${t.email}`}
                className={`${ring} rounded-xl bg-white/[0.06] hover:bg-white/[0.1] px-4 py-3 text-center font-semibold`}
              >
                {t.email}
              </a>
              <Link
                href="/aboutme"
                className={`${ring} rounded-xl border border-white/10 hover:border-white/30 px-4 py-3 text-center`}
              >
                {t.ctaPress}
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-400">{t.directNote}</p>

            {/* spacer pour égaliser proprement si contenu plus court */}
            <div className="mt-auto" />
          </aside>
        </div>
      </section>
    </main>
  );
}
