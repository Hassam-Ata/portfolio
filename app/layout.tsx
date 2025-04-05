import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassam Ata",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/letter-h-svgrepo-com.svg",
        href: "/images/letter-h-svgrepo-com.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/letter-h-svgrepo-com.svg",
        href: "/images/letter-h-svgrepo-com.svg",
      },
    ],
  },

  description:
    "Portfolio of Hassam Ata, a MERN Developer based in Karachi, Pakistan",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
