import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label } from "@/components/ui";

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Label</h1>
        <p className="text-lg text-muted-foreground">
          Accessible form label with proper semantics.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Label } from "@rouf-dev/pantheon-ui";

<Label htmlFor="email">Email</Label>
<input id="email" type="email" />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Label>Your email address</Label>`}
            >
              <Label>Your email address</Label>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Required Indicator</h3>
            <ComponentPreview
              code={`<Label>
  Email <span className="text-destructive">*</span>
</Label>`}
            >
              <Label>
                Email <span className="text-destructive">*</span>
              </Label>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
