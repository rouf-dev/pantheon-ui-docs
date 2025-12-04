import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@rouf-dev/pantheon-ui/styles";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantheon UI - Documentation",
  description: "Component library documentation for Pantheon UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
