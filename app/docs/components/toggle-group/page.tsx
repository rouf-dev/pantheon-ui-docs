import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui";

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Toggle Group</h1>
        <p className="text-lg text-muted-foreground">
          Group of toggle buttons with single or multiple selection.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { ToggleGroup, ToggleGroupItem } from "@rouf-dev/pantheon-ui";

<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Single Selection</h3>
            <ComponentPreview
              code={`<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
            >
              <ToggleGroup type="single">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Multiple Selection</h3>
            <ComponentPreview
              code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
  <ToggleGroupItem value="strikethrough">S</ToggleGroupItem>
</ToggleGroup>`}
            >
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">B</ToggleGroupItem>
                <ToggleGroupItem value="italic">I</ToggleGroupItem>
                <ToggleGroupItem value="underline">U</ToggleGroupItem>
                <ToggleGroupItem value="strikethrough">S</ToggleGroupItem>
              </ToggleGroup>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
