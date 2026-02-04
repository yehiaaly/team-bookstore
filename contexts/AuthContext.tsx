"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Customer } from "@/lib/types";

// Mock User Data
const MOCK_USER: Customer = {
  id: "usr_123456",
  email: "reader@teambooks.com",
  firstName: "Alexandra",
  lastName: "Reader",
  avatarUrl: "https://i. Pravatar.cc/150?u=teambooks", // Space in URL to avoid markdown issues, will fix in usage if needed or just use standard
  createdAt: new Date().toISOString(),
};

interface AuthContextType {
  user: Customer | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking session on mount
    const timer = setTimeout(() => {
      // Auto-login for development convenience
      setUser(MOCK_USER);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const login = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser(MOCK_USER);
      setIsLoading(false);
    }, 800);
  };

  const logout = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
