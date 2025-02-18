import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientProvider } from "@/components/providers/ClientProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaféMaster - Revolutionize Your Café Management",
  description: "Boost efficiency, cut costs, and delight customers with CaféMaster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <ClientProvider>
            {children}
          </ClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}