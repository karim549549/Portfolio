import type { Metadata } from "next";
import { Geist, Geist_Mono, Caprasimo, Raleway } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import ThemeProvider from "@/services/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const railways = Raleway({
  variable: "--font-railways",
  subsets: ["latin"],
});

const caprasimo = Caprasimo({
  weight: ['400'],
  variable: '--font-caprasimo',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = localFont({
  src: [
    {
      path: '../assets/Oswald/Oswald-VariableFont_wght.ttf',
      weight: 'variable',
      style: 'normal',
    },
  ],
  variable: '--font-oswald',
  display: 'swap',
});

const press2p = localFont({
  src: [
    {
      path: '../assets/Press_Start_2P/PressStart2P-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-press2p',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Karim's Portfolio | Full-Stack Developer",
  description: "Portfolio of Karim, a passionate Full-Stack Developer specializing in modern web technologies, UI/UX, and scalable solutions.",
  keywords: [
    "Karim",
    "Portfolio",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "UI/UX",
    "Web Development",
    "Frontend",
    "Backend",
    "JavaScript",
    "TypeScript"
  ],
  authors: [{ name: "Karim" }],
  openGraph: {
    title: "Karim's Portfolio | Full-Stack Developer",
    description: "Portfolio of Karim, a passionate Full-Stack Developer specializing in modern web technologies, UI/UX, and scalable solutions.",
    url: "https://your-portfolio-url.com/",
    siteName: "Karim's Portfolio",
    images: [
      {
        url: "/proImage.jpg",
        width: 800,
        height: 600,
        alt: "Karim - Full-Stack Developer"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={` ${railways.variable}  ${caprasimo.variable} ${oswald.variable} ${press2p.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
