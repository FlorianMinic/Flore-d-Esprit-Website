'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { useLocale } from '@/hooks/useLocale';

// ------------------------------------------------------------
// Page MERCH — version stable, sans paniers/checkout.
// - Texte FR/EN via useLocale()
// - Grille de produits (placeholders) — mets tes visuels dans public/merch/
// - CTA vers une boutique externe (remplace href par ton URL)
// ------------------------------------------------------------

export default function MerchPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? "Merch officiel" : 'Official merch',
      sub: isFr
        ? "Textiles et goodies en petites séries. Qualité d'abord, production raisonnée."
        : 'Small-batch apparel and goodies. Quality first, mindful production.',
      cta: isFr ? "Voir la boutique" : 'Visit the store',
      badges: {
        new: isFr ? 'Nouveau' : 'New',
        limited: isFr ? 'Édition limitée' : 'Limited',
        restock: isFr ? 'Restock' : 'Restock',
      },
      gridTitle: isFr ? 'Sélection du moment' : 'Current selection',
      detailsTitle: isFr ? 'Détails & engagement' : 'Details & commitment',
      detailsP1: isFr
        ? "Les quantités sont volontairement limitées pour éviter la surproduction. Les encres et textiles sont sélectionnés pour leur durabilité et leur confort."
        : 'Quantities are intentionally limited to avoid overproduction. Inks and fabrics are chosen for durability and comfort.',
      detailsP2: isFr
        ? "Chaque visuel est conçu par mes soins. Quand l’IA intervient, c’est comme un assistant — je garde la direction artistique et la sélection finale."
        : 'Each visual is crafted by me. When AI helps, it acts as an assistant — I keep full creative direction and the final cut.',
      shippingTitle: isFr ? 'Expédition & retours' : 'Shipping & returns',
      shippingList: isFr
        ? [
            'Expédition sous 3–7 jours ouvrés (hors précommandes).',
            'Retours acceptés sous 14 jours (article non porté, étiquettes intactes).',
            'Guide des tailles disponible sur chaque fiche produit.',
          ]
        : [
            'Ships within 3–7 business days (excluding preorders).',
            'Returns within 14 days (unused item, tags attached).',
            'Sizing guide available on each product page.',
          ],
      note: isFr
        ? "Astuce : si une image ne s’affiche pas, vérifie le chemin public/merch/… (Next/Image n’utilise pas /public dans le src)."
        : 'Tip: if an image fails to load, check public/merch/... (Next/Image paths do not include /public).',
    }),
    [isFr]
  );

  // Remplace ces entrées par tes vrais produits
  const products = [
    {
      slug: 'tee-logo-black',
      title: isFr ? 'T-shirt Logo — Noir' : 'Logo Tee — Black',
      price: isFr ? '29 €' : '€29',
      img: '/merch/tee-logo-black.jpg',
      badge: t.badges.limited,
    },
    {
      slug: 'hoodie-cyan-wave',
      title: isFr ? 'Hoodie Cyan Wave' : 'Cyan Wave Hoodie',
      price: isFr ? '59 €' : '€59',
      img: '/merch/hoodie-cyan-wave.jpg',
      badge: t.badges.new,
    },
    {
      slug: 'cap-night',
      title: isFr ? 'Casquette Night' : 'Night Cap',
      price: isFr ? '24 €' : '€24',
      img: '/merch/cap-night.jpg',
      badge: t.badges.restock,
    },
    {
      slug: 'poster-mood',
      title: isFr ? 'Poster — Mood Cyan' : 'Poster — Cyan Mood',
      price: isFr ? '15 €' : '€15',
      img: '/merch/poster-mood.jpg',
      badge: t.badges.limited,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* HERO */}
      <section className="px-6 md:px-10 pt-28 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl">{t.sub}</p>
            <div className="mt-8">
              {/* Remplace href par l’URL de ta boutique */}
              <Link href="#" className="inline-flex items-center rounded-full bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2.5 text-sm font-medium shadow">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRID PRODUITS */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{t.gridTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.slug} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                <div className="relative aspect-[4/3]">
                  {/* Si l'image n'existe pas encore, remplace par un fond neutre */}
                  {p.img ? (
                    <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="absolute inset-0 bg-slate-800/60" />
                  )}
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white border border-white/10">{p.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-slate-300/90 mt-1">{p.price}</p>
                  {/* Lien vers la page produit ou boutique externe */}
                  <div className="mt-3">
                    <Link href="#" className="inline-flex items-center rounded-full bg-slate-100/10 hover:bg-slate-100/20 text-white px-4 py-2 text-xs">
                      {isFr ? 'Détails / Acheter' : 'Details / Buy'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DÉTAILS / ENGAGEMENT */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-lg md:text-xl font-bold mb-2">{t.detailsTitle}</h2>
            <p className="text-slate-300">{t.detailsP1}</p>
            <p className="mt-3 text-slate-300">{t.detailsP2}</p>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="font-semibold mb-2">{t.shippingTitle}</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              {t.shippingList.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-400">{t.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
