import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida",
  description:
    "Krishna Mehandi Artist - Professional Bridal Mehndi Designer in Noida. Specializing in Arabic, Rajasthani, and Modern Mehndi designs for weddings and special occasions. Book now for beautiful henna art!",
  keywords: [
    "Krishna Mehandi Artist",
    "Bridal Mehndi Noida",
    "Best Mehndi Artist Noida",
    "Arabic Mehndi Designer",
    "Wedding Mehndi Artist",
    "Mehndi Artist Near Me",
    "Professional Henna Artist Noida",
    "Bridal Henna Designs",
    "Traditional Mehndi Patterns",
  ],
  authors: [
    {
      name: "Kush Vardhan",
      url: "https://kush-personal-portfolio-my-portfolio.vercel.app/",
    },
  ],
  creator: "Kush Vardhan",
  publisher: "Krishna Mehandi Artist",
  openGraph: {
    title: "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida",
    description:
      "Professional Bridal Mehndi Designer in Noida. Specializing in Arabic, Rajasthani, and Modern Mehndi designs for weddings and special occasions.",
    url: "https://krishnamehandi.vercel.app",
    siteName: "Krishna Mehandi Artist",
    images: [
      {
        url: "/logo/KrishnaMehandiLogo.png",
        width: 1200,
        height: 630,
        alt: "Krishna Mehandi Artist Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida",
    description:
      "Professional Bridal Mehndi Designer in Noida. Book now for beautiful henna art!",
    images: ["/logo/KrishnaMehandiLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo/KrishnaMehandiLogo.png",
    shortcut: "/logo/KrishnaMehandiLogo.png",
    apple: "/logo/KrishnaMehandiLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo/KrishnaMehandiLogo.png" />
        <link rel="apple-touch-icon" href="/logo/KrishnaMehandiLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${prata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
