import { CodeBlock } from "@/components/docs/code-block";

export default function UseDisclosurePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useDisclosure</h1>
        <p className="text-lg text-muted-foreground">
          Boolean state management with open/close/toggle methods.
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

import { useDisclosure } from "@rouf-dev/pantheon-ui";
import { Button, Dialog } from "@rouf-dev/pantheon-ui";

export function ModalDemo() {
  const { isOpen, open, close, toggle } = useDisclosure();

  return (
    <div>
      <Button onClick={open}>Open Modal</Button>
      <Dialog open={isOpen} onOpenChange={close}>
        {/* Dialog content */}
      </Dialog>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>isOpen</code>: Boolean state</p>
          <p className="text-sm"><code>open</code>: Function to set state to true</p>
          <p className="text-sm"><code>close</code>: Function to set state to false</p>
          <p className="text-sm"><code>toggle</code>: Function to toggle state</p>
        </div>
      </div>
    </div>
  );
}
