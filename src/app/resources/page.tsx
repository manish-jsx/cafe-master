import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book, Video, FileText, Download, ArrowRight } from "lucide-react";

interface BaseResourceItem {
  title: string;
  description: string;
}

interface DownloadableResource extends BaseResourceItem {
  downloadUrl: string;
  videoUrl?: never;
}

interface VideoResource extends BaseResourceItem {
  videoUrl: string;
  downloadUrl?: never;
}

type ResourceItem = DownloadableResource | VideoResource;

interface ResourceCategory {
  title: string;
  description: string;
  icon: typeof Book | typeof Video | typeof FileText;
  items: ResourceItem[];
}

const resourceCategories: ResourceCategory[] = [
  {
    title: "Guides & eBooks",
    description: "Comprehensive guides for café management",
    icon: Book,
    items: [
      {
        title: "Complete Café Management Guide",
        description: "Learn everything about running a successful café",
        downloadUrl: "/guides/cafe-management.pdf"
      },
      // Add more guides...
    ]
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for CaféMaster",
    icon: Video,
    items: [
      {
        title: "Getting Started with CaféMaster",
        description: "A complete walkthrough of basic features",
        videoUrl: "/tutorials/getting-started"
      },
      // Add more videos...
    ]
  },
  {
    title: "Templates",
    description: "Ready-to-use business templates",
    icon: FileText,
    items: [
      {
        title: "Staff Schedule Template",
        description: "Optimize your workforce management",
        downloadUrl: "/templates/staff-schedule.xlsx"
      },
      // Add more templates...
    ]
  }
];

export default function ResourcesPage() {
  const getResourceUrl = (item: ResourceItem) => {
    return 'downloadUrl' in item ? item.downloadUrl : item.videoUrl;
  };

  const isDownloadable = (item: ResourceItem): item is DownloadableResource => {
    return 'downloadUrl' in item;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Business Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your café business - guides, templates, and tutorials
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            {resourceCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <Button className="group" asChild>
                          <Link href={getResourceUrl(item) || '#'}>
                            {isDownloadable(item) ? (
                              <>
                                Download <Download className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Watch Now <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
