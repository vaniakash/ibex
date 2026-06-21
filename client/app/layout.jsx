import './globals.css';
import './pages.css';
import './components.css';
import { Playfair_Display, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  metadataBase: new URL('https://ibextrekking.com'),
  title: {
    default: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
    template: '%s | IBEX Trekking',
  },
  description:
    'IBEX offers premium guided treks in the Indian Himalayas — Uttarakhand, Himachal Pradesh, Sikkim & Ladakh. Small groups, certified guides, leave-no-trace ethics.',
  keywords: ['himalayan treks', 'india trekking', 'kedarkantha', 'roopkund', 'chadar trek', 'IBEX trekking'],
  authors: [{ name: 'IBEX Trekking', url: 'https://ibextrekking.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ibextrekking.com',
    siteName: 'IBEX Trekking',
    title: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
    description: 'Premium guided treks in the Indian Himalayas. Small groups, certified guides.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Himalayan ridge at golden hour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBEX Trekking',
    description: 'Premium guided treks in the Indian Himalayas.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${ibmPlex.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
