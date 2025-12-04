import { CodeBlock } from "@/components/docs/code-block";

export default function InputDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Input</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A text input component for forms and user input.
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
          code={`import { Input } from "@rouf-dev/pantheon-ui";

export default function Example() {
  return (
    <Input 
      type="text" 
      placeholder="Enter your name"
    />
  );
}`}
          language="tsx"
        />
      </section>

      <section className="mb-12">
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground">
            📝 Full interactive examples coming soon. The Input component supports various types including text, email, password, number, and more.
          </p>
        </div>
      </section>
    </div>
  );
}
