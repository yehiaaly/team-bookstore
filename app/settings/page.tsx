"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Shield,
  Palette,
  Bell,
  Moon,
  Sun,
  Mail,
  Megaphone,
  Trash2,
  KeyRound,
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

type SettingsTab = "profile" | "account" | "appearance" | "notifications";

const tabs: { id: SettingsTab; label: string; icon: React.ReactNode }[] = [
  { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
  { id: "account", label: "Account", icon: <Shield className="h-4 w-4" /> },
  {
    id: "appearance",
    label: "Appearance",
    icon: <Palette className="h-4 w-4" />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
  },
];

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-8">
        <div className="text-center text-stone-500">
          <User className="mx-auto mb-4 h-12 w-12 opacity-20" />
          <p className="font-heading text-lg">
            Please sign in to view settings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition className="min-h-screen bg-stone-50 pt-24 pb-12 dark:bg-stone-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-100">
            Settings
          </h1>
          <p className="mt-1 text-sm text-stone-500 sm:text-base dark:text-stone-400">
            Manage your account settings and preferences.
          </p>
        </div>

        {/* Mobile Tabs - Horizontal Scroll */}
        <div className="-mx-4 mb-6 px-4 md:hidden">
          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Sidebar + Content */}
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          {/* Desktop Sidebar */}
          <nav className="hidden flex-col gap-1 md:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-50"
                    : "text-stone-500 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800/50 dark:hover:text-stone-50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
          {/* Content Area */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Profile Section */}
              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">Profile</CardTitle>
                      <CardDescription>
                        This is how others will see you on the site.
                      </CardDescription>
                    </CardHeader>
                    {/* ... content ... */}
                    <CardContent className="space-y-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <Avatar className="h-20 w-20 border-2 border-stone-200 dark:border-stone-700">
                          <AvatarImage
                            src={user.avatarUrl}
                            alt={user.firstName}
                          />
                          <AvatarFallback className="bg-orange-100 text-xl font-semibold text-orange-700">
                            {user.firstName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <Button variant="outline" className="w-fit">
                          Change Avatar
                        </Button>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" defaultValue={user.firstName} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" defaultValue={user.lastName} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue={user.email} disabled />
                        <p className="text-xs text-stone-500">
                          Email cannot be changed via settings yet.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-end border-t border-stone-100 px-6 py-4 dark:border-stone-800">
                      <Button className="bg-orange-600 text-white hover:bg-orange-700">
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {/* Account Section */}
              {activeTab === "account" && (
                <motion.div
                  key="account"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading flex items-center gap-2">
                        <KeyRound className="h-5 w-5" />
                        Password
                      </CardTitle>
                      <CardDescription>
                        Update your password to keep your account secure.
                      </CardDescription>
                    </CardHeader>
                    {/* ... content ... */}
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">
                          Current Password
                        </Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-end border-t border-stone-100 px-6 py-4 dark:border-stone-800">
                      <Button className="bg-orange-600 text-white hover:bg-orange-700">
                        Update Password
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-red-200 dark:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="font-heading flex items-center gap-2 text-red-600 dark:text-red-400">
                        <Trash2 className="h-5 w-5" />
                        Danger Zone
                      </CardTitle>
                      <CardDescription>
                        Permanently delete your account and all associated data.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t border-red-100 px-6 py-4 dark:border-red-900/30">
                      <Button
                        variant="outline"
                        className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                      >
                        Delete Account
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {/* Appearance Section */}
              {activeTab === "appearance" && (
                <motion.div
                  key="appearance"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">Appearance</CardTitle>
                      <CardDescription>
                        Customize how the app looks and feels.
                      </CardDescription>
                    </CardHeader>
                    {/* ... content ... */}
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <Label>Theme</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: "light", label: "Light", icon: Sun },
                            { id: "dark", label: "Dark", icon: Moon },
                            { id: "system", label: "System", icon: Palette },
                          ].map((option) => (
                            <button
                              key={option.id}
                              onClick={() =>
                                setTheme(
                                  option.id as "light" | "dark" | "system",
                                )
                              }
                              className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                                theme === option.id
                                  ? "border-orange-600 bg-orange-50 dark:border-orange-500 dark:bg-orange-900/20"
                                  : "border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600"
                              }`}
                            >
                              <option.icon
                                className={`h-6 w-6 ${
                                  theme === option.id
                                    ? "text-orange-600 dark:text-orange-500"
                                    : "text-stone-500"
                                }`}
                              />
                              <span
                                className={`text-sm font-medium ${
                                  theme === option.id
                                    ? "text-orange-700 dark:text-orange-400"
                                    : "text-stone-600 dark:text-stone-400"
                                }`}
                              >
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-stone-500">
                          Theme changes will be applied on next page load.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Notifications Section */}
              {activeTab === "notifications" && (
                <motion.div
                  key="notifications"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">
                        Notifications
                      </CardTitle>
                      <CardDescription>
                        Choose what updates you want to receive.
                      </CardDescription>
                    </CardHeader>
                    {/* ... content ... */}
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between gap-4 rounded-lg border border-stone-200 p-4 dark:border-stone-700">
                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 h-5 w-5 text-stone-500" />
                          <div>
                            <p className="font-medium text-stone-900 dark:text-stone-100">
                              Email Notifications
                            </p>
                            <p className="text-sm text-stone-500">
                              Receive emails about your orders and account
                              activity.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setEmailNotifications(!emailNotifications)
                          }
                          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                            emailNotifications
                              ? "bg-orange-600"
                              : "bg-stone-300 dark:bg-stone-600"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                              emailNotifications
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4 rounded-lg border border-stone-200 p-4 dark:border-stone-700">
                        <div className="flex items-start gap-3">
                          <Megaphone className="mt-0.5 h-5 w-5 text-stone-500" />
                          <div>
                            <p className="font-medium text-stone-900 dark:text-stone-100">
                              Marketing Emails
                            </p>
                            <p className="text-sm text-stone-500">
                              Receive emails about new books, sales, and
                              promotions.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setMarketingEmails(!marketingEmails)}
                          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                            marketingEmails
                              ? "bg-orange-600"
                              : "bg-stone-300 dark:bg-stone-600"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                              marketingEmails
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-end border-t border-stone-100 px-6 py-4 dark:border-stone-800">
                      <Button className="bg-orange-600 text-white hover:bg-orange-700">
                        Save Preferences
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
