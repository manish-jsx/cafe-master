import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";

const categories = ["All", "Business Tips", "Technology", "Customer Service", "Marketing"];

const blogPosts = [
  {
    title: "10 Tips for Running a Successful Café",
    excerpt: "Learn the essential strategies that successful café owners use...",
    image: "/blog/cafe-tips.jpg",
    date: "2024-01-15",
    category: "Business Tips",
    readTime: "5 min read"
  },
  // Add more blog posts...
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Café Business Insights</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-lg text-muted-foreground">
                Expert advice and insights for café owners and managers
              </p>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {post.readTime}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {post.date} · {post.category}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group-hover:text-primary" asChild>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
