import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Label, Textarea } from "@/components/ui";

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Multi-line text input for longer form content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Textarea } from "@rouf-dev/pantheon-ui";

<Textarea placeholder="Type your message here" />`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Textarea placeholder="Type your message here" />`}
            >
              <Textarea placeholder="Type your message here" className="w-full max-w-md" />
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Label</h3>
            <ComponentPreview
              code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here" />
  <p className="text-sm text-muted-foreground">
    Your message will be sent to our support team.
  </p>
</div>`}
            >
              <div className="grid w-full max-w-md gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" placeholder="Type your message here" />
                <p className="text-sm text-muted-foreground">
                  Your message will be sent to our support team.
                </p>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
