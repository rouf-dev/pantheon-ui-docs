import { CodeBlock } from "@/components/docs/code-block";

export default function UseOnUnmountPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useOnUnmount</h1>
        <p className="text-lg text-muted-foreground">
          Run cleanup only on component unmount.
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

import { useOnUnmount } from "@rouf-dev/pantheon-ui";

export function SubscriptionDemo() {
  useOnUnmount(() => {
    console.log('Component unmounting');
    unsubscribe();
    cleanup();
  });

  return <div>Content</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>callback</code>: Cleanup function to execute on unmount</p>
        </div>
      </div>
    </div>
  );
}
