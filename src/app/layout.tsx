import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});

export const metadata: Metadata = {
  title: "Osama Al-Kalthami — AI & Automation Consultant",
  description:
    "I help businesses automate operations with AI — WhatsApp bots, n8n workflows, CRM automation, and lead generation systems. Based in Saudi Arabia.",
  keywords: [
    "AI consultant",
    "automation",
    "WhatsApp bots",
    "n8n",
    "CRM automation",
    "Saudi Arabia",
    "Osama Al-Kalthami",
    "مستشار أتمتة",
    "ذكاء اصطناعي",
  ],
  openGraph: {
    title: "Osama Al-Kalthami — AI & Automation Consultant",
    description:
      "I help businesses automate operations with AI — WhatsApp bots, n8n workflows, CRM automation, and lead generation systems.",
    url: "https://osama-alkalthami.com",
    siteName: "Osama Al-Kalthami",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Al-Kalthami — AI & Automation Consultant",
    description:
      "I help businesses automate operations with AI — WhatsApp bots, n8n workflows, CRM automation, and lead generation systems.",
  },
  metadataBase: new URL("https://osama-alkalthami.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
