"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <PageTransition className="relative container flex min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/sign-in"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 md:top-8 md:left-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-87.5">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Create an account
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Enter your email below to create your account
          </p>
        </div>
        <Card className="border-stone-200 dark:border-stone-800">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your email to sign up.</CardDescription>
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
                <Button
                  className="w-full bg-orange-600 text-white hover:bg-orange-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Sign Up with Email"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t border-stone-100 p-6 dark:border-stone-800">
            <div className="text-center text-sm text-stone-500">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="underline underline-offset-4 hover:text-orange-600"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  );
}
