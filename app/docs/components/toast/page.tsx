import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui";

export default function ToastPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Toast</h1>
        <p className="text-lg text-muted-foreground">
          Temporary notification messages with automatic dismiss.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { toast, Toaster } from "@rouf-dev/pantheon-ui";

// Add Toaster to your root layout
<Toaster />

// Then use toast anywhere
toast.success("Settings saved successfully");
toast.error("Failed to save settings");
toast.info("New message received");`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <ComponentPreview
              code={`<Button
  onClick={() => toast.success("Event has been created")}
>
  Show Toast
</Button>`}
            >
              <Button
                onClick={() => {
                  // Note: This requires Toaster to be added to layout
                  if (typeof window !== 'undefined') {
                    alert('Toast functionality requires Toaster component in layout');
                  }
                }}
              >
                Show Toast
              </Button>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
