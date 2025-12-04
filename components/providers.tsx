"use client";

import { ThemeProvider as PantheonThemeProvider } from "@rouf-dev/pantheon-ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PantheonThemeProvider defaultMode="system">
      {children}
    </PantheonThemeProvider>
  );
}
