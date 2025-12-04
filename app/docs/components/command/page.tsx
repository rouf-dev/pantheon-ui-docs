import { CodeBlock } from "@/components/docs/code-block";

export default function CommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Command</h1>
        <p className="text-lg text-muted-foreground">
          Command palette / search interface with keyboard shortcuts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui cmdk" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@rouf-dev/pantheon-ui";

<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        Calendar
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <p className="text-muted-foreground">
          Full interactive examples coming soon. Command provides powerful command palette functionality with search and keyboard navigation.
        </p>
      </div>
    </div>
  );
}
