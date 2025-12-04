import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label, Switch } from "@/components/ui";

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Switch</h1>
        <p className="text-lg text-muted-foreground">
          Toggle switch control for boolean settings.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Switch } from "@rouf-dev/pantheon-ui";

<Switch id="airplane-mode" />`}
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
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
            >
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Description</h3>
            <ComponentPreview
              code={`<div className="flex items-center space-x-2">
  <Switch id="marketing-emails" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="marketing-emails" className="text-sm font-medium">
      Marketing emails
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>`}
            >
              <div className="flex items-center space-x-2">
                <Switch id="marketing-emails" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing-emails" className="text-sm font-medium">
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
