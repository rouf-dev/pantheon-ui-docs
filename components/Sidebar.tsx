'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Typography } from '@rouf-dev/pantheon-ui'
import { cn } from '@rouf-dev/pantheon-ui'

const navigation = {
  'Getting Started': [
    { name: 'Introduction', href: '/docs' },
    { name: 'Installation', href: '/docs/installation' },
    { name: 'Configuration', href: '/docs/configuration' },
  ],
  'Components': [
    { name: 'Button', href: '/docs/button' },
    { name: 'Card', href: '/docs/card' },
    // { name: 'Input', href: '/docs/input' },
    // { name: 'Dialog', href: '/docs/dialog' },
    // { name: 'Select', href: '/docs/select' },
    // { name: 'Table', href: '/docs/table' },
    // { name: 'Typography', href: '/docs/typography' },
    // { name: 'Navigation', href: '/docs/navigation' },
  ],
  'Glass Components': [
    { name: 'GlassCard', href: '/docs/glass-card' },
    // { name: 'GlassModal', href: '/docs/glass-modal' },
  ],
  // 'Design Tokens': [
  //   { name: 'Colors', href: '/docs/colors' },
  //   { name: 'Typography', href: '/docs/typography-tokens' },
  //   { name: 'Spacing', href: '/docs/spacing' },
  //   { name: 'Shadows', href: '/docs/shadows' },
  // ],
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-muted/30 p-6 overflow-y-auto">
      <Link href="/">
        <Typography variant="h3" className="mb-6">Pantheon UI</Typography>
      </Link>
      
      <nav className="space-y-6">
        {Object.entries(navigation).map(([section, items]) => (
          <div key={section}>
            <Typography variant="small" className="font-semibold mb-2 text-muted-foreground">
              {section}
            </Typography>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 rounded-md text-sm transition-colors',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
