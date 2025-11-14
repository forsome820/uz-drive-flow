import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lastManualChange, setLastManualChange] = useState<number>(0);

  // Avoid hydration mismatch and load manual override
  useEffect(() => {
    setMounted(true);
    // Check if there's a saved manual override timestamp
    const savedTimestamp = localStorage.getItem("themeManualOverride");
    if (savedTimestamp) {
      setLastManualChange(parseInt(savedTimestamp));
    } else {
      setLastManualChange(0); // Explicitly set to 0 if not found
    }
  }, []);

  // Auto theme switching based on time
  useEffect(() => {
    const updateThemeByTime = () => {
      const now = Date.now();
      
      // Skip auto-switching if manual override is active and still valid (1 hour)
      if (lastManualChange && (now - lastManualChange < 3600000)) {
        return;
      }

      // If override expired, clear it
      if (lastManualChange && (now - lastManualChange >= 3600000)) {
        setLastManualChange(0);
        localStorage.removeItem("themeManualOverride");
      }

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
  }, [theme, setTheme, lastManualChange]);

  const handleManualToggle = () => {
    // Toggle theme immediately
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Set manual override with timestamp (prevents auto-switch for 1 hour)
    const now = Date.now();
    setLastManualChange(now);
    localStorage.setItem("themeManualOverride", now.toString());
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="transition-smooth"
        onClick={handleManualToggle} // <-- THE FIX
        aria-label="Toggle theme" // <-- THE FIX
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleManualToggle}
      className="transition-smooth hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
