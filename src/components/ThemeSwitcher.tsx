import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-muted"
    >
      <div className="flex space-x-1">
        {Object.entries(themes).map(([key, themeOption]) => (
          <Button
            key={key}
            variant={theme.name === key ? "default" : "ghost"}
            size="icon"
            onClick={() => setTheme(key)}
            className="w-9 h-9"
          >
            {key === "default" && <Sun className="h-4 w-4" />}
            {key === "dark" && <Moon className="h-4 w-4" />}
            {key === "system" && <Monitor className="h-4 w-4" />}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}