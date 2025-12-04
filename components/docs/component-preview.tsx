"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { CodeBlock } from "./code-block";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
}

export function ComponentPreview({
  children,
  code,
  title,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="my-6 rounded-lg border">
      {title && (
        <div className="border-b px-4 py-2 font-semibold">{title}</div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-center min-h-[200px]">
          {children}
        </div>
      </div>
      <div className="border-t bg-muted/50 px-4 py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide" : "Show"} Code
        </Button>
      </div>
      {showCode && (
        <div className="border-t">
          <CodeBlock code={code} language="tsx" />
        </div>
      )}
    </div>
  );
}
