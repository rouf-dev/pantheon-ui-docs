import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Kbd } from "@/components/ui";

export default function KbdPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Kbd</h1>
        <p className="text-lg text-muted-foreground">
          Keyboard shortcut display component.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Kbd } from "@rouf-dev/pantheon-ui";

<p>Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open command menu</p>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Single Key</h3>
            <ComponentPreview
              code={`<p>Press <Kbd>Enter</Kbd> to submit</p>`}
            >
              <p>Press <Kbd>Enter</Kbd> to submit</p>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Combinations</h3>
            <ComponentPreview
              code={`<div className="space-y-2">
  <p>Command Palette: <Kbd>⌘</Kbd> <Kbd>K</Kbd></p>
  <p>Save: <Kbd>Ctrl</Kbd> <Kbd>S</Kbd></p>
  <p>Copy: <Kbd>Ctrl</Kbd> <Kbd>C</Kbd></p>
  <p>Paste: <Kbd>Ctrl</Kbd> <Kbd>V</Kbd></p>
</div>`}
            >
              <div className="space-y-2">
                <p>Command Palette: <Kbd>⌘</Kbd> <Kbd>K</Kbd></p>
                <p>Save: <Kbd>Ctrl</Kbd> <Kbd>S</Kbd></p>
                <p>Copy: <Kbd>Ctrl</Kbd> <Kbd>C</Kbd></p>
                <p>Paste: <Kbd>Ctrl</Kbd> <Kbd>V</Kbd></p>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
