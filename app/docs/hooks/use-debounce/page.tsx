import { CodeBlock } from "@/components/docs/code-block";

export default function UseDebounceDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">useDebounce</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A hook to debounce values and prevent excessive re-renders or API calls.
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
          code={`import { useDebounce } from "@rouf-dev/pantheon-ui";
import { useState, useEffect } from "react";

export default function SearchComponent() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // API call with debounced value
    console.log("Searching for:", debouncedSearch);
  }, [debouncedSearch]);

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}`}
          language="tsx"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parameters</h2>
        <div className="bg-muted/50 p-6 rounded-lg space-y-2">
          <div>
            <code className="text-sm">value</code> - The value to debounce
          </div>
          <div>
            <code className="text-sm">delay</code> - Delay in milliseconds (default: 500)
          </div>
        </div>
      </section>
    </div>
  );
}
