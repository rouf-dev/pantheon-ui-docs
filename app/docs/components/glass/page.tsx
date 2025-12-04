import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Glass } from "@/components/ui";

export default function GlassPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Glass</h1>
        <p className="text-lg text-muted-foreground">
          Glassmorphism effect container with customizable blur intensity.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Glass } from "@rouf-dev/pantheon-ui";

<Glass variant="light">
  Content with light glass effect
</Glass>

<Glass variant="medium">
  Content with medium glass effect
</Glass>

<Glass variant="heavy">
  Content with heavy glass effect
</Glass>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Variants</h3>
            <ComponentPreview
              code={`<div className="space-y-4 p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
  <Glass variant="light" className="p-4 rounded-lg">
    <p className="text-sm">Light glass effect</p>
  </Glass>
  <Glass intensity="medium" className="p-4 rounded-lg">
    <p className="text-sm">Medium glass effect</p>
  </Glass>
  <Glass intensity="heavy" className="p-4 rounded-lg">
    <p className="text-sm">Heavy glass effect</p>
  </Glass>
</div>`}
            >
              <div className="space-y-4 p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Glass intensity="light" className="p-4 rounded-lg">
                  <p className="text-sm">Light glass effect</p>
                </Glass>
                <Glass intensity="medium" className="p-4 rounded-lg">
                  <p className="text-sm">Medium glass effect</p>
                </Glass>
                <Glass intensity="heavy" className="p-4 rounded-lg">
                  <p className="text-sm">Heavy glass effect</p>
                </Glass>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
