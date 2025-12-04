import { CodeBlock } from "@/components/docs/code-block";

export default function UsePrefersReducedMotionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">usePrefersReducedMotion</h1>
        <p className="text-lg text-muted-foreground">
          Detect user&apos;s motion preference for accessibility.
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

import { usePrefersReducedMotion } from "@rouf-dev/pantheon-ui";

export function AnimatedComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={prefersReducedMotion ? '' : 'animate-slide-in'}
    >
      {prefersReducedMotion 
        ? 'Animations disabled for accessibility'
        : 'Animated content'}
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>boolean</code>: True if user prefers reduced motion</p>
        </div>
      </div>
    </div>
  );
}
