import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import UniverseBackground from './UniverseBackground';
import ThemeToggle from './ThemeToggle';
import { NAV_ITEMS } from '@/constants/nav';
import BackToTop from './BackToTop';

const ChatbotWidget = dynamic(() => import('./ChatbotWidget'), { ssr: false });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const year = new Date().getFullYear();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => router.pathname === href;
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground">
      <UniverseBackground />
      <AuroraBackground />
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white text-slate-900 px-3 py-2 rounded-md shadow">
        Skip to content
      </a>
      <header className="glass shadow-md sticky top-0 z-20" role="banner">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="text-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            aria-label="Home"
          >
            Gabe Dev
          </Link>
          <nav className="hidden sm:flex space-x-6 ml-8" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${
                  isActive(item.href) ? 'text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-600/60' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4 ml-auto">
            <ThemeToggle />
            <button
              aria-label="Toggle Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-menu" className="sm:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md" role="dialog" aria-label="Mobile navigation">
            <nav className="flex flex-col space-y-2" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`hover:text-blue-600 ${isActive(item.href) ? 'text-blue-600 font-semibold' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <main id="content" className="flex-grow">{children}</main>
      <ChatbotWidget />
      <footer className="glass text-center p-4 text-sm mt-auto" role="contentinfo">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <nav className="flex gap-4" aria-label="Footer">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/uses" className="hover:underline">Uses</Link>
            <a href="https://github.com/gabrieltemtsen" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://warpcast.com/gabrieltemtsen" className="hover:underline" target="_blank" rel="me noopener noreferrer">Farcaster</a>
          </nav>
          <div>&copy; {year} Gabriel Temtsen. All rights reserved.</div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Layout;
