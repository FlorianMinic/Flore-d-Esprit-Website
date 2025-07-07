'use client';

import Image from 'next/image';
import { NewsItem } from '@/lib/newsData';

interface NewsCardProps {
  news: NewsItem;
  locale: 'fr' | 'en';
}

export default function NewsCard({ news, locale }: NewsCardProps) {
  return (
    <div className="flex bg-neutral-900 rounded-lg shadow-md mb-6 overflow-hidden">
      <div className="relative w-40 h-28 md:w-48 md:h-32 shrink-0">
        <Image
          src={news.image}
          alt={news.title[locale]}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
          {news.category[locale]}
          <span className="ml-1 bg-black/50 px-1 rounded">
            {news.tag[locale]}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-3 text-white flex-1">
        <div>
          <h2 className="text-base md:text-lg font-semibold">
            {news.title[locale]}
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            {news.excerpt[locale]}
          </p>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          {news.date} • {news.time} • 💬 {news.comments}
        </div>
      </div>
    </div>
  );
}
