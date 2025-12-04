import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label, Slider } from "@/components/ui";

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Slider</h1>
        <p className="text-lg text-muted-foreground">
          Range slider input for selecting numeric values.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Slider } from "@rouf-dev/pantheon-ui";

<Slider defaultValue={[50]} max={100} step={1} />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />`}
            >
              <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Label</h3>
            <ComponentPreview
              code={`<div className="grid w-full max-w-sm items-center gap-2">
  <Label htmlFor="volume">Volume</Label>
  <Slider id="volume" defaultValue={[75]} max={100} step={1} />
</div>`}
            >
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="volume">Volume</Label>
                <Slider id="volume" defaultValue={[75]} max={100} step={1} />
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
