import { CodeBlock } from "@/components/docs/code-block";

export default function UseSessionStoragePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useSessionStorage</h1>
        <p className="text-lg text-muted-foreground">
          Persist state to sessionStorage with SSR-safe implementation.
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

import { useSessionStorage } from "@rouf-dev/pantheon-ui";

export function WizardDemo() {
  const [step, setStep] = useSessionStorage('wizard-step', 1);

  return (
    <div>
      <p>Current step: {step}</p>
      <button onClick={() => setStep(step + 1)}>
        Next Step
      </button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>key</code>: sessionStorage key name</p>
          <p className="text-sm"><code>initialValue</code>: Default value if key doesn&apos;t exist</p>
        </div>
      </div>
    </div>
  );
}
