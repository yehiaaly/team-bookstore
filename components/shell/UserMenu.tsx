import React from "react";
import { LogOut, User as UserIcon, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface UserMenuProps {
  user?: { name: string; avatarUrl?: string };
  onLogout?: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  if (!user) {
    return (
      <Button
        variant="ghost"
        className="font-heading rounded-full dark:text-stone-300 dark:hover:text-stone-100"
      >
        Sign In
      </Button>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9 border border-stone-200 dark:border-stone-700">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="font-heading bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-100">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 dark:border-stone-800 dark:bg-stone-900"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="font-heading text-sm leading-none font-medium text-stone-900 dark:text-stone-100">
              {user.name}
            </p>
            <p className="text-xs leading-none text-stone-500 dark:text-stone-400">
              Reader
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-stone-800" />
        <DropdownMenuItem className="font-body cursor-pointer dark:text-stone-300 dark:focus:bg-stone-800 dark:focus:text-stone-100">
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-body cursor-pointer dark:text-stone-300 dark:focus:bg-stone-800 dark:focus:text-stone-100">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="dark:bg-stone-800" />
        <DropdownMenuItem
          onClick={onLogout}
          className="font-body cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:bg-stone-800 dark:focus:text-red-300"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
