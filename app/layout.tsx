import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "_E2E_C38_Smoke | 5-Minute Launch Smoke Tests",
  description: "Your payment flow will break on launch day unless you test it like your first real customer would. 5-minute smoke test catches 90% of issues before they happen.",
  keywords: ["smoke testing", "launch testing", "startup QA", "payment flow testing", "pre-launch validation"],
  openGraph: {
    title: "_E2E_C38_Smoke | 5-Minute Launch Smoke Tests",
    description: "Your payment flow will break on launch day. We catch what breaks before your customers do.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
