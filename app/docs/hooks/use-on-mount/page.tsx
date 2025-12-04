import { CodeBlock } from "@/components/docs/code-block";

export default function UseOnMountPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useOnMount</h1>
        <p className="text-lg text-muted-foreground">
          Run effect only once on component mount.
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

import { useOnMount } from "@rouf-dev/pantheon-ui";

export function DataFetcherDemo() {
  useOnMount(() => {
    console.log('Component mounted');
    fetchData();
  });

  return <div>Content</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>callback</code>: Function to execute on mount</p>
        </div>
      </div>
    </div>
  );
}
