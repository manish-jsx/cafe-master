'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const AdminColorPalette = () => {
  const { theme, setTheme } = useTheme();
  const [colors, setColors] = useState(theme.colors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColors({ ...colors, [e.target.name]: e.target.value });
  };

  const applyTheme = async () => {
    try {
      setIsSubmitting(true);
      // Validate colors
      Object.entries(colors).forEach(([key, value]) => {
        if (!(/^#[0-9A-F]{6}$/i.test(value))) {
          throw new Error(`Invalid color format for ${key}`);
        }
      });

      setTheme({
        name: 'custom',
        colors,
      });

      toast.success("Theme updated successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update theme");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Theme Customization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(colors).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col space-y-2"
              >
                <label className="font-medium capitalize" htmlFor={key}>{key}</label>
                <div className="flex space-x-2">
                  <Input
                    type="color"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="w-12 h-12 p-1 border rounded"
                  />
                  <Input
                    type="text"
                    value={value}
                    name={key}
                    onChange={handleChange}
                    pattern="^#[0-9A-Fa-f]{6}$"
                    placeholder="#000000"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <Button
            className="mt-6 w-full"
            onClick={applyTheme}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Applying..." : "Apply Theme"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminColorPalette;
