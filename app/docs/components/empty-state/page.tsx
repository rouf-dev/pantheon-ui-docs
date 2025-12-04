import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { EmptyState } from "@/components/ui";

export default function EmptyStatePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Empty State</h1>
        <p className="text-lg text-muted-foreground">
          Display for empty data or no results scenarios.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { EmptyState } from "@rouf-dev/pantheon-ui";

<EmptyState
  title="No results found"
  description="Try adjusting your search or filter to find what you're looking for."
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<EmptyState
  title="No projects yet"
  description="Get started by creating your first project."
/>`}
            >
              <EmptyState
                title="No projects yet"
                description="Get started by creating your first project."
              />
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
