"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui";
import { useState, ReactNode } from "react";

interface CodeBlockProps {
  code?: string;
  language?: string;
  children?: ReactNode;
}

export function CodeBlock({ code, language = "tsx", children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeContent: string = code || (typeof children === 'string' ? children : '');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-10">
        <Button variant="ghost" size="sm" onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
        }}
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
}
