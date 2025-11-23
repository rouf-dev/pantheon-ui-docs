---
title: Button
description: A versatile button component with multiple variants and sizes
category: UI Components
---

# Button

A versatile button component with 8 variants and 5 sizes, built on Radix UI Slot for composition.

## Installation

```bash
pnpm add @rouf-dev/pantheon-ui
```

## Import

```tsx
import { Button } from '@rouf-dev/pantheon-ui'
```

## Usage

### Basic Example

```tsx
<Button>Click me</Button>
```

### Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">🔥</Button>
```

### With Icons

```tsx
<Button>
  <Icon name="plus" />
  Add Item
</Button>
```

### As Child (Composition)

Use the `asChild` prop to compose Button with other components:

```tsx
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "secondary" \| "outline" \| "ghost" \| "link" \| "destructive" \| "success" \| "warning"` | `"default"` | Visual style variant |
| size | `"sm" \| "default" \| "lg" \| "xl" \| "icon"` | `"default"` | Size of the button |
| asChild | `boolean` | `false` | Use Radix Slot for composition |
| disabled | `boolean` | `false` | Disable the button |

## Examples

### Loading State

```tsx
<Button disabled>
  <Spinner />
  Loading...
</Button>
```

### Full Width

```tsx
<Button className="w-full">Full Width Button</Button>
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Confirm</Button>
</div>
```
