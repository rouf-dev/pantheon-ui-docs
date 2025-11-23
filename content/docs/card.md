---
title: Card
description: A flexible card container component for content organization
category: UI Components
---

# Card

A flexible card component with header, content, and footer sections.

## Import

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@rouf-dev/pantheon-ui'
```

## Usage

### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Simple Card

```tsx
<Card>
  <CardContent className="p-6">
    Simple card content without header or footer
  </CardContent>
</Card>
```

### Card with Image

```tsx
<Card>
  <img src="/image.jpg" alt="Card" className="w-full h-48 object-cover" />
  <CardHeader>
    <CardTitle>Image Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card with an image at the top.</p>
  </CardContent>
</Card>
```

## Components

### Card

The main container component.

### CardHeader

Container for the card's header section.

### CardTitle

The card's title heading.

### CardDescription

Optional description text below the title.

### CardContent

Main content area of the card.

### CardFooter

Footer section for actions or additional info.

## Examples

### Pricing Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>For professional use</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">$29/mo</div>
    <ul className="mt-4 space-y-2">
      <li>✓ Unlimited projects</li>
      <li>✓ Priority support</li>
      <li>✓ Advanced features</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Subscribe</Button>
  </CardFooter>
</Card>
```

### Dashboard Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Total Revenue</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold">$45,231.89</div>
    <p className="text-sm text-muted-foreground">+20.1% from last month</p>
  </CardContent>
</Card>
```
