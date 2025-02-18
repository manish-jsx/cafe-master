import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogLayout({ children, className }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
