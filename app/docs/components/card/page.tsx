import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui";

export default function CardDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Card</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A versatile card container for organizing content with header, body, and footer sections.
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
          code={`import { Card, CardHeader, CardTitle, CardContent } from "@rouf-dev/pantheon-ui";

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Card content goes here.
      </CardContent>
    </Card>
  );
}`}
          language="tsx"
        />
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <ComponentPreview
          title="Basic Card"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content.</p>
  </CardContent>
</Card>`}
        >
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content.</p>
            </CardContent>
          </Card>
        </ComponentPreview>

        <ComponentPreview
          title="Card with Footer"
          code={`<Card>
  <CardHeader>
    <CardTitle>Subscribe</CardTitle>
    <CardDescription>Get updates on new features</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Enter your email to subscribe to our newsletter.</p>
  </CardContent>
  <CardFooter>
    <Button>Subscribe</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Subscribe</CardTitle>
              <CardDescription>Get updates on new features</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Enter your email to subscribe to our newsletter.</p>
            </CardContent>
            <CardFooter>
              <Button>Subscribe</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </section>

      {/* Props */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Card Props</h3>
        <PropsTable
          data={[
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
            {
              name: "children",
              type: "ReactNode",
              description: "Card content",
              required: true,
            },
          ]}
        />
      </section>
    </div>
  );
}
