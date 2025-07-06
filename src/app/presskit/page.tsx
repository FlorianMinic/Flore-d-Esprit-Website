// app/press-kit/page.tsx

'use client';

import Link from 'next/link';

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Flore d'Esprit – Press Kit</h1>
      <p className="max-w-2xl mx-auto text-lg mb-10">
        Un univers électro funky et psychédélique pour faire danser corps et esprits.
      </p>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Biographie</h2>
        <p className="max-w-2xl mx-auto text-left mb-3">
          Flore d'Esprit est un projet musical mêlant groove électro, paillettes et liberté créative, invitant à lâcher prise sur des rythmes envoûtants.
        </p>
        <p className="max-w-2xl mx-auto text-left">
          Flore d'Esprit is a musical project blending electro groove, glitter, and creative freedom, inviting listeners to let go and dance on hypnotic beats.
        </p>
      </section>

      {/* Photos Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Photos HD</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/presskit/photos/portrait_hd.jpg" target="_blank" download className="text-purple-700 underline">Portrait HD</Link>
          <Link href="/presskit/photos/live_hd.jpg" target="_blank" download className="text-purple-700 underline">Live HD</Link>
          <Link href="/presskit/photos/studio_hd.jpg" target="_blank" download className="text-purple-700 underline">Studio HD</Link>
        </div>
      </section>

      {/* Logos Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Logos & Visuels</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/presskit/logos/logo_hd.png" target="_blank" download className="text-purple-700 underline">Logo PNG</Link>
          <Link href="/presskit/logos/logo_vector.svg" target="_blank" download className="text-purple-700 underline">Logo Vectoriel</Link>
        </div>
      </section>

      {/* Audio Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Extraits musicaux</h2>
        <iframe
          src="https://open.spotify.com/embed/album/6lC789KhWfIQNHBIENhDmQ"
          width="300"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="mx-auto rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* Videos Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Vidéos</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yg9JtvsR61k"
          title="Bubblegum Mood"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
        <p>
          Booking & Press: <a href="mailto:floredesprit@tonmail.com" className="text-purple-700 underline">floredesprit@tonmail.com</a>
        </p>
      </section>

      {/* Download Press Kit PDF */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Télécharger le Press Kit complet</h2>
        <a
          href="/presskit/floredesprit_presskit.pdf"
          download
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          ⬇️ Télécharger le Press Kit PDF
        </a>
      </section>
    </div>
  );
}
