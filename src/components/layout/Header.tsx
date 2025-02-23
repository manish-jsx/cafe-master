"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" }
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-brand-accent">
            CaféMaster
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {/* <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button> */}
          <Button className="bg-[hsl(16,100%,50%)] hover:bg-[hsl(16,100%,45%)]" asChild>
            <Link href="/signup">Book Free Demo</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
