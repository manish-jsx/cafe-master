'use client';

import Lottie from "lottie-react";

interface LottieWrapperProps {
  animationData: any;
  className?: string;
}

export function LottieWrapper({ animationData, className }: LottieWrapperProps) {
  return <Lottie animationData={animationData} className={className} loop />;
}
