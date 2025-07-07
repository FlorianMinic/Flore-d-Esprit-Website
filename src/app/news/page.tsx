'use client';

import { newsList, NewsItem } from '@/lib/newsData';
import NewsCard from '@/components/NewsCard';
import { useLocale } from '@/hooks/useLocale';
import Head from 'next/head';

export default function NewsPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Actualités",
      subtitle: "Retrouve toutes les dernières nouvelles de Flore d'Esprit ici.",
      comingSoon: "D'autres actualités arrivent prochainement.",
    },
    en: {
      title: "News",
      subtitle: "Find all the latest news from Flore d'Esprit here.",
      comingSoon: "More news coming soon.",
    },
  }[locale];

  return (
    <>
      <Head>
        <title>{t.title} | Flore d'Esprit</title>
        <meta name="description" content={t.subtitle} />
      </Head>

      <main className="min-h-screen bg-white text-black px-6 py-16 md:py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-3">{t.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">{t.subtitle}</p>

        <div className="w-full max-w-3xl flex flex-col gap-4">
          {newsList.length > 0 ? (
            newsList.map((news: NewsItem) => (
              <NewsCard key={news.id} news={news} locale={locale} />
            ))
          ) : (
            <p className="text-center text-gray-600 mt-10">{t.comingSoon}</p>
          )}
        </div>
      </main>
    </>
  );
}
