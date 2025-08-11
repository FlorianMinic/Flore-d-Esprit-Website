// app/news/[slug]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsArticlePage() {
  const { slug } = useParams();
  const router = useRouter();

  // Pour l'instant, on récupère les mêmes données statiques que dans NewsPage
  const posts = [
    {
      slug: 'nouvelle-chanson',
      title: 'Nouvelle chanson en préparation',
      date: '2025-08-01',
      content:
        "Un aperçu du prochain single de Flore d'Esprit sera bientôt disponible. Cette chanson promet de nouvelles sonorités et une énergie unique.",
      img: '/news/sample-1.jpg',
    },
    {
      slug: 'bienvenue',
      title: 'Bienvenue sur mon site',
      date: '2025-08-05',
      content:
        "Bienvenue sur mon site officiel ! Tu y trouveras mes actualités, ma musique et tout l'univers de Flore d'Esprit.",
      img: '/news/sample-2.jpg',
    },
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
        <button
          onClick={() => router.push('/news')}
          className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-500"
        >
          Retour aux actualités
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/news" className="text-cyan-400 hover:underline">
          ← Retour aux actualités
        </Link>

        <h1 className="text-4xl font-extrabold text-cyan-400 mt-4">{post.title}</h1>
        <p className="text-sm text-slate-400 mt-1">
          {new Date(post.date).toLocaleDateString('fr-FR')}
        </p>

        {post.img && (
          <div className="relative w-full h-64 md:h-96 my-6">
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="text-lg text-slate-200 leading-relaxed">{post.content}</div>
      </div>
    </main>
  );
}
