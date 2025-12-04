import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { AspectRatio } from "@/components/ui";
import Image from "next/image";

export default function AspectRatioPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">AspectRatio</h1>
        <p className="text-lg text-muted-foreground">
          Maintain consistent aspect ratios for responsive images and media.
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
{`import { AspectRatio } from "@rouf-dev/pantheon-ui";

<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="Description" className="object-cover" />
</AspectRatio>`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">16:9 Ratio</h3>
            <ComponentPreview
              code={`<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
  <div className="flex items-center justify-center h-full">
    <span className="text-muted-foreground">16:9 Aspect Ratio</span>
  </div>
</AspectRatio>`}
            >
              <div className="w-full max-w-md">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">16:9 Aspect Ratio</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4:3 Ratio</h3>
            <ComponentPreview
              code={`<AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
  <div className="flex items-center justify-center h-full">
    <span className="text-muted-foreground">4:3 Aspect Ratio</span>
  </div>
</AspectRatio>`}
            >
              <div className="w-full max-w-md">
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">4:3 Aspect Ratio</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">1:1 (Square)</h3>
            <ComponentPreview
              code={`<AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
  <div className="flex items-center justify-center h-full">
    <span className="text-muted-foreground">1:1 Square</span>
  </div>
</AspectRatio>`}
            >
              <div className="w-full max-w-md">
                <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">1:1 Square</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
