import { CodeBlock } from "@/components/docs/code-block";

export default function UseIsClientPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useIsClient</h1>
        <p className="text-lg text-muted-foreground">
          Check if code is running on client for SSR-safe rendering.
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

import { useIsClient } from "@rouf-dev/pantheon-ui";

export function ClientOnlyComponent() {
  const isClient = useIsClient();

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <div>Client-side content: {window.location.href}</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>isClient</code>: Boolean indicating if code is running on client</p>
        </div>
      </div>
    </div>
  );
}
