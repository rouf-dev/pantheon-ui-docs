'use client'
import { Typography, Button, GlassCard, Card } from '@rouf-dev/pantheon-ui'
import Link from 'next/link'

export default function DocsPage() {
  const availableComponents = [
    { name: 'Button', href: '/docs/button', description: 'Versatile button with 8 variants and 5 sizes' },
    { name: 'Card', href: '/docs/card', description: 'Flexible card container with header, content, and footer' },
    { name: 'GlassCard', href: '/docs/glass-card', description: 'Glassmorphism card with blue-tinted transparency' },
  ]

  return (
    <article className="max-w-none">
      <Typography variant="h1" className="mb-4">Welcome to Pantheon UI Documentation</Typography>
      <Typography variant="lead" className="text-muted-foreground mb-8">
        A comprehensive guide to building beautiful applications with Pantheon UI
      </Typography>

      <Typography variant="h2" className="mb-4">Getting Started</Typography>
      <Typography variant="p" className="mb-6">
        Pantheon UI is a universal design system built for the Pantheon Architecture. 
        It provides a complete set of components with a professional cyan-blue color palette 
        and glassmorphism effects.
      </Typography>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <GlassCard intensity="medium" className="p-6">
          <Typography variant="h4" className="mb-2">📦 Installation</Typography>
          <Typography variant="muted" className="mb-4">
            Get Pantheon UI set up in your project
          </Typography>
          <Link href="/docs/installation">
            <Button variant="outline" size="sm">View Guide</Button>
          </Link>
        </GlassCard>

        <GlassCard intensity="medium" className="p-6">
          <Typography variant="h4" className="mb-2">⚙️ Configuration</Typography>
          <Typography variant="muted" className="mb-4">
            Customize design tokens and theming
          </Typography>
          <Link href="/docs/configuration">
            <Button variant="outline" size="sm">View Guide</Button>
          </Link>
        </GlassCard>
      </div>

      <Typography variant="h2" className="mb-4">Available Components</Typography>
      <Typography variant="p" className="mb-6">
        Explore the complete collection of UI components available in Pantheon UI.
      </Typography>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableComponents.map((component) => (
          <Link key={component.name} href={component.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <div className="p-6">
                <Typography variant="h4" className="mb-2">{component.name}</Typography>
                <Typography variant="muted">{component.description}</Typography>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </article>
  )
}
