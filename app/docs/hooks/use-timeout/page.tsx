import { CodeBlock } from "@/components/docs/code-block";

export default function UseTimeoutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useTimeout</h1>
        <p className="text-lg text-muted-foreground">
          setTimeout with automatic cleanup for delays and tooltips.
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

import { useTimeout } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

export function ToastDemo() {
  const [isVisible, setIsVisible] = useState(true);

  useTimeout(() => {
    setIsVisible(false);
  }, 3000); // Hide after 3 seconds

  if (!isVisible) return null;

  return <div>This will disappear in 3 seconds</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>callback</code>: Function to execute after delay</p>
          <p className="text-sm"><code>delay</code>: Delay in milliseconds (null to cancel)</p>
        </div>
      </div>
    </div>
  );
}
