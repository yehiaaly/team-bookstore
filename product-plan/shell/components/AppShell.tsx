import React from 'react';
import { MainNav } from './MainNav';
import { UserMenu } from './UserMenu';
import { ShoppingBag, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface AppShellProps {
  children: React.ReactNode;
  navigationItems: Array<{ label: string; href: string; isActive?: boolean }>;
  user?: { name: string; avatarUrl?: string };
  onNavigate?: (href: string) => void;
  onLogout?: () => void;
}

export function AppShell({
  children,
  navigationItems,
  user,
  onNavigate,
  onLogout,
}: AppShellProps) {
  return (
    <div className="min-h-screen font-body text-stone-900 bg-stone-50 selection:bg-orange-100 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-orange-900">
      {/* Floating Island Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <header className="flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2 shadow-sm backdrop-blur-md border border-stone-200/50 bg-white/80 dark:bg-stone-900/80 dark:border-stone-800/50 transition-colors duration-300">
          
          {/* Logo / Brand */}
          <div 
             className="text-lg font-heading font-bold tracking-tight cursor-pointer text-orange-600 dark:text-orange-500"
             onClick={() => onNavigate?.('/')}
          >
            Team Books.
          </div>

          {/* Centered Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <MainNav items={navigationItems} onNavigate={onNavigate} />
          </div>

          {/* Right Side: Actions & User */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <button className="rounded-full p-2 transition-colors text-stone-600 hover:bg-stone-100 hover:text-orange-600 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-orange-400">
              <Heart className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 transition-colors relative text-stone-600 hover:bg-stone-100 hover:text-orange-600 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-orange-400">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-stone-900"></span>
            </button>
            <div className="h-6 w-px bg-stone-300 dark:bg-stone-700 mx-1 hidden md:block"></div>
            <UserMenu user={user} onLogout={onLogout} />
          </div>
        </header>
      </div>

      {/* Main Content Area */}
      <main className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}