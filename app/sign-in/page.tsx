"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

export default function SignInPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Redirect handled by Auth logic theoretically
    }, 1000);
  }

  return (
    <PageTransition className="relative container flex min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 md:top-8 md:left-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Welcome back
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Enter your email to sign in to your account
          </p>
        </div>
        <Card className="border-stone-200 dark:border-stone-800">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Use your email and password to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" disabled={isLoading} />
                </div>
                <Button
                  className="w-full bg-orange-600 text-white hover:bg-orange-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t border-stone-100 p-6 dark:border-stone-800">
            <div className="text-center text-sm text-stone-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="underline underline-offset-4 hover:text-orange-600"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  );
}
