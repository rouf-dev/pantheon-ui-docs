import { CodeBlock } from "@/components/docs/code-block";

export default function UseKeyboardShortcutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useKeyboardShortcut</h1>
        <p className="text-lg text-muted-foreground">
          Register global keyboard shortcuts for command palettes and actions.
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

import { useKeyboardShortcut } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

export function CommandPaletteDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useKeyboardShortcut(['Meta', 'k'], () => {
    setIsOpen(true);
  });

  useKeyboardShortcut(['Control', 's'], (e) => {
    e.preventDefault();
    console.log('Save triggered');
  });

  return <div>{isOpen && <div>Command Palette</div>}</div>;
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>keys</code>: Array of key names (e.g., [&apos;Meta&apos;, &apos;k&apos;])</p>
          <p className="text-sm"><code>callback</code>: Function to execute when shortcut is pressed</p>
        </div>
      </div>
    </div>
  );
}
