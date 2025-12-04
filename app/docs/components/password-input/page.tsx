import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label, PasswordInput } from "@/components/ui";

export default function PasswordInputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Password Input</h1>
        <p className="text-lg text-muted-foreground">
          Password input with visibility toggle button.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { PasswordInput } from "@rouf-dev/pantheon-ui";

<PasswordInput placeholder="Enter password" />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<PasswordInput placeholder="Enter your password" />`}
            >
              <PasswordInput placeholder="Enter your password" className="w-full max-w-md" />
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Label</h3>
            <ComponentPreview
              code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="password">Password</Label>
  <PasswordInput id="password" placeholder="Enter your password" />
</div>`}
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <PasswordInput id="password" placeholder="Enter your password" />
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
