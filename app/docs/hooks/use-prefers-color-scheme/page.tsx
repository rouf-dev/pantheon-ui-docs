import { CodeBlock } from "@/components/docs/code-block";

export default function UsePrefersColorSchemePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">usePrefersColorScheme</h1>
        <p className="text-lg text-muted-foreground">
          Detect system dark/light mode preference.
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

import { usePrefersColorScheme } from "@rouf-dev/pantheon-ui";

export function ThemeDetector() {
  const colorScheme = usePrefersColorScheme();

  return (
    <div>
      <p>System prefers: {colorScheme}</p>
      {colorScheme === 'dark' && <p>Dark mode detected</p>}
      {colorScheme === 'light' && <p>Light mode detected</p>}
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>&apos;light&apos; | &apos;dark&apos;</code>: System color scheme preference</p>
        </div>
      </div>
    </div>
  );
}
