'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";

import { AnimatedBackground } from "@/components/animations/AnimatedBackground";

//import { MotionDiv } from "@/components/animations/MotionWrapper";

// ...import oth



import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Lottie from "lottie-react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import {
  CheckCircle, Coffee, DollarSign, Users,
  ArrowRight, Star, Shield, Clock
} from "lucide-react"

// Import Lottie animations
import cafeAnimation from "@/animations/cafe-management.json"
import analyticsAnimation from "@/animations/analytics.json"
import successAnimation from "@/animations/success.json"

// Types
interface FeatureShowcaseProps {
  title: string;
  description: string;
  animationData: any;
  imageUrl: string;
  reverse?: boolean;
}

import {
  testimonials,
  successStories,
  features,
  pricing,
  faqs
} from "@/data/content";
import { LottieWrapper } from "@/components/animations/LottieWrapper";
import { MotionDiv, MotionSection } from "@/components/animations/MotionWrapper";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { TestimonialSection } from './TestimonialSection';
import { SocialFloating } from "../SocialFloating";

// Dynamic imports for components that use browser APIs
const DynamicLottieWrapper = dynamic(
  () => import('@/components/animations/LottieWrapper').then(mod => mod.LottieWrapper),
  { ssr: false }
);

// Dynamically import components that use browser APIs
const DynamicBookAppointment = dynamic(
  () => import('../BookAppointment').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-muted h-96 rounded-lg" />
  }
);

const DynamicQRFeature = dynamic(
  () => import('../QRFeature').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-muted h-64 rounded-lg" />
  }
);

const DynamicAnimatedBackground = dynamic(
  () => import('../animations/AnimatedBackground').then(mod => mod.AnimatedBackground),
  { ssr: false }
);

const DynamicFeatureShowcase = dynamic(
  () => import('./FeatureShowcase').then(mod => mod.FeatureShowcase),
  { ssr: false }
);

export function HomeClient() {
  useEffect(() => {
    // Move any document-related code here
    // This will only run on the client side
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-primary to-brand-accent">
              CaféMaster
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "FAQ", href: "#faq" },
              { name: "Blog", href: "/blog" },
              { name: "Resources", href: "/resources" }
            ].map((item) => (
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
      </header>

      <main>
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <MotionDiv
            style={{ y }}
            className="container mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-brand-accent to-secondary">
              Transform Your Café into a
              <br /> Thriving Business
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Join 10,000+ café owners who've increased profits by 47% with our all-in-one management solution
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-lg bg-[hsl(16,100%,50%)] hover:bg-[hsl(16,100%,45%)] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                asChild
              >
                <Link href="#demo">
                  Start 14-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg border-[hsl(16,100%,50%)] text-[hsl(16,100%,50%)] hover:bg-[hsl(16,100%,50%)] hover:text-white"
                asChild
              >
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto mt-8"
            >
              <LottieWrapper animationData={cafeAnimation} />
            </MotionDiv>
          </MotionDiv>

          <DynamicAnimatedBackground />
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto">
            <DynamicFeatureShowcase
              title="Smart Inventory Management"
              description="AI-powered system that predicts your needs and automates reordering"
              animationData={analyticsAnimation}
              imageUrl="/feature-1.png"
              reverse={false}
            />
            <DynamicFeatureShowcase
              title="Real-time Analytics"
              description="Make data-driven decisions with our powerful analytics dashboard"
              animationData={analyticsAnimation}
              imageUrl="/feature-2.png"
              reverse={true}
            />
          </div>
        </section>

        {/* Stats and Success Stories */}
        <StatsSection />

        <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
          <SuccessStories />
        </section>

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Café Owners Worldwide
            </h2>
            <TestimonialSection testimonials={testimonials} />
          </div>
        </section>

        {/* QR Code Feature */}
        <DynamicQRFeature />

        {/* Enhanced Features Grid */}
        <section id="features" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need to Succeed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <PricingCard
                  key={index}
                  {...plan}
                  buttonClassName="bg-[hsl(16,100%,50%)] hover:bg-[hsl(16,100%,45%)] text-white"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FAQItem {...faq} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Appointment Section */}
        <section id="demo" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              See CaféMaster in Action
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Experience the Future of Café Management</h3>
                <ul className="space-y-4">
                  {[
                    "Live product demonstration",
                    "Q&A session with our experts",
                    "Custom solution consultation",
                    "Exclusive offer for demo attendees"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-[hsl(16,100%,50%)]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <DynamicBookAppointment />
            </div>
          </div>
        </section>

        {/* Rest of the sections... */}
      </main>

      <Footer />
      <SocialFloating />
    </div>
  )
}

function StatsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-background shadow-lg"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="text-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
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
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-lg mb-4">"{quote}"</p>
      <div className="flex items-center">
        <Image src={image || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  buttonClassName?: string;
}

function PricingCard({ title, price, features, highlighted = false, buttonClassName }: PricingCardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${highlighted ? "border-2 border-[hsl(16,100%,50%)]" : ""}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-6">
        {price}
        <span className="text-base font-normal">/month</span>
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${buttonClassName || ''}`}
        variant={highlighted ? "default" : "outline"}
      >
        Choose Plan
      </Button>
    </div>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}

const stats = [
  { metric: "47%", label: "Average Profit Increase" },
  { metric: "10,000+", label: "Active Users" },
  { metric: "28mins", label: "Daily Time Saved" },
];



