import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Toggle } from "@/components/ui";

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          Toggleable button state for on/off controls.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Toggle } from "@rouf-dev/pantheon-ui";

<Toggle aria-label="Toggle bold">
  Bold
</Toggle>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<div className="flex gap-2">
  <Toggle aria-label="Toggle bold">B</Toggle>
  <Toggle aria-label="Toggle italic">I</Toggle>
  <Toggle aria-label="Toggle underline">U</Toggle>
</div>`}
            >
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">B</Toggle>
                <Toggle aria-label="Toggle italic">I</Toggle>
                <Toggle aria-label="Toggle underline">U</Toggle>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Variants</h3>
            <ComponentPreview
              code={`<div className="flex gap-2">
  <Toggle variant="default">Default</Toggle>
  <Toggle variant="outline">Outline</Toggle>
</div>`}
            >
              <div className="flex gap-2">
                <Toggle variant="default">Default</Toggle>
                <Toggle variant="outline">Outline</Toggle>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
