import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';
import AuroraBackground from './AuroraBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground">
      <AuroraBackground />
      <header className="glass shadow-md sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold">
            Gabe Dev
          </Link>
          <nav className="space-x-6 hidden sm:block">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="glass text-center p-4 text-sm mt-auto">
        &copy; {year} Gabriel Temtsen. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
