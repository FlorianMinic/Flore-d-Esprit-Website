'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

export default function CreationAIPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    title: isFr ? 'Créations IA' : 'AI Creations',
    sub: isFr
      ? "Une exploration apaisée de l’imaginaire, où l’IA amplifie l’intention humaine."
      : "A calm exploration where AI amplifies human intent.",
    cta: isFr ? 'Voir le Press Kit' : 'View Press Kit',
    philosophyTitle: isFr ? 'Ma démarche' : 'My approach',
    p1: isFr
      ? "L’IA est un partenaire créatif — jamais un substitut. Je compose, j’écris, je dirige; l’IA accélère l’itération et ouvre des portes stylistiques."
      : "AI is a creative partner—not a replacement. I compose, write, direct; AI speeds iteration and opens stylistic doors.",
    p2: isFr
      ? "Objectif : des œuvres sincères avec des moyens légers, en gardant l’humain au centre."
      : "Goal: sincere works with light tools, keeping the human at the center.",
    bulletsTitle: isFr ? "Concrètement, l’IA m’aide à :" : "In practice, AI helps me:",
    bullets: isFr
      ? [
          "prototyper rapidement (visuels, ambiances)",
          "tester des variations avant un tournage ou un mix",
          "documenter une direction artistique claire",
          "garder l’attention sur l’émotion et le sens",
        ]
      : [
          "rapidly prototype (visuals, moods)",
          "test variations before a shoot or a mix",
          "document a clear artistic direction",
          "stay focused on emotion and meaning",
        ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* HERO */}
      <section className="px-6 md:px-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl">{t.sub}</p>

            <div className="mt-8">
              <Link
                href="/presskit"
                className="inline-flex items-center rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow"
              >
                {t.cta}
              </Link>
            </div>

            {/* IMAGE FACULTATIVE — assure-toi que le fichier existe dans /public/creations/ */}
            <div className="hidden md:block absolute -right-6 -bottom-6 w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              {/* si l'image n'existe pas, commente la ligne ci-dessous pour tester */}
              <Image src="/creations/hero-visual.jpg" alt="AI mood visual" fill className="object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">{t.philosophyTitle}</h2>
            <p className="text-slate-300">{t.p1}</p>
            <p className="mt-3 text-slate-300">{t.p2}</p>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <p className="font-semibold">{t.bulletsTitle}</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-300">
              {t.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
