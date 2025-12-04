import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          Collapsible content sections with smooth expand/collapse animations.
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
{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@rouf-dev/pantheon-ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Single Item</h3>
            <ComponentPreview
              code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the Pantheon UI aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses smooth animations powered by Radix UI primitives.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the Pantheon UI aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It uses smooth animations powered by Radix UI primitives.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Multiple Items</h3>
            <ComponentPreview
              code={`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes! Use type="multiple" to allow multiple items to be open simultaneously.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What else can it do?</AccordionTrigger>
    <AccordionContent>
      You can customize styling, add icons, and control state programmatically.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            >
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Use type="multiple" to allow multiple items to be open simultaneously.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What else can it do?</AccordionTrigger>
                  <AccordionContent>
                    You can customize styling, add icons, and control state programmatically.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
