// app/docs/[slug]/DocContent.tsx
"use client"

import { MDXRemote } from 'next-mdx-remote/rsc'
import { Typography } from '@rouf-dev/pantheon-ui'

interface DocContentProps {
  frontmatter: {
    title: string
    description?: string
  }
  content: string
}

export function DocContent({ frontmatter, content }: DocContentProps) {
  return (
    <article className="prose prose-blue max-w-none">
      <Typography variant="h1">{frontmatter.title}</Typography>
      {frontmatter.description && (
        <Typography variant="lead" className="text-muted-foreground">
          {frontmatter.description}
        </Typography>
      )}
      <MDXRemote source={content} />
    </article>
  )
}