import { Moon, Sun, Clock } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [autoMode, setAutoMode] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check if auto mode was previously enabled
    const savedAutoMode = localStorage.getItem("autoThemeMode");
    if (savedAutoMode === "true") {
      setAutoMode(true);
    }
  }, []);

  // Auto theme switching based on time
  useEffect(() => {
    if (!autoMode) return;

    const updateThemeByTime = () => {
      const hour = new Date().getHours();
      // Switch to light mode between 6 AM and 6 PM
      // Switch to dark mode between 6 PM and 6 AM
      const shouldBeLightMode = hour >= 6 && hour < 18;
      const newTheme = shouldBeLightMode ? "light" : "dark";
      
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    };

    // Initial check
    updateThemeByTime();

    // Check every minute for theme updates
    const interval = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(interval);
  }, [autoMode, theme, setTheme]);

  const toggleAutoMode = () => {
    const newAutoMode = !autoMode;
    setAutoMode(newAutoMode);
    localStorage.setItem("autoThemeMode", String(newAutoMode));
    
    // If enabling auto mode, immediately set theme based on time
    if (newAutoMode) {
      const hour = new Date().getHours();
      const shouldBeLightMode = hour >= 6 && hour < 18;
      setTheme(shouldBeLightMode ? "light" : "dark");
    }
  };

  const toggleTheme = () => {
    // Disable auto mode when manually switching
    if (autoMode) {
      setAutoMode(false);
      localStorage.setItem("autoThemeMode", "false");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="transition-smooth">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {/* Auto mode toggle */}
      <Button
        variant={autoMode ? "default" : "ghost"}
        size="icon"
        onClick={toggleAutoMode}
        className="transition-smooth hover:scale-110"
        aria-label="Toggle auto theme mode"
        title="Auto theme (switches based on time)"
      >
        <Clock className={`h-5 w-5 ${autoMode ? "text-primary-foreground" : ""}`} />
      </Button>

      {/* Manual theme toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="transition-smooth hover:scale-110 hover:rotate-12"
        aria-label="Toggle theme"
        disabled={autoMode}
        title={autoMode ? "Disabled in auto mode" : "Toggle theme"}
      >
        {theme === "dark" ? (
          <Sun className={`h-5 w-5 ${autoMode ? "opacity-50" : "text-primary"}`} />
        ) : (
          <Moon className={`h-5 w-5 ${autoMode ? "opacity-50" : ""}`} />
        )}
      </Button>
    </div>
  );
}
