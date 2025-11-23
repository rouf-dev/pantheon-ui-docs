
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@rouf-dev/pantheon-ui/styles'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantheon UI - Universal Design System",
  description: "Documentation for Pantheon UI - A comprehensive design system for the Pantheon Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
