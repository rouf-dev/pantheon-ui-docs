import { CodeBlock } from "@/components/docs/code-block";

export default function SplitDialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Split Dialog</h1>
        <p className="text-lg text-muted-foreground">
          Dialog with split content sections for complex layouts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { SplitDialog } from "@rouf-dev/pantheon-ui";

<SplitDialog
  trigger={<Button>Open Dialog</Button>}
  leftContent={<div>Left section</div>}
  rightContent={<div>Right section</div>}
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <p className="text-muted-foreground">
          Full interactive examples coming soon. SplitDialog enables side-by-side content organization.
        </p>
      </div>
    </div>
  );
}
