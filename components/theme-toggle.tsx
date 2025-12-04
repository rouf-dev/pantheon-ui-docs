"use client";

import { useTheme } from "@rouf-dev/pantheon-ui";
import { Button } from "@/components/ui";

export function ThemeToggle() {
  const { resolvedTheme, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? "🌞" : "🌙"}
    </Button>
  );
}
