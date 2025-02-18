"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  cta?: string;
  ctaHover?: string;
}

interface Theme {
  name: string;
  colors: ThemeColors;
}

const defaultThemes: Record<string, Theme> = {
  default: {
    name: "default",
    colors: {
      background: "#ffffff",
      foreground: "#0f172a",
      primary: "#0ea5e9",
      secondary: "#64748b",
      accent: "#f59e0b",
      muted: "#f1f5f9",
      cta: "#FF4500", // Carrot Red-Orange
      ctaHover: "#E63E00",
    },
  },
  dark: {
    name: "dark",
    colors: {
      background: "#0f172a",
      foreground: "#f8fafc",
      primary: "#38bdf8",
      secondary: "#94a3b8",
      accent: "#fbbf24",
      muted: "#1e293b",
    },
  },
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme | string) => void;
  themes: Record<string, Theme>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultThemes.default);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        try {
          const parsedTheme = JSON.parse(savedTheme);
          if (parsedTheme && typeof parsedTheme === 'object' && 'name' in parsedTheme && 'colors' in parsedTheme) {
            setTheme(parsedTheme as Theme);
          } else {
            localStorage.removeItem("theme");
          }
        } catch (error) {
          console.error("Error parsing theme:", error);
          localStorage.removeItem("theme");
        }
      }
    }
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  function handleSetTheme(theme: string | Theme): void {
    let newTheme: Theme;

    if (typeof theme === "string") {
      newTheme = defaultThemes[theme] || defaultThemes.default;
    } else {
      newTheme = theme;
    }

    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, themes: defaultThemes }}>
      <div className={`theme-${theme.name}`} style={generateThemeStyles(theme.colors)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function generateThemeStyles(colors: ThemeColors): React.CSSProperties {
  return {
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--primary": colors.primary,
    "--secondary": colors.secondary,
    "--accent": colors.accent,
    "--muted": colors.muted,
    "--cta": colors.cta,
    "--ctaHover": colors.ctaHover,
  } as React.CSSProperties;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}