import Link from "next/link";
import { Button } from "@/components/ui";

export default function DocsHomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pantheon UI</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A comprehensive component library built with React, TypeScript, and Motion.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Components</h2>
          <p className="text-muted-foreground mb-4">
            Explore 57+ pre-built components with animations and theming support.
          </p>
          <Link href="/docs/components/button">
            <Button>View Components</Button>
          </Link>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Hooks</h2>
          <p className="text-muted-foreground mb-4">
            19 custom React hooks for common patterns and functionality.
          </p>
          <Link href="/docs/hooks/use-debounce">
            <Button variant="outline">View Hooks</Button>
          </Link>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="bg-muted/50 p-6 rounded-lg">
          <code className="text-sm">pnpm install @rouf-dev/pantheon-ui motion</code>
        </div>
      </section>
    </div>
  );
}
