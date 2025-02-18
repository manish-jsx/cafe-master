export const resourceCategories = [
  {
    title: "Guides & eBooks",
    description: "Comprehensive guides for café management",
    icon: "Book",
    items: [
      {
        title: "Complete Café Management Guide",
        description: "Master the art of running a successful café with our comprehensive guide covering operations, staff management, and growth strategies.",
        downloadUrl: "/guides/cafe-management.pdf",
        imageUrl: "/resources/guide-cafe.jpg"
      },
      {
        title: "Financial Planning for Cafés",
        description: "Learn how to manage your café's finances, from budgeting to profit optimization and investment planning.",
        downloadUrl: "/guides/cafe-finance.pdf",
        imageUrl: "/resources/guide-finance.jpg"
      },
      {
        title: "Menu Engineering Guide",
        description: "Create profitable and appealing menus using data-driven strategies and psychological pricing techniques.",
        downloadUrl: "/guides/menu-engineering.pdf",
        imageUrl: "/resources/guide-menu.jpg"
      }
    ]
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for CaféMaster",
    icon: "Video",
    items: [
      {
        title: "Getting Started with CaféMaster",
        description: "Complete walkthrough of basic features and setup process.",
        videoUrl: "/tutorials/getting-started",
        thumbnail: "/resources/video-intro.jpg"
      },
      {
        title: "Advanced Inventory Management",
        description: "Master the AI-powered inventory system and forecasting features.",
        videoUrl: "/tutorials/inventory",
        thumbnail: "/resources/video-inventory.jpg"
      },
      {
        title: "Staff Management Masterclass",
        description: "Learn efficient scheduling, training, and team management techniques.",
        videoUrl: "/tutorials/staff",
        thumbnail: "/resources/video-staff.jpg"
      }
    ]
  },
  {
    title: "Templates & Tools",
    description: "Ready-to-use business templates",
    icon: "FileText",
    items: [
      {
        title: "Staff Schedule Template",
        description: "Optimize your workforce management with our proven scheduling template.",
        downloadUrl: "/templates/staff-schedule.xlsx",
        imageUrl: "/resources/template-schedule.jpg"
      },
      {
        title: "Inventory Tracking Sheet",
        description: "Track inventory levels and costs effectively with our custom spreadsheet.",
        downloadUrl: "/templates/inventory.xlsx",
        imageUrl: "/resources/template-inventory.jpg"
      },
      {
        title: "Cost Calculator",
        description: "Calculate recipe costs and pricing with our advanced spreadsheet tool.",
        downloadUrl: "/templates/cost-calculator.xlsx",
        imageUrl: "/resources/template-calculator.jpg"
      }
    ]
  }
];

export const blogPosts = [
  {
    slug: "how-to-increase-cafe-profits",
    title: "10 Proven Strategies to Increase Your Café's Profits",
    excerpt: "Discover practical ways to boost your café's bottom line without compromising quality.",
    content: `
      Running a successful café isn't just about serving great coffee – it's about smart business practices that maximize profitability while maintaining quality...

      ## 1. Optimize Your Menu
      Start by analyzing your menu performance using the menu engineering matrix...

      ## 2. Control Inventory Costs
      Implement these specific inventory management techniques...

      ## 3. Maximize Staff Efficiency
      Train your team to handle multiple roles and optimize scheduling...

      [Full detailed content...]
    `,
    image: "/blog/profits.jpg",
    date: "2024-01-15",
    author: {
      name: "Sarah Johnson",
      role: "Business Strategy Expert",
      image: "/authors/sarah.jpg"
    },
    category: "Business Strategy",
    readTime: "8 min read",
    tags: ["Profitability", "Management", "Growth"]
  },
  {
    slug: "cafe-interior-design-trends",
    title: "2024 Café Interior Design Trends That Attract Customers",
    excerpt: "Learn about the latest design trends that create an inviting atmosphere and boost customer retention.",
    content: `[Detailed content about interior design trends]`,
    image: "/blog/interior-design.jpg",
    date: "2024-01-20",
    category: "Design",
    readTime: "6 min read"
  },
  // ... 8 more detailed blog posts
];
