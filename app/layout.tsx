import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E2E Smoke Test | Pre-Launch Payment Flow Testing for Founders',
  description: 'Your payment flow will break on launch day unless you test it like your first real customer would. 5-minute smoke test, $99, catches 90% of issues before they happen.',
  openGraph: {
    title: 'E2E Smoke Test | Pre-Launch Payment Flow Testing',
    description: '5-minute smoke test catches 90% of issues before launch. $99 one-time.',
    url: 'https://e2e-c38-smoke.vercel.app',
    siteName: 'E2E Smoke Test',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2E Smoke Test | Pre-Launch Testing',
    description: '5-minute smoke test catches 90% of issues before launch.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
