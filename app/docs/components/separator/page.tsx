import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Separator } from "@/components/ui";

export default function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Separator</h1>
        <p className="text-lg text-muted-foreground">
          Visual divider line to separate content sections.
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
{`import { Separator } from "@rouf-dev/pantheon-ui";

<Separator />
<Separator orientation="vertical" />`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Horizontal</h3>
            <ComponentPreview
              code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium">Pantheon UI</h4>
    <p className="text-sm text-muted-foreground">
      A beautiful component library for modern applications.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Components</div>
    <Separator orientation="vertical" />
    <div>Hooks</div>
    <Separator orientation="vertical" />
    <div>Themes</div>
  </div>
</div>`}
            >
              <div className="w-full">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Pantheon UI</h4>
                  <p className="text-sm text-muted-foreground">
                    A beautiful component library for modern applications.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Components</div>
                  <Separator orientation="vertical" />
                  <div>Hooks</div>
                  <Separator orientation="vertical" />
                  <div>Themes</div>
                </div>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Vertical</h3>
            <ComponentPreview
              code={`<div className="flex h-20 items-center space-x-4">
  <div className="flex-1 text-center">Section 1</div>
  <Separator orientation="vertical" />
  <div className="flex-1 text-center">Section 2</div>
  <Separator orientation="vertical" />
  <div className="flex-1 text-center">Section 3</div>
</div>`}
            >
              <div className="flex h-20 items-center space-x-4">
                <div className="flex-1 text-center">Section 1</div>
                <Separator orientation="vertical" />
                <div className="flex-1 text-center">Section 2</div>
                <Separator orientation="vertical" />
                <div className="flex-1 text-center">Section 3</div>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
