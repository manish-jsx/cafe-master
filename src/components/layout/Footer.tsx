import Link from "next/link";
import { Coffee, Twitter, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Demo", href: "/#demo" },
        { name: "FAQs", href: "/#faq" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/resources" },
        { name: "Support", href: "/support" },
        { name: "API", href: "/api-docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" }
      ]
    }
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CaféMaster</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Revolutionizing café management with smart solutions.
          </p>
          <div className="flex space-x-4">
            {[Twitter, Instagram, Facebook, Mail].map((Icon, i) => (
              <Link key={i} href="#" className="text-muted-foreground hover:text-primary">
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CaféMaster. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
