'use client';

import { useLocale } from '@/hooks/useLocale';

export default function PartnersPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    fr: {
      title: 'Partenaires',
      subtitle: "Ils soutiennent Flore d'Esprit",
      content: `Découvrez les partenaires et collaborations qui accompagnent Flore d'Esprit dans son voyage musical et créatif.`,
    },
    en: {
      title: 'Partners',
      subtitle: "They support Flore d'Esprit",
      content: `Discover the partners and collaborations supporting Flore d'Esprit in its musical and creative journey.`,
    },
  }[locale];

  // Styles communs cohérents avec About/Merch/News/Home
  const card =
    'rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';
  const title =
    'text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]';
  const h2 =
    'text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.15)]';

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* motif lumineux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)',
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)',
          }}
        />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className={`${card} p-8 md:p-12 text-center`}>
            <h1 className={title}>{t.title}</h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className={`${card} p-6 md:p-8`}>
            <h2 className={`${h2} mb-3`}>
              {isFr ? 'Présentation' : 'Overview'}
            </h2>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {t.content}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
