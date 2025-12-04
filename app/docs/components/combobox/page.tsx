import { CodeBlock } from "@/components/docs/code-block";

export default function ComboboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          Advanced searchable combobox with async API support, rich display, grouping, infinite scroll, and create new options.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui cmdk" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        
        <h3 className="text-lg font-semibold">Basic Static Options</h3>
        <CodeBlock
          code={`import { Combobox } from "@rouf-dev/pantheon-ui";

<Combobox
  options={[
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
  ]}
  placeholder="Select framework..."
  value={value}
  onValueChange={setValue}
/>`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">Async API Search</h3>
        <CodeBlock
          code={`// Use onSearch prop for async data fetching
<Combobox
  onSearch={async (query) => {
    const res = await fetch(\`/api/users?q=\${query}\`);
    return res.json();
  }}
  debounceMs={500}
  minSearchLength={2}
  placeholder="Search users..."
  value={value}
  onValueChange={setValue}
/>`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">Rich Display with Avatars</h3>
        <CodeBlock
          code={`<Combobox
  options={users.map(u => ({
    value: u.id,
    label: u.name,
    description: u.email,
    avatar: u.avatarUrl
  }))}
  richDisplay
  placeholder="Select user..."
  value={value}
  onValueChange={setValue}
/>`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">With Create New Option</h3>
        <CodeBlock
          code={`<Combobox
  options={tags}
  allowCreate
  createText="Create tag"
  onCreate={(query) => createTag(query)}
  placeholder="Select or create tag..."
  value={value}
  onValueChange={setValue}
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Static options or async API search with <code>onSearch</code></li>
          <li>Rich display mode with avatars and descriptions</li>
          <li>Grouped options by category</li>
          <li>Create new option on the fly</li>
          <li>Infinite scroll support</li>
          <li>Customizable debounce and minimum search length</li>
          <li>Custom render functions for options and values</li>
        </ul>
      </div>
    </div>
  );
}
