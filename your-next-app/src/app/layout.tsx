import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are applied globally
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Industry",
  description: "Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} bg-white text-black`}> 
        {/* ✅ Ensure default theme styles apply to body */}
        <ThemeProvider attribute="class" defaultTheme="light"> {/* Ensures Light Mode */}
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
