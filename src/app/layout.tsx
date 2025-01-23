import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishProvider } from "@/Context/wishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morent Rental Marketplace - Best Rental Cars in Town",
  description:
    "Discover flexible car rental solutions with our user-friendly platform. Rent cars for any occasion, enjoy affordable rates, and choose from a variety of delivery and pickup options. Book now and travel hassle-free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WishProvider>
          <Header/>
          {children}
          <Footer/>
        </WishProvider>
      </body>
    </html>
  );
}

