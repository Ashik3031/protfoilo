import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";

const skyscapers = localFont({
  src: "../../public/fonts/Skyscapers.ttf",
  variable: "--font-skyscapers",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ashik | Creative Developer Portfolio",
  description: "Full-Stack Developer specializing in MERN, React Native, and scalable web systems. Building products that work.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%23ff4800'/><text y='.9em' font-size='80' font-family='Arial Black,sans-serif' font-weight='900' fill='white' x='50%' text-anchor='middle' dominant-baseline='hanging' dy='8'>A</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <Loader />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
