'use client';

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MotionProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function MotionDiv({ children, ...props }: MotionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div ref={ref}>{children}</div>;
  }

  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionSection({ children, ...props }: MotionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section ref={ref}>{children}</section>;
  }

  return <motion.section {...props}>{children}</motion.section>;
}
