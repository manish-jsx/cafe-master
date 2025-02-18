"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsTwitterX } from "react-icons/bs";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: BsWhatsapp,
    href: "https://wa.me/1234567890", // Replace with your WhatsApp number
    color: "bg-[#25D366] hover:bg-[#128C7E]"
  },
  {
    name: "X (Twitter)",
    icon: BsTwitterX,
    href: "https://twitter.com/youraccount", // Replace with your X profile
    color: "bg-black hover:bg-gray-800"
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    href: "https://instagram.com/youraccount", // Replace with your Instagram profile
    color: "bg-gradient-to-tr from-[#FF4B78] to-[#FF8D4B] hover:opacity-90"
  }
];

export function SocialFloating() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {socialLinks.map((social) => (
        <motion.div
          key={social.name}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${social.color} text-white p-3 rounded-full shadow-lg group relative`}
          >
            <social.icon className="w-6 h-6" />
            <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              {social.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
