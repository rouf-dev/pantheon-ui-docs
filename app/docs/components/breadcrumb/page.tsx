import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage as BreadcrumbPageComponent,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui";

export default function BreadcrumbPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Breadcrumb</h1>
        <p className="text-lg text-muted-foreground">
          Navigation trail showing the current page hierarchy.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@rouf-dev/pantheon-ui";

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>`}
            >
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPageComponent>Breadcrumb</BreadcrumbPageComponent>
                </BreadcrumbItem>
              </Breadcrumb>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
