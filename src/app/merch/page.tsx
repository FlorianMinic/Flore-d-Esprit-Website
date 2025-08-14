'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { useLocale } from '@/hooks/useLocale';

export default function MerchPage() {
  const { locale } = useLocale();
  const isFr = locale === 'fr';

  const t = useMemo(
    () => ({
      title: isFr ? 'Merch officiel' : 'Official merch',
      sub: isFr
        ? "Textiles et goodies en petites séries. Qualité d'abord, production raisonnée."
        : 'Small-batch apparel and goodies. Quality first, mindful production.',
      cta: isFr ? 'Voir la boutique' : 'Visit the store',
      badges: {
        new: isFr ? 'Nouveau' : 'New',
        limited: isFr ? 'Édition limitée' : 'Limited',
        restock: isFr ? 'Restock' : 'Restock',
      },
      gridTitle: isFr ? 'Sélection du moment' : 'Current selection',
      detailsTitle: isFr ? 'Détails & engagement' : 'Details & commitment',
      detailsP1: isFr
        ? 'Les quantités sont volontairement limitées pour éviter la surproduction. Les encres et textiles sont sélectionnés pour leur durabilité et leur confort.'
        : 'Quantities are intentionally limited to avoid overproduction. Inks and fabrics are chosen for durability and comfort.',
      // Remplacement par un texte orienté merch (plus de phrase sur l’IA ici)
      detailsP2: isFr
        ? 'Impression durable à encres à base d’eau, textiles sourcés avec soin. Petites séries contrôlées pièce par pièce.'
        : 'Long-lasting, water-based prints and carefully sourced fabrics. Small batches with hands-on quality control.',
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

  // ---------- styles utilitaires alignés avec la Home ----------
  const card =
    'rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_6px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_44px_rgba(0,0,0,0.45)] transition-shadow';
  const ring =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';
  const hBadge =
    'inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/10 text-cyan-200 border border-white/10 shadow-sm';
  const hGradient =
    'text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.20)]';

  // ---------- produits (placeholders) ----------
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
    <main className="relative min-h-screen overflow-x-hidden text-slate-100 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* motif/grain global */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,.6) 1px, transparent 0), radial-gradient(1px 1px at 30px 20px, rgba(255,255,255,.35) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* halos décoratifs (haut/bas) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)' }}
        />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 pt-28 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className={`${card} p-8 md:p-12`}>
            <span className={hBadge}>{isFr ? 'Boutique' : 'Store'}</span>
            <h1 className={`mt-3 text-3xl md:text-5xl font-extrabold tracking-tight ${hGradient}`}>{t.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl">{t.sub}</p>
            <div className="mt-8">
              {/* Remplace href par l’URL de ta boutique */}
              <Link
                href="#"
                className={`${ring} inline-flex items-center rounded-full border border-white/10 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.03)]`}
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* séparateur lumineux */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* GRID PRODUITS */}
      <section className="px-6 md:px-10 pb-16 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0">
        <div className="max-w-6xl mx-auto relative">
          {/* halos secondaires pour la grille */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -top-16 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), transparent)' }}
            />
            <div
              className="absolute -bottom-20 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.35), transparent)' }}
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-100">{t.gridTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.slug} className={`${card} group rounded-2xl overflow-hidden`}>
                <div className="relative aspect-[4/3]">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-800/60" />
                  )}
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-200 border border-white/10 shadow-sm">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-slate-300/90 mt-1">{p.price}</p>
                  <div className="mt-3">
                    <Link
                      href="#"
                      className={`${ring} inline-flex items-center rounded-full border border-white/10 bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.03)]`}
                    >
                      {isFr ? 'Détails / Acheter' : 'Details / Buy'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* séparateur lumineux */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* DÉTAILS / ENGAGEMENT */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-5">
          <div className={`${card} md:col-span-3 p-6`}>
            <h2 className="text-lg md:text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300">
              {t.detailsTitle}
            </h2>
            <p className="text-slate-300">{t.detailsP1}</p>
            {t.detailsP2 && <p className="mt-3 text-slate-300">{t.detailsP2}</p>}
          </div>
          <div className={`${card} md:col-span-2 p-6`}>
            <h3 className="font-semibold mb-2 text-cyan-200">{t.shippingTitle}</h3>
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
