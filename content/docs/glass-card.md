---
title: GlassCard
description: A glassmorphism card component with blue-tinted transparency
category: Glass Components
---

# GlassCard

A beautiful glassmorphism card with backdrop blur and blue-tinted transparency effects.

## Import

```tsx
import { GlassCard } from '@rouf-dev/pantheon-ui'
```

## Usage

### Basic GlassCard

```tsx
<GlassCard>
  <div className="p-6">
    <h3 className="text-xl font-bold">Glass Card</h3>
    <p>Beautiful glassmorphism effect</p>
  </div>
</GlassCard>
```

### Intensity Levels

```tsx
<GlassCard intensity="low">
  <div className="p-6">Low intensity glass effect</div>
</GlassCard>

<GlassCard intensity="medium">
  <div className="p-6">Medium intensity glass effect</div>
</GlassCard>

<GlassCard intensity="high">
  <div className="p-6">High intensity glass effect</div>
</GlassCard>
```

### With Hover Effect

```tsx
<GlassCard hover>
  <div className="p-6">
    Hover over me for a smooth effect
  </div>
</GlassCard>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| intensity | `"low" \| "medium" \| "high"` | `"medium"` | Glass effect intensity |
| hover | `boolean` | `false` | Enable hover animation |
| className | `string` | - | Additional CSS classes |

## Examples

### Feature Card

```tsx
<GlassCard intensity="medium" hover className="p-6">
  <div className="text-4xl mb-4">🎨</div>
  <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
  <p className="text-muted-foreground">
    Professional cyan-blue palette with glassmorphism effects
  </p>
</GlassCard>
```

### Stats Card

```tsx
<GlassCard intensity="high">
  <div className="p-6">
    <div className="text-sm text-muted-foreground">Total Users</div>
    <div className="text-3xl font-bold mt-2">12,543</div>
    <div className="text-sm text-green-500 mt-1">↑ 12.5%</div>
  </div>
</GlassCard>
```

### Overlay Card

```tsx
<div className="relative">
  <img src="/background.jpg" className="w-full h-96 object-cover" />
  <GlassCard intensity="high" className="absolute inset-4 p-6">
    <h2 className="text-2xl font-bold">Overlay Content</h2>
    <p className="mt-2">Glass card over image background</p>
  </GlassCard>
</div>
```

## Best Practices

- Use over colorful or image backgrounds for best effect
- Medium intensity works best for most use cases
- Use high intensity for overlays or hero sections
- Combine with hover effects for interactive cards
