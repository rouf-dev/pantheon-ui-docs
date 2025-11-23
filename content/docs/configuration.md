---
title: Configuration
description: Configure and customize Pantheon UI for your project
category: Getting Started
---

# Configuration

Learn how to configure and customize Pantheon UI to match your brand and design requirements.

## Design Tokens

Pantheon UI uses CSS variables for theming. You can override these in your global CSS:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --radius: 0.5rem;
}
```

## Dark Mode

Pantheon UI includes built-in dark mode support. Configure dark mode colors:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
}
```

## Typography

Customize typography by importing your preferred font:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

## Border Radius

Control the global border radius:

```css
:root {
  --radius: 0.5rem; /* Default */
  /* --radius: 0rem; */ /* Sharp corners */
  /* --radius: 1rem; */ /* More rounded */
}
```

## Glass Effects

Customize glassmorphism intensity globally or per component:

```tsx
<GlassCard intensity="low">Low intensity</GlassCard>
<GlassCard intensity="medium">Medium intensity</GlassCard>
<GlassCard intensity="high">High intensity</GlassCard>
```

## Advanced Customization

For advanced theming, you can extend Pantheon UI components:

```tsx
import { Button } from '@rouf-dev/pantheon-ui'
import { cn } from '@rouf-dev/pantheon-ui'

export function CustomButton({ className, ...props }) {
  return (
    <Button 
      className={cn('my-custom-styles', className)}
      {...props}
    />
  )
}
```
