import { CodeBlock } from "@/components/docs/code-block";

export default function UseThrottleDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">useThrottle</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A hook to throttle values and limit how often a function can be called.
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
          code={`import { useThrottle } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

export default function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 100);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Scroll position: {throttledScrollY}px</div>;
}`}
          language="tsx"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parameters</h2>
        <div className="bg-muted/50 p-6 rounded-lg space-y-2">
          <div>
            <code className="text-sm">value</code> - The value to throttle
          </div>
          <div>
            <code className="text-sm">interval</code> - Interval in milliseconds (default: 100)
          </div>
        </div>
      </section>
    </div>
  );
}
