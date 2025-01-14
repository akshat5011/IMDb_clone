import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDb Clone",
  description: "Clone of IMDb website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* Provider at client side. rest all its components(Header,Nav,search) are at server side */}
        <Providers>   
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* Search box */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
