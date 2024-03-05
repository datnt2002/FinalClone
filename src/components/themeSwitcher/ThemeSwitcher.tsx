"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { SunMoon, Moon } from "lucide-react";
type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="cursor-pointer ml-4" onClick={handleTheme}>
      {theme === "light" ? <Moon /> : <SunMoon />}
    </div>
  );
};

export default ThemeSwitcher;
