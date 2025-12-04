import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const componentLinks = [
  // Layout
  { title: "Accordion", href: "/docs/components/accordion", category: "Layout" },
  { title: "Aspect Ratio", href: "/docs/components/aspect-ratio", category: "Layout" },
  { title: "Card", href: "/docs/components/card", category: "Layout" },
  { title: "Collapsible", href: "/docs/components/collapsible", category: "Layout" },
  { title: "Scroll Area", href: "/docs/components/scroll-area", category: "Layout" },
  { title: "Separator", href: "/docs/components/separator", category: "Layout" },
  { title: "Tabs", href: "/docs/components/tabs", category: "Layout" },
  
  // Forms
  { title: "Button", href: "/docs/components/button", category: "Forms" },
  { title: "Checkbox", href: "/docs/components/checkbox", category: "Forms" },
  { title: "Input", href: "/docs/components/input", category: "Forms" },
  { title: "Label", href: "/docs/components/label", category: "Forms" },
  { title: "Number Input", href: "/docs/components/number-input", category: "Forms" },
  { title: "Password Input", href: "/docs/components/password-input", category: "Forms" },
  { title: "Radio Group", href: "/docs/components/radio-group", category: "Forms" },
  { title: "Search Input", href: "/docs/components/search-input", category: "Forms" },
  { title: "Select", href: "/docs/components/select", category: "Forms" },
  { title: "Slider", href: "/docs/components/slider", category: "Forms" },
  { title: "Switch", href: "/docs/components/switch", category: "Forms" },
  { title: "Textarea", href: "/docs/components/textarea", category: "Forms" },
  
  // Overlays
  { title: "Alert Dialog", href: "/docs/components/alert-dialog", category: "Overlays" },
  { title: "Companion Dialog", href: "/docs/components/companion-dialog", category: "Overlays" },
  { title: "Dialog", href: "/docs/components/dialog", category: "Overlays" },
  { title: "Drawer", href: "/docs/components/drawer", category: "Overlays" },
  { title: "Dropdown Menu", href: "/docs/components/dropdown-menu", category: "Overlays" },
  { title: "Popover", href: "/docs/components/popover", category: "Overlays" },
  { title: "Sheet", href: "/docs/components/sheet", category: "Overlays" },
  { title: "Split Dialog", href: "/docs/components/split-dialog", category: "Overlays" },
  { title: "Tooltip", href: "/docs/components/tooltip", category: "Overlays" },
  
  // Feedback
  { title: "Alert", href: "/docs/components/alert", category: "Feedback" },
  { title: "Badge", href: "/docs/components/badge", category: "Feedback" },
  { title: "Empty State", href: "/docs/components/empty-state", category: "Feedback" },
  { title: "Progress", href: "/docs/components/progress", category: "Feedback" },
  { title: "Skeleton", href: "/docs/components/skeleton", category: "Feedback" },
  { title: "Spinner", href: "/docs/components/spinner", category: "Feedback" },
  { title: "Toast", href: "/docs/components/toast", category: "Feedback" },
  
  // Navigation
  { title: "Breadcrumb", href: "/docs/components/breadcrumb", category: "Navigation" },
  { title: "Pagination", href: "/docs/components/pagination", category: "Navigation" },
  
  // Data Display
  { title: "Avatar", href: "/docs/components/avatar", category: "Data Display" },
  { title: "Data Table", href: "/docs/components/data-table", category: "Data Display" },
  { title: "Kbd", href: "/docs/components/kbd", category: "Data Display" },
  { title: "Typography", href: "/docs/components/typography", category: "Data Display" },
  
  // Pickers
  { title: "Combobox", href: "/docs/components/combobox", category: "Pickers" },
  { title: "Command", href: "/docs/components/command", category: "Pickers" },
  { title: "Date Picker", href: "/docs/components/date-picker", category: "Pickers" },
  
  // Effects
  { title: "Glass", href: "/docs/components/glass", category: "Effects" },
  { title: "Toggle", href: "/docs/components/toggle", category: "Effects" },
  { title: "Toggle Group", href: "/docs/components/toggle-group", category: "Effects" },
];

const hooksLinks = [
  { title: "useClickOutside", href: "/docs/hooks/use-click-outside" },
  { title: "useCopyToClipboard", href: "/docs/hooks/use-copy-to-clipboard" },
  { title: "useDebounce", href: "/docs/hooks/use-debounce" },
  { title: "useDisclosure", href: "/docs/hooks/use-disclosure" },
  { title: "useFocusTrap", href: "/docs/hooks/use-focus-trap" },
  { title: "useIntersectionObserver", href: "/docs/hooks/use-intersection-observer" },
  { title: "useInterval", href: "/docs/hooks/use-interval" },
  { title: "useIsClient", href: "/docs/hooks/use-is-client" },
  { title: "useKeyboardShortcut", href: "/docs/hooks/use-keyboard-shortcut" },
  { title: "useLocalStorage", href: "/docs/hooks/use-local-storage" },
  { title: "useMediaQuery", href: "/docs/hooks/use-media-query" },
  { title: "useOnMount", href: "/docs/hooks/use-on-mount" },
  { title: "useOnUnmount", href: "/docs/hooks/use-on-unmount" },
  { title: "usePrefersColorScheme", href: "/docs/hooks/use-prefers-color-scheme" },
  { title: "usePrefersReducedMotion", href: "/docs/hooks/use-prefers-reduced-motion" },
  { title: "usePrevious", href: "/docs/hooks/use-previous" },
  { title: "useSessionStorage", href: "/docs/hooks/use-session-storage" },
  { title: "useThrottle", href: "/docs/hooks/use-throttle" },
  { title: "useTimeout", href: "/docs/hooks/use-timeout" },
  { title: "useToggle", href: "/docs/hooks/use-toggle" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40 p-6 overflow-y-auto">
        <Link href="/" className="block mb-6">
          <h1 className="text-xl font-bold">Pantheon UI</h1>
        </Link>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Components</h2>
          <nav className="space-y-1">
            {componentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Hooks</h2>
          <nav className="space-y-1">
            {hooksLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="border-b px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Documentation</h1>
          <ThemeToggle />
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
