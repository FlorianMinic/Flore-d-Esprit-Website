'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { useLocale } from '@/hooks/useLocale';

export default function NewsPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? 'Actualités' : 'News',
      subtitle: isFr
        ? "Reste informé des dernières nouvelles de Flore d'Esprit"
        : "Stay updated with the latest news from Flore d'Esprit",
      comingSoon: isFr
        ? "Les actualités arrivent bientôt, reste à l'écoute !"
        : 'News is coming soon, stay tuned!',
      latest: isFr ? 'Derniers articles' : 'Latest posts',
      readMore: isFr ? 'Lire la suite' : 'Read more',
    }),
    [isFr]
  );

  const posts = [
    {
      slug: 'bienvenue',
      title: isFr ? 'Bienvenue sur mon site' : 'Welcome to my website',
      date: '2025-08-10',
      excerpt: isFr
        ? "Je suis ravi de vous accueillir ici ! Découvrez mon univers et restez connectés pour suivre toutes mes aventures."
        : "I'm happy to welcome you here! Discover my world and stay tuned for all my upcoming adventures.",
      img: '/news/sample-3.jpg',
    },
    {
      slug: 'newsong', // ✅ maintenant ça correspond à ton dossier
      title: isFr ? 'Nouvelle chanson en préparation' : 'New song in the works',
      date: '2025-08-01',
      excerpt: isFr
        ? "Un aperçu du prochain single de Flore d'Esprit sera bientôt disponible."
        : "A preview of Flore d'Esprit's next single will be available soon.",
      img: '/news/sample-1.jpg',
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 py-20 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">{t.title}</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">{t.subtitle}</p>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white/5 rounded-lg p-8 shadow-md max-w-2xl mx-auto text-center border border-white/10">
          <p className="text-lg text-slate-300">{t.comingSoon}</p>
        </div>
      ) : (
        <section>
          <h2 className="text-2xl font-bold mb-6">{t.latest}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex flex-col">
                <div className="relative aspect-[4/3]">
                  {p.img && (
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-slate-400 mb-2">{new Date(p.date).toLocaleDateString(locale)}</p>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-300 flex-grow">{p.excerpt}</p>
                  <div className="mt-4">
                    <Link
                      href={`/news/${p.slug}`} // ✅ lien corrigé
                      className="inline-flex items-center rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 text-xs font-medium"
                    >
                      {t.readMore}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
