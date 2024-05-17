"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunMedium, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log("test");
      }}>
      <SunMedium
        size={20}
        className="scale-100 transition-all dark:rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className=" absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-90"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
