import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Progress } from "@/components/ui";

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Progress bar indicator to show completion status.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Progress } from "@rouf-dev/pantheon-ui";

<Progress value={33} />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Progress value={33} className="w-[60%]" />`}
            >
              <Progress value={33} className="w-[60%]" />
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Different Values</h3>
            <ComponentPreview
              code={`<div className="space-y-4 w-[60%]">
  <Progress value={0} />
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
            >
              <div className="space-y-4 w-[60%]">
                <Progress value={0} />
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
