import { CodeBlock } from "@/components/docs/code-block";

export default function UseClickOutsidePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useClickOutside</h1>
        <p className="text-lg text-muted-foreground">
          Detect clicks outside an element for closing dropdowns and modals.
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

import { useClickOutside } from "@rouf-dev/pantheon-ui";
import { useRef, useState } from "react";

export function DropdownDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>ref</code>: React ref object for the target element</p>
          <p className="text-sm"><code>handler</code>: Callback function executed on outside click</p>
        </div>
      </div>
    </div>
  );
}
