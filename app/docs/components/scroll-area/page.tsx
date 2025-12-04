import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { ScrollArea, Separator } from "@/components/ui";

export default function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">ScrollArea</h1>
        <p className="text-lg text-muted-foreground">
          Custom styled scrollable area with smooth scrolling behavior.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock language="bash">
          pnpm add @rouf-dev/pantheon-ui
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock language="tsx">
{`import { ScrollArea } from "@rouf-dev/pantheon-ui";

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {/* Your scrollable content */}
  </div>
</ScrollArea>`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Vertical Scroll</h3>
            <ComponentPreview
              code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">
        Tag {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
            >
              <ScrollArea className="h-72 w-48 rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {Array.from({ length: 50 }).map((_, i) => (
                    <>
                      <div key={i} className="text-sm py-1">
                        Tag {i + 1}
                      </div>
                      {i < 49 && <Separator className="my-2" />}
                    </>
                  ))}
                </div>
              </ScrollArea>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Horizontal Scroll</h3>
            <ComponentPreview
              code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="h-32 w-32 rounded-md bg-muted flex items-center justify-center">
          Item {i + 1}
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`}
            >
              <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="shrink-0">
                      <div className="h-32 w-32 rounded-md bg-muted flex items-center justify-center text-sm">
                        Item {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
