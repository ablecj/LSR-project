import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-malayalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LRS — Legal & Relocation Services | Bespoke Cross-Border Counsel & Mobility",
  description:
    "LRS Legal & Relocation Services delivers integrated corporate legal counsel, regulatory compliance, immigration advisory, and executive relocation support.",
  openGraph: {
    title: "LRS — Legal & Relocation Services",
    description:
      "Integrated corporate legal counsel, cross-border compliance, and executive relocation advisory.",
    type: "website",
    images: ["/images/lrs-logo.png"],
  },
  icons: {
    icon: "/images/lrs-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${notoMalayalam.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-brand-ink font-sans selection:bg-brand-secondary selection:text-white">
        <LanguageProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
