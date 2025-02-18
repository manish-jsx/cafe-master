'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonials: Array<{
    image: string;
    author: string;
    role: string;
    quote: string;
  }>;
}

export function TestimonialSection({ testimonials }: TestimonialProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-background p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-foreground/60">{testimonial.role}</div>
            </div>
          </div>
          <p className="text-foreground/80">"{testimonial.quote}"</p>
          <div className="mt-4 flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="h-5 w-5" fill="currentColor" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
