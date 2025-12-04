import { CodeBlock } from "@/components/docs/code-block";

export default function UseTogglePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useToggle</h1>
        <p className="text-lg text-muted-foreground">
          Boolean toggle with callbacks for on/off states.
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

import { useToggle } from "@rouf-dev/pantheon-ui";
import { Button } from "@rouf-dev/pantheon-ui";

export function ToggleDemo() {
  const [isOn, toggle, setOn, setOff] = useToggle(false);

  return (
    <div>
      <p>State: {isOn ? 'On' : 'Off'}</p>
      <Button onClick={toggle}>Toggle</Button>
      <Button onClick={setOn}>Turn On</Button>
      <Button onClick={setOff}>Turn Off</Button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>[isOn, toggle, setOn, setOff]</code>: Tuple with state and control functions</p>
        </div>
      </div>
    </div>
  );
}
