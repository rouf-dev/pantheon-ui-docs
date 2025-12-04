import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Spinner } from "@/components/ui";

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Spinner</h1>
        <p className="text-lg text-muted-foreground">
          Loading spinner animation with multiple sizes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Spinner } from "@rouf-dev/pantheon-ui";

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Sizes</h3>
            <ComponentPreview
              code={`<div className="flex items-center gap-4">
  <Spinner />
  <Spinner size="sm" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>`}
            >
              <div className="flex items-center gap-4">
                <Spinner />
                <Spinner size="sm" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
