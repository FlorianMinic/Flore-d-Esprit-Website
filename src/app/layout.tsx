import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Flore d'Esprit",
  description: "Site officiel de Flore d'Esprit",
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} hide-scrollbar`}>
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
