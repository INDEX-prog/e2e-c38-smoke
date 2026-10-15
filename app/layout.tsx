import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E2E C38 Smoke | Pre-Launch Smoke Testing for Startups",
  description: "5-minute smoke tests that catch 90% of launch-day issues. Test your payment flow like your first real customer would. $99 one-time.",
  keywords: ["smoke testing", "startup launch", "payment flow testing", "QA testing", "pre-launch"],
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
