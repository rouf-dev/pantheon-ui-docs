import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";

export default function CollapsiblePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          Expandable and collapsible content with smooth animations.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock language="bash">
          pnpm add @rouf-dev/pantheon-ui
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock language="tsx">
{`"use client";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@rouf-dev/pantheon-ui";
import { Button } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle Content</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4">
          This content can be expanded and collapsed.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <p className="text-muted-foreground">
          Interactive examples require client-side state management. The Collapsible component provides controlled and uncontrolled modes for managing expand/collapse behavior.
        </p>
      </div>
    </div>
  );
}
