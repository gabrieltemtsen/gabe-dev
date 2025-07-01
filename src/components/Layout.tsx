import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-white dark:bg-gray-900 shadow-md">
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
      <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 text-sm">
        &copy; {year} Gabriel Temtsen. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
