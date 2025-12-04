import { CodeBlock } from "@/components/docs/code-block";

export default function CompanionDialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Companion Dialog</h1>
        <p className="text-lg text-muted-foreground">
          Side-by-side dialog with companion content for enhanced user experience.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { CompanionDialog } from "@rouf-dev/pantheon-ui";

<CompanionDialog
  trigger={<Button>Open Dialog</Button>}
  mainContent={<div>Primary content</div>}
  companionContent={<div>Side content</div>}
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <p className="text-muted-foreground">
          Full interactive examples coming soon. CompanionDialog provides a unique layout with main content and companion sidebar.
        </p>
      </div>
    </div>
  );
}
