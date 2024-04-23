"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "../utils/cn";

type Props = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (theme: string) => {
    setTheme(theme);
  };

  const icon =
    theme === "light" ? (
      <MoonIcon
        className="h-5 w-5 flex-none text-gray-400 cursor-pointer"
        aria-hidden="true"
        onClick={() => handleClick("dark")}
      />
    ) : (
      <SunIcon
        className="h-5 w-5 flex-none text-gray-400 cursor-pointer"
        aria-hidden="true"
        onClick={() => handleClick("light")}
      />
    );

  return (
    <div className={cn("w-[40px] flex justify-center", className)}>{icon}</div>
  );
};
