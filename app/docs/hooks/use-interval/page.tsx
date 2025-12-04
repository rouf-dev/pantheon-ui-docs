import { CodeBlock } from "@/components/docs/code-block";

export default function UseIntervalPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useInterval</h1>
        <p className="text-lg text-muted-foreground">
          setInterval with automatic cleanup for polling and timers.
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

import { useInterval } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

export function TimerDemo() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000); // Update every second

  return <div>Count: {count}</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>callback</code>: Function to execute on each interval</p>
          <p className="text-sm"><code>delay</code>: Interval delay in milliseconds (null to pause)</p>
        </div>
      </div>
    </div>
  );
}
