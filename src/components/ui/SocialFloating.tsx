'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export function SocialFloating() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-primary/10 transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
