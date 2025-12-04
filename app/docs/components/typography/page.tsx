import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Typography } from "@/components/ui";

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Semantic text components for consistent typography.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Typography } from "@rouf-dev/pantheon-ui";

// Using variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="p">Paragraph text</Typography>
<Typography variant="code">inline code</Typography>

// Using as prop for semantic HTML
<Typography as="h1" variant="h1">Semantic H1</Typography>
<Typography as="p" variant="muted">Muted paragraph</Typography>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Headings</h3>
            <ComponentPreview
              code={`<div className="space-y-4">
  <Typography variant="h1">Heading 1</Typography>
  <Typography variant="h2">Heading 2</Typography>
  <Typography variant="h3">Heading 3</Typography>
  <Typography variant="h4">Heading 4</Typography>
</div>`}
            >
              <div className="space-y-4">
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Body Text</h3>
            <ComponentPreview
              code={`<div className="space-y-4">
  <Typography variant="lead">Lead text that stands out</Typography>
  <Typography variant="p">Regular paragraph text</Typography>
  <Typography variant="large">Large text</Typography>
  <Typography variant="small">Small text</Typography>
  <Typography variant="muted">Muted text</Typography>
</div>`}
            >
              <div className="space-y-4">
                <Typography variant="lead">Lead text that stands out</Typography>
                <Typography variant="p">Regular paragraph text</Typography>
                <Typography variant="large">Large text</Typography>
                <Typography variant="small">Small text</Typography>
                <Typography variant="muted">Muted text</Typography>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Code</h3>
            <ComponentPreview
              code={`<div className="space-y-4">
  <Typography variant="p">
    Use <Typography as="code" variant="code">inline code</Typography> in text
  </Typography>
  <Typography as="code" variant="code">
    const greeting = "Hello World";
  </Typography>
</div>`}
            >
              <div className="space-y-4">
                <Typography variant="p">
                  Use <Typography as="code" variant="code">inline code</Typography> in text
                </Typography>
                <Typography as="code" variant="code">
                  const greeting = &quot;Hello World&quot;;
                </Typography>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Semantic HTML</h3>
            <ComponentPreview
              code={`<div className="space-y-4">
  <Typography as="h1" variant="h1">Semantic H1</Typography>
  <Typography as="p" variant="muted">Muted paragraph</Typography>
  <Typography as="span" variant="small">Small span</Typography>
</div>`}
            >
              <div className="space-y-4">
                <Typography as="h1" variant="h1">Semantic H1</Typography>
                <Typography as="p" variant="muted">Muted paragraph</Typography>
                <Typography as="span" variant="small">Small span</Typography>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Variants</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code> - Heading styles</li>
          <li><code>p</code> - Paragraph text</li>
          <li><code>lead</code> - Lead paragraph (larger)</li>
          <li><code>large</code> - Large text</li>
          <li><code>small</code> - Small text</li>
          <li><code>muted</code> - Muted/secondary text</li>
          <li><code>code</code> - Inline code styling</li>
        </ul>
      </div>
    </div>
  );
}
