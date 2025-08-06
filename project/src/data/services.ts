import { 
  Zap, 
  Settings, 
  Code, 
  Layout, 
  Monitor, 
  ShoppingBag, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Shield, 
  Share2, 
  Cpu,
  LayoutTemplate,
  FileText,
  BarChart2,
  BarChart,
  Search,
  LineChart,
  User,
  Users,
  Image,
  Smartphone,
  MessageSquare,
  Calendar,
  RefreshCw,
  Link
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
    tagline: 'Build Stunning Digital Experiences',
    description: 'Create fast, responsive, and user-friendly websites and web applications with the latest technologies. From simple landing pages to complex web apps, we deliver exceptional digital experiences that drive results.',
    icon: Monitor,
    color: '#4361ee',
    features: [
      {
        title: 'Responsive Design',
        description: 'Perfectly optimized for all devices and screen sizes',
        icon: Smartphone,
      },
      {
        title: 'Custom Development',
        description: 'Tailored solutions built to your exact specifications',
        icon: Code,
      },
      {
        title: 'E-commerce Solutions',
        description: 'Build powerful online stores with seamless checkout',
        icon: ShoppingCart,
      },
      {
        title: 'Performance Optimization',
        description: 'Lightning-fast load times and smooth interactions',
        icon: Zap,
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Planning & Discovery',
        description: 'We analyze your requirements and create a detailed project plan',
      },
      {
        number: '02',
        title: 'UI/UX Design',
        description: 'Create wireframes and design mockups for your approval',
      },
      {
        number: '03',
        title: 'Development',
        description: 'Build the website with clean, maintainable code',
      },
      {
        number: '04',
        title: 'Testing & Launch',
        description: 'Thorough testing and smooth deployment',
      },
    ],
    tools: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Framework' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Vercel', category: 'Hosting' },
    ],
    caseStudy: {
      title: 'E-commerce Platform Development',
      description: 'Developed a custom e-commerce solution that increased conversion rates by 75% and reduced page load times by 60%.',
      result: 'Achieved 3x more sales within the first quarter post-launch.'
    },
  },
  {
    id: 'crm-automation',
    title: 'CRM Automation',
    tagline: 'Transform Your Customer Relationships',
    description: 'Automate your entire customer journey—from lead capture to follow-ups—with our intelligent CRM automation solutions. Save time, reduce errors, and close more deals with less effort.',
    icon: Users,
    color: '#ff00ff',
    features: [
      {
        title: 'Lead Management',
        description: 'Automatically capture and qualify leads from multiple sources',
        icon: Zap,
      },
      {
        title: 'Workflow Automation',
        description: 'Create custom workflows for sales and customer service',
        icon: Settings,
      },
      {
        title: 'Analytics Dashboard',
        description: 'Track performance and get actionable insights',
        icon: BarChart,
      },
      {
        title: 'Customer Communication',
        description: 'Automate emails, follow-ups, and notifications',
        icon: MessageSquare,
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Discovery & Analysis',
        description: 'We analyze your current sales process and identify automation opportunities.',
      },
      {
        number: '02',
        title: 'CRM Setup & Integration',
        description: 'Configure your CRM and connect it with your existing tools.',
      },
      {
        number: '03',
        title: 'Workflow Design',
        description: 'Create custom automation workflows tailored to your business needs.',
      },
      {
        number: '04',
        title: 'Deployment & Training',
        description: 'Launch your automated CRM and train your team for success.',
      },
    ],
    tools: [
      { name: 'HubSpot', category: 'CRM' },
      { name: 'Zapier', category: 'Automation' },
      { name: 'Pipedrive', category: 'Sales' },
      { name: 'ActiveCampaign', category: 'Marketing' },
      { name: 'Slack', category: 'Communication' },
      { name: 'Google Workspace', category: 'Productivity' },
    ],
    caseStudy: {
      title: 'Boosting Sales with Automated Lead Nurturing',
      description: 'Helped a B2B company automate their lead nurturing process, resulting in 3x more qualified leads and 45% faster sales cycle.',
      result: 'Increased conversion rate by 60% and reduced manual work by 30 hours per week.'
    }
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
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Maximize Your Social Media Presence',
    description: 'Expert social media management services to boost your online presence, engagement, and conversions.',
    icon: Share2,
    color: '#00b4d8',
    features: [
      {
        title: 'Content Scheduling',
        description: 'Plan and schedule posts across multiple platforms',
        icon: Calendar,
      },
      {
        icon: LineChart,
        title: 'Social Media Analytics',
        description: 'Track performance and measure ROI',
      },
      {
        title: 'Engagement Tools',
        description: 'Automate responses and interactions',
        icon: MessageSquare,
      },
      {
        title: 'Content Curation',
        description: 'Discover and share relevant content',
        icon: Share2,
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Strategy Development',
        description: 'Define your social media goals and target audience',
      },
      {
        number: '02',
        title: 'Content Planning',
        description: 'Create a content calendar and schedule posts',
      },
      {
        number: '03',
        title: 'Automation Setup',
        description: 'Configure automation rules and workflows',
      },
      {
        number: '04',
        title: 'Launch & Monitor',
        description: 'Go live and track performance metrics',
      },
    ],
    tools: [
      { name: 'Hootsuite', category: 'Social Media Management' },
      { name: 'Buffer', category: 'Scheduling' },
      { name: 'Sprout Social', category: 'Analytics' },
      { name: 'Canva', category: 'Design' },
      { name: 'Google Analytics', category: 'Analytics' },
    ],
    caseStudy: {
      title: 'Social Media Growth Campaign',
      description: 'Implemented a comprehensive social media automation strategy that increased engagement by 85% and grew the client\'s following by 120% in just three months.',
      result: 'Achieved a 3x return on ad spend and reduced manual work by 20 hours per week.'
    }
  },
  {
    id: 'end-to-end-business-automation',
    title: 'End to End Business Automation',
    tagline: 'Complete Digital Transformation',
    description: 'Transform your entire business with our end-to-end automation solutions. From lead generation to customer support, we automate repetitive tasks and streamline your operations for maximum efficiency and growth.',
    icon: Settings,
    color: '#7209b7',
    features: [
      {
        title: 'Process Automation',
        description: 'Automate repetitive tasks across departments',
        icon: RefreshCw,
      },
      {
        title: 'Integration',
        description: 'Connect all your business applications',
        icon: Link,
      },
      {
        title: 'Analytics',
        description: 'Get insights into your business performance',
        icon: BarChart,
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored automation for your unique needs',
        icon: Code,
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Business Analysis',
        description: 'Identify automation opportunities in your workflows',
      },
      {
        number: '02',
        title: 'Solution Design',
        description: 'Design custom automation solutions',
      },
      {
        number: '03',
        title: 'Integration',
        description: 'Connect all your business applications',
      },
      {
        number: '04',
        title: 'Deployment',
        description: 'Implement and test the automation',
      },
    ],
    tools: [
      { name: 'Zapier', category: 'Automation' },
      { name: 'Make (Integromat)', category: 'Automation' },
      { name: 'Airtable', category: 'Database' },
      { name: 'Slack', category: 'Communication' },
      { name: 'Google Workspace', category: 'Productivity' },
    ],
    caseStudy: {
      title: 'Complete Business Automation',
      description: 'Automated 80% of manual processes for a growing startup, reducing operational costs by 40% and improving efficiency across all departments.',
      result: 'Enabled the company to scale 3x without increasing headcount.'
    }
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
