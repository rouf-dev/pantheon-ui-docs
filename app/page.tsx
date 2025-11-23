'use client'
import { Button, Typography, GlassCard } from '@rouf-dev/pantheon-ui'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            Pantheon UI
          </Typography>
          <Typography variant="lead" className="mb-8 text-muted-foreground">
            Universal Design System for the Pantheon Architecture
          </Typography>
          
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/docs">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" size="lg">View Components</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard intensity="medium" className="p-6">
              <Typography variant="h3" className="mb-2">🎨 Blue-Based</Typography>
              <Typography variant="muted">
                Professional cyan-blue palette designed for modern applications
              </Typography>
            </GlassCard>
            
            <GlassCard intensity="medium" className="p-6">
              <Typography variant="h3" className="mb-2">🪟 Glassmorphism</Typography>
              <Typography variant="muted">
                Blue-tinted transparency with backdrop blur effects
              </Typography>
            </GlassCard>
            
            <GlassCard intensity="medium" className="p-6">
              <Typography variant="h3" className="mb-2">⚡ TypeScript</Typography>
              <Typography variant="muted">
                Full type definitions with Radix UI primitives
              </Typography>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  )
}
