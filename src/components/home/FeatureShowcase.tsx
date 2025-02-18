'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Lottie from 'lottie-react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  animationData: any;
  imageUrl: string;
  reverse?: boolean;
}

export function FeatureShowcase({ title, description, animationData, imageUrl, reverse = false }: FeatureShowcaseProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20`}
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-foreground/80 mb-6">{description}</p>
        <Lottie animationData={animationData} loop />
      </div>
      <div className="w-full md:w-1/2">
        <Image src={imageUrl} alt={title} width={500} height={500} className="rounded-lg shadow-lg" />
      </div>
    </motion.div>
  );
}
