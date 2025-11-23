// app/docs/[slug]/page.tsx
import { getDocBySlug, getDocSlugs } from '@/lib/mdx'
import { DocContent } from './DocContent'

export async function generateStaticParams() {
  const slugs = getDocSlugs('docs')
  return slugs.map((slug) => ({ slug }))
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, content } = getDocBySlug(slug, 'docs')

  return <DocContent frontmatter={frontmatter} content={content} />
}