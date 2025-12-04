import { CodeBlock } from "@/components/docs/code-block";

export default function UseLocalStoragePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useLocalStorage</h1>
        <p className="text-lg text-muted-foreground">
          Persist state to localStorage with SSR-safe implementation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`"use client";

import { useLocalStorage } from "@rouf-dev/pantheon-ui";

export function ThemeDemo() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('light')}>Light Mode</button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>key</code>: localStorage key name</p>
          <p className="text-sm"><code>initialValue</code>: Default value if key doesn&apos;t exist</p>
        </div>
      </div>
    </div>
  );
}
