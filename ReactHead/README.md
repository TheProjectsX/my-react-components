# ReactHead

A lightweight and flexible React component for managing document head elements. ReactHead provides an intuitive way to manage meta tags, title, base, links, scripts, and other head elements in your React applications.

## Story

Was trying to use `react-helmet` as-well-as `react-helmet-async`. But they firstly, seemed complicated, and secondly, `react-helmet` is outdated and `react-helmet-async`, well, I don't know why it wasn't working. So a developer gotta do what a developer gotta do!

Created own hook / component to modify the head elements.

## Features

-   🔄 Dynamic head management
-   🎯 TypeScript support
-   🎨 Declarative API
-   🚀 Zero dependencies
-   📦 Small bundle size
-   🔌 Works with any React application

## Usage

ReactHead provides two ways to manage your document head:

1. Using the `ReactHead` component (Recommended)
2. Using the `useReactHead` hook

### Using the Component

```jsx
import ReactHead from "@/components/ReactHead";

const MyPage() {
    return (
        <>
            <ReactHead>
                <title>My Page Title</title>
                <meta name="description" content="Page description" />
                <meta property="og:title" content="Open Graph Title" />
                <meta
                    property="og:description"
                    content="Open Graph Description"
                />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://example.com/script.js" />
            </ReactHead>
            {/* Your page content */}
        </>
    );
}

export default MyPage

```

### Using the Hook

```jsx
import { useReactHead } from '@/components/ReactHead';

const MyPage() {
  useReactHead({
    title: 'My Page Title',
    meta: [
      { name: 'description', content: 'Page description' },
      { property: 'og:title', content: 'Open Graph Title' },
      { property: 'og:description', content: 'Open Graph Description' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://example.com/script.js' }
    ]
  });

  return (
    // Your page content
  );
}

export default MyPage
```

## Supported Elements

ReactHead supports the following head elements:

-   `title` - Document title
-   `base` - Base URL and target
-   `meta` - Meta tags (including charset, name, property, and http-equiv)
-   `link` - External resources (stylesheets, icons, etc.)
-   `style` - Internal and External styles
-   `script` - JavaScript files and inline scripts
-   `noscript` - Fallback content for browsers with JavaScript disabled
-   `template` - HTML templates

## TypeScript Support

ReactHead includes TypeScript definitions. The component and hook are fully typed:

```typescript
interface UseReactHeadProps {
    title?: string;
    base?: Record<string, any>;
    meta?: Record<string, any>[];
    link?: Record<string, any>[];
    style?: Record<string, any>[];
    script?: Record<string, any>[];
    noscript?: Record<string, any>[];
    template?: Record<string, any>[];
}
```

## Best Practices

1. Use the `ReactHead` component when you need to manage head elements declaratively
2. Use the `useReactHead` hook when you need to manage head elements programmatically
3. Keep meta tags organized and meaningful for SEO
4. Update head elements when route or content changes
5. Remove unnecessary head elements when components unmount
