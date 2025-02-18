"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function QRFeature() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Digital Menu & QR Ordering</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Modernize your café with contactless ordering. Customers can scan, order, and pay from their phones.
            </p>
            <ul className="space-y-4">
              {[
                "Instant menu updates",
                "Contactless payments",
                "Reduce wait times",
                "Increase order accuracy"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-full" />
            <div className="relative">
              <Image
                src="/qr-demo.png"
                alt="QR Code Ordering System"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Change to default export
export default QRFeature;
