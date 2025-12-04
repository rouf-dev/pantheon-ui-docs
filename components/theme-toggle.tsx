"use client";

import { useTheme } from "@rouf-dev/pantheon-ui";
import { Button } from "@/components/ui";

export function ThemeToggle() {
  const { appearance, setAppearance } = useTheme();

  const toggleTheme = () => {
    setAppearance(appearance === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {appearance === "dark" ? "🌞" : "🌙"}
    </Button>
  );
}
