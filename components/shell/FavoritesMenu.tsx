"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFavorites } from "@/contexts/FavoritesContext";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FavoritesMenuProps {
  children: React.ReactNode;
}

export function FavoritesMenu({ children }: FavoritesMenuProps) {
  const { favorites, removeFavorite } = useFavorites();
  const displayFavorites = [...favorites].reverse();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="max-h-[500px] w-80 overflow-y-auto p-0 dark:border-stone-800 dark:bg-stone-900"
      >
        <DropdownMenuLabel className="font-heading p-4 text-lg font-bold">
          Your Favorites
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-2 p-2">
          {displayFavorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center text-stone-500">
              <Heart className="mb-3 h-8 w-8 opacity-20" />
              <p className="font-heading text-sm">No favorites yet</p>
            </div>
          ) : (
            displayFavorites.map((item) => (
              <div
                key={item.id}
                className="group flex gap-3 rounded-md border border-transparent p-2 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800"
              >
                <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden rounded bg-stone-200">
                  <Image
                    src={item.coverUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between overflow-hidden">
                  <div>
                    <h4 className="font-heading truncate text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {item.title}
                    </h4>
                    <p className="truncate text-xs text-stone-500 dark:text-stone-400">
                      {item.author}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-orange-600 dark:text-orange-500">
                      ${item.price.toFixed(2)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-stone-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        removeFavorite(item.id);
                      }}
                    >
                      <Trash2 className="h-3 w-3" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
