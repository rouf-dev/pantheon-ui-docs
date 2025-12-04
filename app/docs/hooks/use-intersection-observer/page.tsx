import { CodeBlock } from "@/components/docs/code-block";

export default function UseIntersectionObserverPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useIntersectionObserver</h1>
        <p className="text-lg text-muted-foreground">
          Detect element visibility in viewport for lazy loading and infinite scroll.
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

import { useIntersectionObserver } from "@rouf-dev/pantheon-ui";
import { useRef } from "react";

export function LazyImageDemo() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div ref={ref}>
      {isVisible && <img src="/image.jpg" alt="Lazy loaded" />}
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>ref</code>: React ref for the target element</p>
          <p className="text-sm"><code>options</code>: IntersectionObserver options (threshold, root, rootMargin)</p>
        </div>
      </div>
    </div>
  );
}
