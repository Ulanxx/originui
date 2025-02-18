"use client";

import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";

export default function ThemeToggle() {
  const id = useId();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(mediaQuery.matches ? "dark" : "light");
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-center">
      <input
        type="checkbox"
        name="theme-toggle"
        id={id}
        className="peer sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
      />
      <label
        className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
        htmlFor={id}
        aria-hidden="true"
      >
        <RiSunLine className="dark:hidden" size={20} aria-hidden="true" />
        <RiMoonClearLine className="hidden dark:block" size={20} aria-hidden="true" />
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
