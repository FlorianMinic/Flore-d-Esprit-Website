'use client';

import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

export default function AboutPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Flore d'Esprit – L’univers du groove et des paillettes",
      description: "Flore d’Esprit est plus qu’un projet musical, c’est une invitation à lâcher prise, danser et rêver dans un univers coloré mêlant électro, funk psychédélique et énergie positive.",
      aboutTitle: "À propos",
      aboutText: "Flore d’Esprit est né de l’envie de créer une musique qui fait vibrer le corps autant que l’esprit, en mélangeant des rythmes électro entêtants, des grooves funky et une touche de folie cosmique. Inspiré par l’univers des paillettes, de la liberté et des danses sans jugement, Flore d’Esprit propose une expérience où chaque note devient un pas vers un monde plus vibrant et joyeux. Chaque morceau est pensé comme une exploration visuelle et sonore, où le public est invité à s’exprimer librement, à célébrer la vie et à partager des moments de danse sincères. Derrière Flore d’Esprit, il y a une vision : briser les codes, ouvrir des bulles de liberté dans un monde parfois trop gris, et semer des graines de joie dans le cœur des auditeurs.",
      valuesTitle: "Valeurs",
      values: ["Liberté : s’exprimer sans filtre ni jugement.", "Joie : cultiver le bonheur par la musique et le mouvement.", "Créativité : explorer sans limite, mêler sons, visuels et expériences immersives.", "Partage : créer des moments de communion sur le dancefloor et au-delà."],
      inspirationsTitle: "Inspirations",
      inspirationsText: "Daft Punk, Jamiroquai, Justice, Grimes, avec une approche artistique libre qui mêle performance, visuels et danse, dans un esprit de fête inclusive et bienveillante.",
      discoverTitle: "Découvrir et me contacter",
      spotify: "🎧 Écouter sur Spotify",
      youtube: "📺 Découvrir sur YouTube",
      contact: "📥 Contact Booking"
    },
    en: {
      title: "Flore d'Esprit – The universe of groove and glitter",
      description: "Flore d'Esprit is more than a musical project; it is an invitation to let go, dance, and dream in a colorful world blending electro, psychedelic funk, and positive energy.",
      aboutTitle: "About",
      aboutText: "Flore d'Esprit was born from the desire to create music that makes both the body and mind vibrate, blending catchy electro rhythms, funky grooves, and a touch of cosmic madness. Inspired by the universe of glitter, freedom, and judgment-free dancing, Flore d'Esprit offers an experience where every note becomes a step towards a more vibrant and joyful world. Each track is designed as a visual and sonic exploration, inviting the audience to express themselves freely, celebrate life, and share genuine dance moments. Behind Flore d'Esprit is a vision: to break the codes, open bubbles of freedom in a sometimes grey world, and plant seeds of joy in the hearts of listeners.",
      valuesTitle: "Values",
      values: ["Freedom: express without filter or judgment.", "Joy: cultivate happiness through music and movement.", "Creativity: explore without limits, mixing sounds, visuals, and immersive experiences.", "Sharing: create moments of communion on and off the dancefloor."],
      inspirationsTitle: "Inspirations",
      inspirationsText: "Daft Punk, Jamiroquai, Justice, Grimes, with a free artistic approach mixing performance, visuals, and dance in an inclusive and caring party spirit.",
      discoverTitle: "Discover and contact me",
      spotify: "🎧 Listen on Spotify",
      youtube: "📺 Watch on YouTube",
      contact: "📥 Booking Contact"
    }
  }[locale];

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
      <p className="max-w-2xl mx-auto text-lg mb-10">{t.description}</p>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.aboutTitle}</h2>
        <p className="max-w-2xl mx-auto text-left whitespace-pre-line">{t.aboutText}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.valuesTitle}</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside space-y-2">
          {t.values.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.inspirationsTitle}</h2>
        <p className="max-w-2xl mx-auto text-left">{t.inspirationsText}</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.discoverTitle}</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="https://open.spotify.com/artist/xxxxxxxx" target="_blank" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">{t.spotify}</Link>
          <Link href="https://youtube.com/@floredesprit" target="_blank" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">{t.youtube}</Link>
          <Link href="mailto:floredesprit@tonmail.com" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">{t.contact}</Link>
        </div>
      </section>
    </div>
  );
}