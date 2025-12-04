import { Button } from "@/components/ui";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";

export default function ButtonDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Button</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Displays a button or a component that looks like a button.
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
          code={`import { Button } from "@rouf-dev/pantheon-ui";

export default function Example() {
  return <Button>Click me</Button>;
}`}
          language="tsx"
        />
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <ComponentPreview
          title="Default"
          code={`<Button>Default Button</Button>`}
        >
          <Button>Default Button</Button>
        </ComponentPreview>

        <ComponentPreview
          title="Variants"
          code={`<div className="flex gap-4">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`}
        >
          <div className="flex gap-4 flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Sizes"
          code={`<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>`}
        >
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Animation"
          code={`<div className="flex gap-4">
  <Button animation="press">Press Animation</Button>
  <Button animation="bounce">Bounce Animation</Button>
</div>`}
        >
          <div className="flex gap-4">
            <Button animation="press">Press Animation</Button>
            <Button animation="bounce">Bounce Animation</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Props */}
      <section className="mb-12">
        <PropsTable
          data={[
            {
              name: "variant",
              type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
              default: '"default"',
              description: "The visual style variant of the button",
            },
            {
              name: "size",
              type: '"sm" | "default" | "lg" | "icon"',
              default: '"default"',
              description: "The size of the button",
            },
            {
              name: "animation",
              type: '"press" | "bounce" | "squash" | false',
              default: '"press"',
              description: "The animation style for the button",
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: "Render as child element (for Next.js Link, etc.)",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the button",
            },
          ]}
        />
      </section>
    </div>
  );
}
