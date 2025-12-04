import { CodeBlock } from "@/components/docs/code-block";

export default function DialogDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Dialog</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A modal dialog component for displaying content in a focused overlay.
      </p>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code={`pnpm install @rouf-dev/pantheon-ui`} language="bash" />
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@rouf-dev/pantheon-ui";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>Dialog content goes here.</p>
      </DialogContent>
    </Dialog>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="mb-12">
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground">
            📝 Full interactive examples coming soon. The Dialog component includes trigger, content, header, title, description, and footer sub-components.
          </p>
        </div>
      </section>
    </div>
  );
}
