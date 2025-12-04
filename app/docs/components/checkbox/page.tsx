import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Checkbox, Label } from "@/components/ui";

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          Checkable input control for boolean selections.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Checkbox } from "@rouf-dev/pantheon-ui";

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms and conditions</label>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
            >
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <Label htmlFor="terms1">Accept terms and conditions</Label>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Text</h3>
            <ComponentPreview
              code={`<div className="flex items-center space-x-2">
  <Checkbox id="marketing" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="marketing" className="text-sm font-medium">
      Marketing emails
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>`}
            >
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing" className="text-sm font-medium">
                    Marketing emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and features.
                  </p>
                </div>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
