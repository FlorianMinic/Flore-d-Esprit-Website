"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Download, Mail, PlayCircle, Video, Music, Camera, FileText, Globe } from "lucide-react";

// Complete EPK / Press Kit page for media
export default function PressKitPage() {
  const { locale } = useLocale();
  const isFr = locale === "fr";

  const t = {
    title: isFr ? "Dossier de Presse" : "Press Kit",
    intro: isFr
      ? (
          <>Bienvenue dans l’univers de <strong>Flore d’Esprit</strong>. Retrouvez ici biographie, photos HD, logos, liens d’écoute, vidéos, documents techniques et contacts presse.</>
        )
      : (
          <>Welcome to the universe of <strong>Flore d’Esprit</strong>. Find the bio, HD photos, logos, listening links, videos, tech docs and press contacts here.</>
        ),
    quickFacts: isFr ? "Infos clés" : "Quick Facts",
    facts: isFr
      ? [
          ["Genre", "Electro‑pop • Rock • Funk"],
          ["Ville", "Bordeaux, France"],
          ["Activité", "2024 – présent"],
          ["Pour les médias", "Diffusion radio/web OK, booking ouvert"],
        ]
      : [
          ["Genre", "Electro‑pop • Rock • Funk"],
          ["City", "Bordeaux, France"],
          ["Years active", "2024 – present"],
          ["For media", "Radio/web friendly, booking open"],
        ],
    bioTitle: isFr ? "Biographie" : "Biography",
    bioShortTitle: isFr ? "Pitch rapide" : "Elevator pitch",
    bioShort: isFr
      ? "Flore d’Esprit mêle groove, textures électroniques et image néo‑pop pour des titres dansants et introspectifs, pensés pour la scène et le streaming."
      : "Flore d’Esprit blends groove, electronic textures and neo‑pop imagery into danceable, introspective tracks built for stage and streaming.",
    bioLong: isFr
      ? "Le projet explore liberté d’expression, puissance collective et une pointe de surréalisme cosmique. Refrains accrocheurs, production soignée et direction visuelle marquée."
      : "The project explores free expression, collective power and a hint of cosmic surrealism. Big hooks, polished production and a strong visual identity.",
    highlightsTitle: isFr ? "Faits marquants" : "Highlights",
    highlights: isFr
      ? [
          "Titres playlistés sur plateformes",
          "Clips avec direction artistique forte",
          "Communauté engagée autour d’un univers visuel",
        ]
      : [
          "Tracks featured in editorial/user playlists",
          "Music videos with strong art direction",
          "Engaged community around a visual universe",
        ],
    listenTitle: isFr ? "Écouter la musique" : "Listen to the music",
    videosTitle: isFr ? "Vidéos" : "Videos",
    downloadsTitle: isFr ? "Médias à télécharger" : "Downloadable Media",
    assetsNote: isFr
      ? "Fichiers utilisables à des fins rédactionnelles — crédit : ‘Flore d’Esprit’."
      : "Files cleared for editorial use — credit: ‘Flore d’Esprit’.",
    pressTitle: isFr ? "Revue de presse / Citations" : "Press quotes",
    pressQuotes: isFr
      ? [
          ["La danse rencontre l’introspection dans un écrin électro lumineux.", "Magazine X"],
          ["Une identité visuelle affirmée au service de refrains fédérateurs.", "Blog Y"],
        ]
      : [
          ["Dance meets introspection inside a luminous electro shell.", "Magazine X"],
          ["A bold visual identity powering anthemic choruses.", "Blog Y"],
        ],
    contactTitle: isFr ? "Contact & Booking" : "Contact & Booking",
    contactLead: isFr
      ? "Pour interview, chroniques, diffusions ou booking :"
      : "For interviews, reviews, airplay or booking:",
    socialsTitle: isFr ? "Réseaux & Liens officiels" : "Socials & Official links",
    techTitle: isFr ? "Documents techniques" : "Technical documents",
    techItems: isFr
      ? [
          ["Fiche technique (PDF)", "/downloads/tech-rider.pdf"],
          ["Plan de scène (PDF)", "/downloads/stage-plot.pdf"],
          ["One‑sheet (PDF)", "/downloads/one-sheet.pdf"],
        ]
      : [
          ["Technical rider (PDF)", "/downloads/tech-rider.pdf"],
          ["Stage plot (PDF)", "/downloads/stage-plot.pdf"],
          ["One‑sheet (PDF)", "/downloads/one-sheet.pdf"],
        ],
  } as const;

  return (
    <div className="min-h-screen px-6 py-16 md:px-20 bg-white text-black">
      {/* JSON‑LD for SEO */}
      <Script id="jsonld-artist" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            name: "Flore d’Esprit",
            genre: ["Electro-pop", "Dark pop", "Funk"],
            foundingLocation: "Paris, France",
            image: [
              "/press/hero.jpg",
              "/press/photos/photo-1.jpg",
              "/press/photos/photo-2.jpg"
            ],
            url: "https://flore-desprit.com",
            sameAs: [
              "https://open.spotify.com/artist/",
              "https://www.youtube.com/@flordesprit",
              "https://www.instagram.com/floredesprit",
              "https://suno.com/@flordesprit"
            ],
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "Press/Media",
              email: "floredesprit1@gmail.com"
            }]
          }),
        }}
      />

      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700">{t.title}</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
      </header>

      {/* Quick facts */}
      <section className="mb-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.quickFacts}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.facts.map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-purple-100 p-4 shadow-sm">
              <p className="text-sm text-purple-500">{k}</p>
              <p className="font-medium">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.bioTitle}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold">{t.bioShortTitle}</h3>
            <p className="leading-relaxed">{t.bioShort}</p>
            <p className="leading-relaxed">{t.bioLong}</p>
            <div>
              <h3 className="font-semibold mt-4">{t.highlightsTitle}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {t.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-purple-100">
              <Image src="/press/hero.jpg" alt="Flore d’Esprit – portrait presse" fill className="object-cover" />
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">© Flore d’Esprit — visuels presse</p>
          </div>
        </div>
      </section>

      {/* Listen (YouTube card removed, keep Spotify + Suno) */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.listenTitle}</h2>
        <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
          <div className="flex-1 rounded-2xl border border-purple-100 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3"><Music size={18} /><span className="font-medium">Spotify</span></div>
            <iframe
              src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div className="flex-1 rounded-2xl border border-purple-100 p-4 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-3"><PlayCircle size={18} /><span className="font-medium">Suno</span></div>
            <Link
              href="https://suno.com/@flordesprit"
              target="_blank"
              className="flex-1 rounded-xl bg-purple-600/10 border border-purple-200 grid place-items-center font-semibold hover:bg-purple-600/20 transition"
            >
              {isFr ? "Écouter sur Suno" : "Listen on Suno"}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <iframe
            src="https://open.spotify.com/embed/track/48dt9KbbgYN8JncxA0yKUV"
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
          <iframe
            src="https://open.spotify.com/embed/track/7bP7Gmpfe6hLpW02dXJVuL"
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Videos carousel */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.videosTitle}</h2>
        <Swiper modules={[Navigation]} navigation spaceBetween={24} slidesPerView={1} className="w-full">
          <SwiperSlide>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Yg9JtvsR61k"
                title="Bubblegum Mood"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-aX3vJ8RZFQ"
                title="Gravity Falls"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Downloadable media */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-purple-600">{t.downloadsTitle}</h2>
        <p className="text-sm text-gray-600 mb-4">{t.assetsNote}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            [isFr ? "Dossier de presse (PDF)" : "Press Release (PDF)", "/downloads/press-release.pdf", FileText],
            [isFr ? "Biographie longue (PDF)" : "Long Biography (PDF)", "/downloads/biographie.pdf", FileText],
            [isFr ? "Photos HD (ZIP)" : "HD Photos (ZIP)", "/downloads/photos.zip", Camera],
            [isFr ? "Logos & Brand kit (ZIP)" : "Logos & Brand kit (ZIP)", "/downloads/logo-flore.zip", Download],
          ].map(([label, href, Icon]) => (
            <Link key={label as string} href={href as string} target="_blank" className="group rounded-2xl border border-purple-100 p-4 shadow-sm hover:border-purple-300 transition">
              <div className="flex items-center gap-3">
                <Icon className="shrink-0" />
                <span className="font-medium group-hover:underline">{label as string}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Technical docs */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.techTitle}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {t.techItems.map(([label, href]) => (
            <li key={label}>
              <Link href={href} target="_blank" className="text-purple-700 underline flex items-center gap-2">
                <FileText size={16} /> {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Photo gallery */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{isFr ? "Sélection de photos" : "Photo selection"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["/images/FlorePortrait.png", "/images/PosingPhoto.png", "/images/Portrait2.png" , "/images/Portrait3.png" ].map((src, i) => (
            <div key={src} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
              <Image src={src} alt={`Flore d’Esprit — photo ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Press quotes */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.pressTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pressQuotes.map(([quote, source], idx) => (
            <blockquote key={idx} className="rounded-2xl border border-purple-100 p-6 shadow-sm bg-white">
              <p className="italic leading-relaxed">“{quote}”</p>
              <footer className="mt-2 text-sm text-gray-600">— {source}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.socialsTitle}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="https://open.spotify.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><Music size={16}/>Spotify</Link>
          <Link href="https://www.youtube.com/@flordesprit" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><Video size={16}/>YouTube</Link>
          <Link href="https://www.instagram.com/floredesprit" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><Camera size={16}/>Instagram</Link>
          <Link href="https://x.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><Globe size={16}/>X</Link>
          <Link href="https://facebook.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><Globe size={16}/>Facebook</Link>
          <Link href="https://suno.com/@flordesprit" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm hover:border-purple-400"><PlayCircle size={16}/>Suno</Link>
        </div>
      </section>

      {/* Contact / Booking */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{t.contactTitle}</h2>
        <p className="leading-relaxed mb-2">{t.contactLead}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a href="mailto:floredesprit1@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-purple-700 text-white px-5 py-2 font-medium shadow hover:opacity-90">
            <Mail size={18}/> floredesprit1@gmail.com
          </a>
          <Link href="/downloads/press-release.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-5 py-2 font-medium hover:border-purple-500">
            <FileText size={18}/> {isFr ? "Dossier de presse (PDF)" : "Press release (PDF)"}
          </Link>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto mt-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Flore d’Esprit</p>
      </footer>
    </div>
  );
}
