import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label, NumberInput } from "@/components/ui";

export default function NumberInputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Number Input</h1>
        <p className="text-lg text-muted-foreground">
          Numeric input with increment and decrement controls.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NumberInput } from "@rouf-dev/pantheon-ui";

<NumberInput placeholder="0" min={0} max={100} />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<NumberInput placeholder="Enter a number" />`}
            >
              <NumberInput placeholder="Enter a number" className="w-full max-w-md" />
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Label and Limits</h3>
            <ComponentPreview
              code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="quantity">Quantity</Label>
  <NumberInput id="quantity" min={1} max={10} defaultValue={1} />
  <p className="text-sm text-muted-foreground">
    Enter a value between 1 and 10.
  </p>
</div>`}
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="quantity">Quantity</Label>
                <NumberInput id="quantity" min={1} max={10} defaultValue={1} />
                <p className="text-sm text-muted-foreground">
                  Enter a value between 1 and 10.
                </p>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
