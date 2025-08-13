// app/news/[slug]/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';

type LocaleBlock = { title: string; content: string };
type Article = {
  date: string;
  img?: string;
  fr: LocaleBlock;
  en: LocaleBlock;
};

const ARTICLES: Record<string, Article> = {
  bienvenue: {
    date: '2025-08-10',
    img: '/news/sample-3.jpg',
    fr: {
      title: 'Bienvenue sur mon site',
      content:
        `Bienvenue sur l’univers de **Flore d’Esprit**.\n\n` +
        `Entrez dans un monde où sons, couleurs et émotions se mêlent pour créer une expérience unique.\n` +
        `Ici, la créativité humaine rencontre l’intelligence artificielle pour repousser les frontières de l’art : ` +
        `mélodies envoûtantes, visuels vibrants et atmosphère hors du temps.\n\n` +
        `Prenez le temps d’explorer, d’écouter, de regarder… et surtout, de **ressentir**.`
    },
    en: {
      title: 'Welcome to my website',
      content:
        `Welcome to the world of **Flore d’Esprit**.\n\n` +
        `Step into a universe where sound, color, and emotion merge into a unique experience.\n` +
        `Here, human creativity meets artificial intelligence to push the boundaries of art: ` +
        `captivating melodies, vibrant visuals, and a timeless atmosphere.\n\n` +
        `Take your time to explore, listen, watch… and most importantly, **feel**.`
    }
  },
  newsong: {
    date: '2025-08-01',
    img: '/news/sample-1.jpg',
    fr: {
      title: 'Nouvelle chanson en préparation',
      content:
        `Un **aperçu** du prochain single de Flore d’Esprit arrive bientôt.\n\n` +
        `Au programme : de nouvelles textures sonores, un groove plus assumé et une énergie taillée pour la scène.\n` +
        `Reste connecté·e — des extraits seront publiés ici et sur les réseaux !`
    },
    en: {
      title: 'New song in the works',
      content:
        `A **preview** of Flore d’Esprit’s next single is coming soon.\n\n` +
        `Expect fresh sound textures, a bolder groove, and stage-ready energy.\n` +
        `Stay tuned — snippets will drop here and on socials!`
    }
  }
};

// ancien slug -> nouveau
const SLUG_ALIASES: Record<string, string> = {
  'nouvelle-chanson': 'newsong'
};

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const normalizedSlug = SLUG_ALIASES[slug] ?? slug;
  const article = ARTICLES[normalizedSlug];

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">{isFr ? 'Article introuvable' : 'Article not found'}</h1>
        <button
          onClick={() => router.push('/news')}
          className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-500"
        >
          {isFr ? 'Retour aux actualités' : 'Back to news'}
        </button>
      </main>
    );
  }

  const block = isFr ? article.fr : article.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/news" className="text-cyan-400 hover:underline">
          {isFr ? '← Retour aux actualités' : '← Back to news'}
        </Link>

        <h1 className="text-4xl font-extrabold text-cyan-300 mt-4">{block.title}</h1>
        <p className="text-sm text-slate-400 mt-1">
          {new Date(article.date).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {article.img && (
          <div className="relative w-full h-64 md:h-96 my-6">
            <Image
              src={article.img}
              alt={block.title}
              fill
              className="object-cover rounded-xl border border-white/10"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert prose-slate max-w-none">
          <div className="text-lg leading-relaxed whitespace-pre-line">
            {block.content}
          </div>
        </article>
      </div>
    </main>
  );
}
