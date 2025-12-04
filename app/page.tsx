import Link from "next/link";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
      <main className="flex flex-col items-center justify-center text-center px-8 py-20 max-w-4xl">
        <h1 className="text-6xl font-bold mb-4">
          Pantheon UI
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A comprehensive component library built with React, TypeScript, and Motion. 
          57+ components, 19 hooks, and full theming support.
        </p>
        <div className="flex gap-4 mb-12">
          <Link href="/docs">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/docs/components/button">
            <Button variant="outline" size="lg">View Components</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="border rounded-lg p-6 bg-card">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Fast & Modern</h3>
            <p className="text-sm text-muted-foreground">
              Built with performance in mind using React 19 and Motion
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-card">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-semibold mb-2">Fully Themed</h3>
            <p className="text-sm text-muted-foreground">
              Dark mode support with customizable color palettes
            </p>
          </div>
          <div className="border rounded-lg p-6 bg-card">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="font-semibold mb-2">TypeScript</h3>
            <p className="text-sm text-muted-foreground">
              Full type safety with excellent DX
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
