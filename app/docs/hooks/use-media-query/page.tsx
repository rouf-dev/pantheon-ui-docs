import { CodeBlock } from "@/components/docs/code-block";

export default function UseMediaQueryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useMediaQuery</h1>
        <p className="text-lg text-muted-foreground">
          Match CSS media queries reactively for responsive behavior.
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

import { useMediaQuery } from "@rouf-dev/pantheon-ui";

export function ResponsiveDemo() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <div>
      <p>Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Desktop: {isDesktop ? 'Yes' : 'No'}</p>
      <p>Prefers dark: {prefersDark ? 'Yes' : 'No'}</p>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>query</code>: CSS media query string</p>
        </div>
      </div>
    </div>
  );
}
