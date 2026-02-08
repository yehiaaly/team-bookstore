import React from "react";
import { MainNav } from "./MainNav";
import { UserMenu } from "./UserMenu";
import { FavoritesMenu } from "./FavoritesMenu";
import { ReceiptText, Heart } from "lucide-react";
import { Logo } from "../ui/Logo";

interface AppShellProps {
  children: React.ReactNode;
  navigationItems: Array<{ label: string; href: string; isActive?: boolean }>;
  user?: { name: string; avatarUrl?: string };
  onNavigate?: (href: string) => void;
  onLogout?: () => void;
  favoritesCount?: number;
  cartCount?: number;
}

export function AppShell({
  children,
  navigationItems,
  user,
  onNavigate,
  onLogout,
  favoritesCount = 0,
  cartCount = 0,
}: AppShellProps) {
  return (
    <div className="font-body min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-orange-900">
      {/* Floating Island Navigation */}
      <div className="fixed top-6 right-0 left-0 z-50 flex justify-center px-4">
        <header className="relative flex w-full max-w-5xl items-center justify-between rounded-full border border-stone-200/50 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-stone-800/50 dark:bg-stone-900/80">
          {/* Logo / Brand (Left) */}
          <div
            className="z-10 cursor-pointer transition-transform select-none active:scale-95"
            onClick={() => onNavigate?.("/")}
          >
            <Logo />
          </div>

          {/* Centered Navigation Links (Desktop) - Absolutely Positioned */}
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <MainNav items={navigationItems} onNavigate={onNavigate} />
          </div>

          {/* Right Side: Actions & User */}
          <div className="z-10 flex items-center gap-1 md:gap-2">
            {/* ThemeToggle removed for now */}

            <FavoritesMenu>
              <button
                aria-label="Open favorites"
                className="relative cursor-pointer rounded-full p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-orange-600 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-orange-400"
              >
                <Heart className="h-5 w-5" aria-hidden="true" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-stone-900">
                    {favoritesCount}
                  </span>
                )}
              </button>
            </FavoritesMenu>

            <button
              onClick={() => onNavigate?.("/counter")}
              aria-label="Go to shopping counter"
              className="relative cursor-pointer rounded-full p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-orange-600 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-orange-400"
              title="The Counter"
            >
              <ReceiptText className="h-5 w-5" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-stone-900">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="hidden h-6 w-px bg-stone-300 md:block dark:bg-stone-700"></div>
            <UserMenu user={user} onLogout={onLogout} />
          </div>
        </header>
      </div>

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
