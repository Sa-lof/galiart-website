import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';
import { Metadata } from 'next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const MiImagen = '/images/main.svg';

export const metadata: Metadata = {
  title: 'Galiart - Servicios Logísticos',
  description:
    'Soluciones logísticas profesionales para tu negocio. Especialistas en diseño y manufactura de empaques para refacciones.',
  keywords: [
    'Galiart',
    'servicios logísticos',
    'empaques',
    'cajas',
    'refacciones',
    'logística',
    'diseño personalizado'
  ],
  openGraph: {
    title: 'Galiart - Servicios Logísticos',
    description:
      'Con más de 25 años de experiencia, Galiart ofrece soluciones logísticas y de empaques a la medida para proteger y resaltar tus refacciones.',
    url: 'https://galiart.com.mx',
    siteName: 'Galiart',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://galiart.com.mx/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galiart - Servicios Logísticos',
    description:
      'Soluciones logísticas y empaques personalizados para refacciones. Conoce más sobre nuestros servicios.',
    images: ['https://galiart.com.mx/og-image.jpg'],
  },
  icons: {
    icon: MiImagen,
    shortcut: MiImagen,
    apple: MiImagen,
  },
  alternates: {
    canonical: 'https://galiart.com.mx',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Carga del script de SMTPJS */}
        <Script
          src="https://smtpjs.com/v3/smtp.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
