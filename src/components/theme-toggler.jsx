"use client"

import * as React from "react"
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useLoaded } from "@/hooks/useLoaded";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const loaded = useLoaded();

  const changeTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
    <>
      <Button variant="outline" size="icon" onClick={changeTheme}>
        {loaded && resolvedTheme === 'dark' ?
          <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          :
          <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        }
      </Button>
    </>
  )
}
