'use client';

import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "sonner";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
