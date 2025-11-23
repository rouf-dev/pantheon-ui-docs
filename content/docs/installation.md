---
title: Installation
description: How to install and set up Pantheon UI in your project
category: Getting Started
---

# Installation

Get started with Pantheon UI by installing it in your project.

## Package Manager

Install Pantheon UI using your preferred package manager:

### pnpm (Recommended)

```bash
pnpm add @rouf-dev/pantheon-ui
```

### npm

```bash
npm install @rouf-dev/pantheon-ui
```

### yarn

```bash
yarn add @rouf-dev/pantheon-ui
```

## Setup

### 1. Import Styles

Add the Pantheon UI styles to your root layout or main CSS file:

```tsx
import '@rouf-dev/pantheon-ui/styles'
```

### 2. Configure Tailwind (Optional)

If you're using Tailwind CSS, you can extend your `tailwind.config.js` to match Pantheon UI's design tokens:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(221.2, 83.2%, 53.3%)',
        secondary: 'hsl(210, 40%, 96.1%)',
        // Add more colors as needed
      },
    },
  },
}
```

### 3. Start Using Components

Import and use components in your application:

```tsx
import { Button, Card, Typography } from '@rouf-dev/pantheon-ui'

export default function MyPage() {
  return (
    <div>
      <Typography variant="h1">Welcome</Typography>
      <Button>Get Started</Button>
    </div>
  )
}
```

## Next Steps

- [Configuration](/docs/configuration) - Customize design tokens
- [Button](/docs/button) - Explore component documentation
- [Examples](/docs/examples) - View example implementations
