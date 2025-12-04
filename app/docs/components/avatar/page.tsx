import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          User profile picture with automatic fallback display.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Avatar, AvatarImage, AvatarFallback } from "@rouf-dev/pantheon-ui";

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Fallback Only</h3>
            <ComponentPreview
              code={`<div className="flex gap-2">
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>CD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>EF</AvatarFallback>
  </Avatar>
</div>`}
            >
              <div className="flex gap-2">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
