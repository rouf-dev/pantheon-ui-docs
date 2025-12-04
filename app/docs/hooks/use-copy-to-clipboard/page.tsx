import { CodeBlock } from "@/components/docs/code-block";

export default function UseCopyToClipboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">useCopyToClipboard</h1>
        <p className="text-lg text-muted-foreground">
          Copy text to clipboard with status feedback.
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

import { useCopyToClipboard } from "@rouf-dev/pantheon-ui";
import { Button } from "@rouf-dev/pantheon-ui";

export function CopyDemo() {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy("Hello, World!");
  };

  return (
    <div>
      <Button onClick={handleCopy}>
        {copiedText ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Return Value</h2>
        <div className="space-y-2">
          <p className="text-sm"><code>[copiedText, copy]</code>: Tuple with copied text and copy function</p>
        </div>
      </div>
    </div>
  );
}
