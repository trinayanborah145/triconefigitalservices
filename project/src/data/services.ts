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
    id: 'web-development',
    title: 'Web Development',
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
    id: 'social-media-automation',
    title: 'Social Media Automation',
    tagline: 'Streamline Your Social Presence',
    description: 'Automate your social media marketing to save time and increase engagement. Schedule posts, analyze performance, and grow your audience across all platforms with our comprehensive social media automation solutions.',
    icon: Share2,
    color: '#00b4d8',
    features: [
      {
        title: 'Content Scheduling',
        description: 'Plan and schedule posts across multiple platforms',
        icon: Calendar,
      },
      {
        title: 'Analytics & Reporting',
        description: 'Track performance and measure ROI',
        icon: BarChart2,
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
  // Handle the end-to-end-business-automation ID which might be coming as business-automation
  if (id === 'business-automation' || id === 'end-to-end-business-automation') {
    return services.find(service => service.id === 'end-to-end-business-automation');
  }
  return services.find(service => service.id === id);
};

// Function to get all services
export const getAllServices = (): Service[] => {
  return [...services];
};
