'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

type CTA = { href: string; label: string };

type ToolBlockProps = {
  title: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  img?: { src?: string; alt?: string };
  cta?: CTA; // optional
};

function ToolBlock(props: ToolBlockProps) {
  const { title, subtitle, body, bullets, cta, img } = props;
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
      <div className="grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]">
            {title}
          </h3>
          {subtitle && <p className="mt-1 text-slate-300">{subtitle}</p>}
          <p className="mt-4 text-slate-200 leading-relaxed whitespace-pre-line">{body}</p>

          {bullets?.length ? (
            <ul className="mt-4 space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400/80 shrink-0" />
                  <span className="text-slate-300">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {cta ? (
            <div className="mt-5">
              <Link
                href={cta.href}
                className="inline-flex items-center rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 text-sm font-medium shadow"
              >
                {cta.label}
              </Link>
            </div>
          ) : null}
        </div>
        <div className="md:col-span-2 order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={img?.src || '/creations/tools/placeholder.jpg'}
              alt={img?.alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CreationAIPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = {
    title: isFr ? 'Backstage – Création IA' : 'Backstage – AI Creation',
    sub: isFr
      ? "Dans ces coulisses, j'explique comment j'utilise chaque outil pour façonner mes morceaux. L'IA accélère, j'oriente."
      : 'Here I show how each tool fits my process. AI accelerates; I direct.',
    cta: isFr ? 'Voir le Press Kit' : 'View Press Kit',
    philosophyTitle: isFr ? 'Ma démarche' : 'My approach',
    p1: isFr
      ? "Je traite l’IA comme un assistant artistique. Les idées, la cohérence et l’émotion restent humaines. J’itère vite, je documente, je garde la vision."
      : 'I treat AI as an artistic assistant. Ideas, cohesion and emotion remain human. I iterate fast, document, and keep the vision steady.',
    p2: isFr
      ? 'Objectif : composer efficacement sans perdre la poésie du geste — avec des moyens légers et transparents.'
      : 'Goal: create efficiently without losing the poetry of the craft — with light, transparent means.',
    bulletsTitle: isFr ? "Concrètement, l’IA m’aide à :" : 'In practice, AI helps me:',
    bullets: isFr
      ? [
          'prototyper des ambiances et des hooks',
          'générer des variations pour comparer vite',
          'documenter une intention artistique claire',
          "libérer du temps pour l'interprétation",
        ]
      : [
          'prototype moods and hooks',
          'generate variations to compare fast',
          'document a clear artistic intent',
          'free time for performance and feel',
        ],
  };

  const tools = [
    {
      key: 'suno',
      title: isFr ? 'Suno AI – Idées mélodiques & maquettes' : 'Suno AI – Melodic ideas & drafts',
      subtitle: isFr ? 'Point de départ chanté, hook et structure.' : 'Sung starting point, hook and structure.',
      body: isFr
        ? `Je lance des prompts courts pour tester des couleurs: tempo, ambiance, instruments clés.\nQuand un hook émerge, je note la top-line et j’analyse la prosodie.\nJe récupère les stems utiles pour les re-sampler ensuite.`
        : `I start with short prompts to test colors: tempo, vibe, key instruments.\nWhen a hook emerges, I capture the topline and study prosody.\nI export useful stems to re-sample later.`,
      bullets: isFr
        ? [
            'Workflow: prompt bref → 2-3 variations → sélection',
            'Critères: émotion, mémorisation, chantabilité',
            'Sortie: hook vocal + idée de progression',
          ]
        : [
            'Flow: short prompt → 2-3 variations → pick',
            'Criteria: emotion, memorability, singability',
            'Output: vocal hook + progression idea',
          ],
      img: { src: '/creations/tools/suno.jpg', alt: 'Suno AI preview' },
    },
    {
      key: 'midjourney',
      title: isFr ? 'Midjourney – Iconographie & covers' : 'Midjourney – Artwork & covers',
      subtitle: isFr ? 'Moodboards, affiche, déclinaisons.' : 'Moodboards, poster, variants.',
      body: isFr
        ? `Je pars d’un lexique visuel précis (couleurs, matières, époque).\nLes images retenues guident la DA des clips et des visuels sociaux.`
        : `I start from a tight visual lexicon (colors, materials, era).\nSelected images guide art direction for videos and socials.`,
      bullets: isFr
        ? ['Prompts: style + palette + focale', 'Séries: 4 → upscale → variantes', 'Export: square + portrait + widescreen']
        : ['Prompts: style + palette + focal length', 'Series: 4 → upscale → variants', 'Export: square + portrait + widescreen'],
      img: { src: '/creations/tools/midjourney.jpg', alt: 'Midjourney artworks' },
    },
    {
      key: 'kling',
      title: isFr ? 'Kling AI – Clips génératifs' : 'Kling AI – Generative clips',
      subtitle: isFr ? 'Plans courts, effets, surréalisme maîtrisé.' : 'Short shots, effects, controlled surrealism.',
      body: isFr
        ? `Je crée des plans courts synchronisables: 3–6s par cut.\nJe contrôle la cohérence via un prompt récurrent et des seeds stables.`
        : `I create short, sync-friendly shots: 3–6s per cut.\nI keep coherence using a recurring prompt and stable seeds.`,
      bullets: isFr
        ? ['Storyboard mesure par mesure', 'Seed verrouillée pour les reprises', 'Rendu: 1080p → upscale si besoin']
        : ['Bar-by-bar storyboard', 'Locked seed for reprises', 'Render: 1080p → upscale if needed'],
      img: { src: '/creations/tools/kling.jpg', alt: 'Kling AI shots' },
    },
    {
      key: 'veo3',
      title: isFr ? 'Veo 3 – Narration vidéo' : 'Veo 3 – Video narration',
      subtitle: isFr ? 'Cadrages ciné, transitions propres.' : 'Cinematic framing, clean transitions.',
      body: isFr
        ? `J’emploie VEO 3 pour des plans narratifs plus longs.\nJe précise les mouvements (pan/tilt), la focale, l’heure, la météo.`
        : `I use VEO 3 for longer narrative shots.\nI specify camera moves (pan/tilt), focal length, time of day, weather.`,
      bullets: isFr
        ? ['Durées: 6–12s', 'Indications: caméra + lumière + décor', 'But: continuité visuelle entre séquences']
        : ['Durations: 6–12s', 'Specs: camera + light + set', 'Goal: visual continuity between sequences'],
      img: { src: '/creations/tools/veo3.jpg', alt: 'Veo 3 sequence' },
    },
    {
      key: 'davinci',
      title: isFr ? 'DaVinci Resolve – Montage vidéo' : 'DaVinci Resolve – Video editing',
      subtitle: isFr ? 'Assemblage, rythme, corrections couleur.' : 'Assembly, pacing, color grading.',
      body: isFr
        ? `Dans DaVinci Resolve, j’organise la timeline selon le rythme du morceau.\nJe synchronise les coupes sur les temps forts, ajuste la colorimétrie pour harmoniser les plans et applique des effets légers pour renforcer l’ambiance.`
        : `In DaVinci Resolve, I arrange the timeline to match the track’s pacing.\nI sync cuts on strong beats, adjust color grading for consistency, and add subtle effects to enhance the mood.`,
      bullets: isFr
        ? ['Montage en rythme avec la musique', 'Corrections colorimétriques cohérentes', 'Transitions fluides et adaptées au style']
        : ['Editing in sync with music', 'Consistent color grading', 'Smooth transitions matching the style'],
      img: { src: '/creations/tools/davinci.jpg', alt: 'DaVinci Resolve editing' },
    },
    {
      key: 'fl',
      title: isFr ? 'FL Studio – Assemblage & mix' : 'FL Studio – Arrangement & mix',
      subtitle: isFr ? 'Le cœur du morceau, humain, précis.' : 'The human, precise core of the track.',
      body: isFr
        ? `Tout converge dans le DAW: topline, textures, drums.\nJe nettoie, j’accorde, je compresse légèrement et j’automatise l’énergie des sections.`
        : `Everything converges in the DAW: topline, textures, drums.\nI clean up, tune, lightly compress and automate section energy.`,
      bullets: isFr
        ? ['Routing par bus (vox, drums, FX)', 'Gain staging -12 dBFS headroom', 'Limiter en sortie uniquement au master']
        : ['Bus routing (vox, drums, FX)', 'Gain staging -12 dBFS headroom', 'Limiter only on the final master'],
      img: { src: '/creations/tools/fl-studio.jpg', alt: 'FL Studio session' },
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="px-6 md:px-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]">
              {t.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl">{t.sub}</p>
            <div className="mt-8">
              <Link
                href="/presskit"
                className="inline-flex items-center rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow"
              >
                {t.cta}
              </Link>
            </div>
            <div className="hidden md:block absolute -right-6 -bottom-6 w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/creations/hero-visual.jpg" alt="AI mood visual" fill className="object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]">
              {t.philosophyTitle}
            </h2>
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

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {tools.map(({ key: k, ...rest }) => (
            <ToolBlock key={k} {...rest} />
          ))}
        </div>
      </section>
    </main>
  );
}
