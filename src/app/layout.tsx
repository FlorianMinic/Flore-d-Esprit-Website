import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flore d\'Esprit',
  description: 'Site officiel de Flore d\'Esprit',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
