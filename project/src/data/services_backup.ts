import { 
  BarChart, 
  Users, 
  MessageSquare, 
  Zap, 
  Settings, 
  Code, 
  Monitor,
  Smartphone,
  ShoppingCart,
  BarChart2,
  Share2,
  Calendar,
  RefreshCw,
  Link,
  Layout,
  ShoppingBag,
  CreditCard,
  Truck,
  Shield,
  Cpu,
  LayoutTemplate,
  FileText,
  Search,
  FileSearch,
  LineChart,
  User,
  Image
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  tools: Array<{
    name: string;
    category: string;
  }>;
  caseStudy?: {
    title: string;
    description: string;
    result: string;
  };
}

// Service data array
export const services: Service[] = [
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    tagline: 'Professional, Fast, and SEO-Friendly WordPress Sites',
    description: 'Get a custom WordPress website that is fast, secure, and optimized for search engines. Perfect for blogs, business sites, and online portfolios.',
    icon: Layout,
    color: '#21759b',
    features: [
      {
        icon: Zap,
        title: 'Custom Design',
        description: 'Unique, responsive designs tailored to your brand',
      },
      {
        icon: Settings,
        title: 'Plugin Integration',
        description: 'Essential plugins for functionality and security',
      },
      {
        icon: Monitor,
        title: 'Responsive Layouts',
        description: 'Looks great on all devices and screen sizes',
      },
      {
        icon: Share2,
        title: 'SEO Ready',
        description: 'Optimized for search engines from the start',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Planning & Strategy',
        description: 'We discuss your goals and create a sitemap',
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create and develop your custom WordPress theme',
      },
      {
        number: '03',
        title: 'Content & Testing',
        description: 'Add content and test all functionality',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description: 'Go live with ongoing support and maintenance',
      },
    ],
    tools: [
      { name: 'WordPress', category: 'CMS' },
      { name: 'Elementor', category: 'Page Builder' },
      { name: 'WooCommerce', category: 'E-commerce' },
      { name: 'Yoast SEO', category: 'SEO' },
      { name: 'WP Rocket', category: 'Performance' },
    ],
  },
  {
    id: 'custom-coded-website',
    title: 'Custom Coded Website',
    tagline: 'Bespoke Web Solutions with Modern Technologies',
    description: 'Hand-coded websites using HTML/CSS/JS or modern frameworks like React/Next.js for maximum performance and customization.',
    icon: Code,
    color: '#61dafb',
    features: [
      {
        icon: Code,
        title: 'Clean Code',
        description: 'Semantic, maintainable, and well-documented code',
      },
      {
        icon: Cpu,
        title: 'Modern Stack',
        description: 'Built with the latest web technologies',
      },
      {
        icon: Zap,
        title: 'Fast Performance',
        description: 'Optimized for speed and efficiency',
      },
      {
        icon: Share2,
        title: 'Cross-Browser',
        description: 'Consistent experience across all browsers',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand your project needs and goals',
      },
      {
        number: '02',
        title: 'UI/UX Design',
        description: 'Create wireframes and design mockups',
      },
      {
        number: '03',
        title: 'Development',
        description: 'Code the website with best practices',
      },
      {
        number: '04',
        title: 'Testing & Deployment',
        description: 'Thorough testing and smooth launch',
      },
    ],
    tools: [
      { name: 'React/Next.js', category: 'Framework' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Git', category: 'Version Control' },
    ],
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    tagline: 'Sell Products Online with Ease',
    description: 'Complete e-commerce solutions with secure payment gateways, inventory management, and mobile-responsive design.',
    icon: ShoppingBag,
    color: '#7c3aed',
    features: [
      {
        icon: ShoppingCart,
        title: 'Product Management',
        description: 'Easy product catalog management',
      },
      {
        icon: CreditCard,
        title: 'Secure Payments',
        description: 'Multiple payment gateway integration',
      },
      {
        icon: Truck,
        title: 'Shipping & Tax',
        description: 'Automated shipping and tax calculations',
      },
      {
        icon: Shield,
        title: 'Security',
        description: 'SSL and PCI compliance',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Store Setup',
        description: 'Configure products and payment methods',
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create a custom storefront',
      },
      {
        number: '03',
        title: 'Testing',
        description: 'Thorough testing of all features',
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Go live with your online store',
      },
    ],
    tools: [
      { name: 'WooCommerce', category: 'E-commerce' },
      { name: 'Shopify', category: 'Platform' },
      { name: 'Stripe', category: 'Payments' },
      { name: 'Mailchimp', category: 'Email Marketing' },
    ]
  },
  {
    id: 'landing-page-funnels',
    title: 'Landing Page Design & Funnels',
    tagline: 'High-Converting Landing Pages & Sales Funnels',
    description: 'Professionally designed landing pages and sales funnels that convert visitors into customers. Optimized for maximum conversions and user engagement.',
    icon: LayoutTemplate,
    color: '#10b981',
    features: [
      {
        icon: FileSearch,
        title: 'Conversion Optimization',
        description: 'Designed to maximize conversions and engagement',
      },
      {
        icon: Share2,
        title: 'Lead Capture',
        description: 'Effective forms and CTAs to capture leads',
      },
      {
        icon: BarChart2,
        title: 'A/B Testing',
        description: 'Test different versions to optimize performance',
      },
      {
        icon: LineChart,
        title: 'Analytics',
        description: 'Track performance and user behavior',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Strategy & Planning',
        description: 'Define goals and target audience',
      },
      {
        number: '02',
        title: 'Design & Copywriting',
        description: 'Create compelling visuals and copy',
      },
      {
        number: '03',
        title: 'Development',
        description: 'Build and optimize the landing page',
      },
      {
        number: '04',
        title: 'Launch & Optimize',
        description: 'Go live and continuously improve',
      },
    ],
    tools: [
      { name: 'Unbounce', category: 'Landing Page Builder' },
      { name: 'Leadpages', category: 'Landing Pages' },
      { name: 'ClickFunnels', category: 'Sales Funnels' },
      { name: 'Google Optimize', category: 'A/B Testing' },
    ]
  },
  {
    id: 'portfolio-resume',
    title: 'Portfolio/Resume Websites',
    tagline: 'Showcase Your Work & Professional Journey',
    description: 'Elegant and professional portfolio and resume websites that highlight your skills, experience, and achievements in a visually appealing way.',
    icon: FileText,
    color: '#f59e0b',
    features: [
      {
        icon: LayoutTemplate,
        title: 'Custom Design',
        description: 'Unique design that reflects your personal brand',
      },
      {
        icon: User,
        title: 'Professional Profile',
        description: 'Showcase your skills and experience',
      },
      {
        icon: Image,
        title: 'Portfolio Gallery',
        description: 'Display your work with beautiful galleries',
      },
      {
        icon: Share2,
        title: 'Social Integration',
        description: 'Connect your social media profiles',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Content Strategy',
        description: 'Plan your content and structure',
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create your custom portfolio site',
      },
      {
        number: '03',
        title: 'Content Integration',
        description: 'Add your work samples and resume',
      },
      {
        number: '04',
        title: 'Launch & Promote',
        description: 'Go live and share with your network',
      },
    ],
    tools: [
      { name: 'React', category: 'Framework' },
      { name: 'Next.js', category: 'SSG' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Framer Motion', category: 'Animations' },
    ]
  },
  {
    id: 'seo-analytics',
    title: 'Basic SEO Setup & Analytics',
    tagline: 'Improve Your Online Visibility',
    description: 'Essential SEO setup and analytics to help your website rank higher in search results and understand your audience better.',
    icon: Search,
    color: '#3b82f6',
    features: [
      {
        icon: Search,
        title: 'Keyword Research',
        description: 'Find the right keywords to target',
      },
      {
        icon: BarChart2,
        title: 'Performance Tracking',
        description: 'Monitor your website\'s performance',
      },
      {
        icon: Zap,
        title: 'Technical SEO',
        description: 'Optimize your site\'s technical aspects',
      },
      {
        icon: LineChart,
        title: 'Analytics',
        description: 'Understand your audience and traffic',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'SEO Audit',
        description: 'Analyze your current SEO status',
      },
      {
        number: '02',
        title: 'On-Page Optimization',
        description: 'Optimize content and meta tags',
      },
      {
        number: '03',
        title: 'Analytics Setup',
        description: 'Configure tracking and reporting',
      },
      {
        number: '04',
        title: 'Ongoing Support',
        description: 'Monitor and improve over time',
      },
    ],
    tools: [
      { name: 'Google Analytics', category: 'Analytics' },
      { name: 'Google Search Console', category: 'SEO' },
      { name: 'Screaming Frog', category: 'SEO Audit' },
      { name: 'Ahrefs', category: 'Backlink Analysis' },
    ]
  }
];

// Function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Function to get all services
export const getAllServices = (): Service[] => {
  return [...services];
};
