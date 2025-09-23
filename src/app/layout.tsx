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
  title:
    "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida | Professional Mehndi Artist",
  description:
    "Krishna Mehandi Artist - Top Bridal Mehndi Designer in Noida. Expert in Arabic, Rajasthani & Modern designs. Professional Mehndi Artist for weddings, Karwa Chauth, festivals. 10+ years experience. Home visits available across Noida, Greater Noida, Sector 18, Extension. Book now!",
  keywords: [
    // Primary Brand Keywords
    "Krishna Mehandi Artist",
    "Krishna Mehandi Noida",
    "Krishna Mehandi Artist in Noida",
    "Krishna Mehndi Designer Noida",
    "Krishna Bridal Mehandi Artist",

    // Bridal/Wedding Keywords
    "Bridal Mehandi Artist in Noida",
    "Best Bridal Mehndi in Noida",
    "Bridal Mehndi Designer Near Me",
    "Top Bridal Mehandi Artist Noida",
    "Wedding Mehndi Artist in Noida",

    // Occasion-Based Keywords
    "Karwa Chauth Mehndi Artist Noida",
    "Eid Mehndi Artist in Noida",
    "Teej Mehndi Designer Noida",
    "Diwali Mehndi Artist Near Me",
    "Festival Mehandi Designer Noida",

    // Service Style Keywords
    "Arabic Mehndi Artist in Noida",
    "Rajasthani Mehndi Designer Noida",
    "Indian Mehndi Artist Near Me",
    "Modern Mehndi Artist in Noida",
    "Stylish Mehandi Designer Noida",
    "Portrait Mehndi Artist Noida",

    // Local SEO Keywords
    "Mehndi Artist in Noida Sector 18",
    "Mehndi Designer in Noida Extension",
    "Mehndi Artist Near GIP Mall Noida",
    "Best Mehndi Artist Near Me",
    "Mehndi Artist in Greater Noida",

    // High-Value Keywords
    "Best Mehandi Artist in Noida",
    "Affordable Mehndi Artist in Noida",
    "Professional Mehndi Designer Noida",
    "Mehndi Artist for Bridal at Home Noida",
    "Top Rated Mehndi Artist Noida",
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
    title:
      "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida | Professional Mehndi Artist",
    description:
      "Krishna Mehandi Artist - Top Bridal Mehndi Designer in Noida. Expert in Arabic, Rajasthani & Modern designs. Professional Mehndi Artist for weddings, Karwa Chauth, festivals. 10+ years experience. Home visits available across Noida, Greater Noida, Sector 18, Extension.",
    url: "https://krishnamehandi.vercel.app",
    siteName: "Krishna Mehandi Artist",
    images: [
      {
        url: "/logo/KrishnaMehandiLogo.png",
        width: 1200,
        height: 630,
        alt: "Krishna Mehandi Artist - Best Bridal Mehndi Designer in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Mehandi Artist | Best Bridal Mehndi Designer in Noida",
    description:
      "Top Bridal Mehndi Designer in Noida. Expert in Arabic, Rajasthani & Modern designs. 10+ years experience. Book now for beautiful henna art!",
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
