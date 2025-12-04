import { CodeBlock } from "@/components/docs/code-block";

export default function UseFocusTrapPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useFocusTrap</h1>
        <p className="text-lg text-muted-foreground">
          Trap focus within an element for modal accessibility.
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

import { useFocusTrap } from "@rouf-dev/pantheon-ui";
import { useRef } from "react";

export function ModalDemo() {
  const modalRef = useRef(null);
  useFocusTrap(modalRef, true); // true = trap is active

  return (
    <div ref={modalRef}>
      <button>First focusable</button>
      <input type="text" />
      <button>Last focusable</button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>ref</code>: React ref for the container element</p>
          <p className="text-sm"><code>active</code>: Boolean to enable/disable focus trap</p>
        </div>
      </div>
    </div>
  );
}
