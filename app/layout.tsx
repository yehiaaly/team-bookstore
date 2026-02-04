import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import React from "react";
// We need a wrapper component to use hooks (useAuth, useRouter)
import { ShellWrapper } from "@/components/shell/ShellWrapper";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Team Books",
  description: "A customized online bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <ShellWrapper>{children}</ShellWrapper>
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
