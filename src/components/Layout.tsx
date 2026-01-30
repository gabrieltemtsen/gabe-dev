import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import UniverseBackground from './UniverseBackground';
import ThemeToggle from './ThemeToggle';

const ChatbotWidget = dynamic(() => import('./ChatbotWidget'), { ssr: false });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const year = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground">
      <UniverseBackground />
      <AuroraBackground />
      <header className="glass shadow-md sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="text-2xl font-bold">
            Gabe Dev
          </Link>
          <nav className="hidden sm:flex space-x-6 ml-8">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/now" className="hover:text-blue-600">
              Now
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4 ml-auto">
            <ThemeToggle />
            <button
              aria-label="Toggle Menu"
              onClick={() => setOpen(!open)}
              className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="sm:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-blue-600" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/now" className="hover:text-blue-600" onClick={() => setOpen(false)}>
                Now
              </Link>
              <Link href="/projects" className="hover:text-blue-600" onClick={() => setOpen(false)}>
                Projects
              </Link>
              <Link href="/services" className="hover:text-blue-600" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <ChatbotWidget />
      <footer className="glass text-center p-4 text-sm mt-auto">
        &copy; {year} Gabriel Temtsen. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
