import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Zap, Settings, BarChart, MessageSquare, Share2, Cpu, Bot, Database, Code, Layout, Monitor } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
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

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 'crm-automation',
      title: 'CRM Automation',
      tagline: 'Transform Your Customer Relationships',
      description: 'Automate your entire customer journey—from lead capture to follow-ups—with our intelligent CRM automation solutions. Save time, reduce errors, and close more deals with less effort.',
      icon: Users,
      color: '#ff00ff',
      features: [
        {
          icon: Zap,
          title: 'Lead Management',
          description: 'Automatically capture and qualify leads from multiple sources',
        },
        {
          icon: Settings,
          title: 'Workflow Automation',
          description: 'Create custom workflows for sales and customer service',
        },
        {
          icon: BarChart,
          title: 'Analytics Dashboard',
          description: 'Track performance and get actionable insights',
        },
        {
          icon: MessageSquare,
          title: 'Customer Communication',
          description: 'Automate emails, follow-ups, and notifications',
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
      },
    },
    {
      id: 'social-media-automation',
      title: 'Social Media Automation',
      tagline: 'Streamline Your Social Presence',
      description: 'Automate your social media marketing with our comprehensive solutions. Schedule posts, engage with your audience, and analyze performance across all platforms from one dashboard.',
      icon: Share2,
      color: '#00b4d8',
      features: [
        {
          icon: Share2,
          title: 'Content Scheduling',
          description: 'Plan and schedule posts across all your social channels',
        },
        {
          icon: MessageSquare,
          title: 'Engagement Tools',
          description: 'Automate responses and engage with your audience',
        },
        {
          icon: BarChart,
          title: 'Performance Analytics',
          description: 'Track engagement and measure ROI with detailed reports',
        },
        {
          icon: Users,
          title: 'Audience Insights',
          description: 'Understand your audience and optimize your strategy',
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
          description: 'Configure automated posting and engagement rules',
        },
        {
          number: '04',
          title: 'Performance Optimization',
          description: 'Analyze results and refine your strategy',
        },
      ],
      tools: [
        { name: 'Buffer', category: 'Scheduling' },
        { name: 'Hootsuite', category: 'Management' },
        { name: 'Canva', category: 'Design' },
        { name: 'Google Analytics', category: 'Analytics' },
        { name: 'Sprout Social', category: 'Engagement' },
        { name: 'Later', category: 'Visual Planning' },
      ],
      caseStudy: {
        title: 'Social Media Growth for E-commerce',
        description: 'Helped an e-commerce brand increase social media engagement by 150% and drive 3x more website traffic through automation.',
        result: 'Achieved 200% ROI within 3 months of implementation.'
      },
    },
    {
      id: 'business-automation',
      title: 'End to End Business Automation',
      tagline: 'Transform Your Entire Operation',
      description: 'Streamline your entire business with our comprehensive automation solutions. From lead generation to customer support, we automate repetitive tasks so you can focus on growth.',
      icon: Cpu,
      color: '#7209b7',
      features: [
        {
          icon: Zap,
          title: 'Process Automation',
          description: 'Automate repetitive tasks across departments',
        },
        {
          icon: Database,
          title: 'Data Integration',
          description: 'Connect all your business systems and data sources',
        },
        {
          icon: Bot,
          title: 'AI-Powered Automation',
          description: 'Leverage AI for intelligent process automation',
        },
        {
          icon: Settings,
          title: 'Custom Workflows',
          description: 'Build tailored automation for your unique business needs',
        },
      ],
      steps: [
        {
          number: '01',
          title: 'Business Process Audit',
          description: 'Identify automation opportunities across your organization',
        },
        {
          number: '02',
          title: 'Solution Design',
          description: 'Create a customized automation roadmap',
        },
        {
          number: '03',
          title: 'Implementation',
          description: 'Deploy and integrate automation solutions',
        },
        {
          number: '04',
          title: 'Optimization',
          description: 'Continuously monitor and improve automation',
        },
      ],
      tools: [
        { name: 'Zapier', category: 'Integration' },
        { name: 'Make.com', category: 'Automation' },
        { name: 'Airtable', category: 'Database' },
        { name: 'Notion', category: 'Workspace' },
        { name: 'Slack', category: 'Communication' },
        { name: 'Google Workspace', category: 'Productivity' },
      ],
      caseStudy: {
        title: 'End-to-End Automation for Scaling Business',
        description: 'Implemented comprehensive automation for a growing startup, reducing operational costs by 40% and enabling 3x business growth without additional hires.',
        result: 'Achieved 300% ROI within 6 months through efficiency gains.'
      },
    },
    {
      id: 'web-development',
      title: 'Web Development',
      tagline: 'Build Stunning Digital Experiences',
      description: 'Create fast, responsive, and user-friendly websites and web applications with the latest technologies. From simple landing pages to complex web apps, we deliver exceptional digital experiences.',
      icon: Monitor,
      color: '#4361ee',
      features: [
        {
          icon: Code,
          title: 'Custom Development',
          description: 'Tailored solutions built to your exact specifications',
        },
        {
          icon: Layout,
          title: 'Responsive Design',
          description: 'Perfectly optimized for all devices and screen sizes',
        },
        {
          icon: Zap,
          title: 'Fast Performance',
          description: 'Lightning-fast load times and smooth interactions',
        },
        {
          icon: Settings,
          title: 'SEO Optimized',
          description: 'Built with search engine visibility in mind',
        },
      ],
      steps: [
        {
          number: '01',
          title: 'Planning & Discovery',
          description: 'Understand your goals and requirements',
        },
        {
          number: '02',
          title: 'UI/UX Design',
          description: 'Create wireframes and design mockups',
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
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Vercel', category: 'Hosting' },
      ],
      caseStudy: {
        title: 'E-commerce Platform Development',
        description: 'Developed a custom e-commerce solution that increased conversion rates by 75% and reduced page load times by 60%.',
        result: 'Achieved 3x more sales within the first quarter post-launch.'
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We help businesses automate their processes and improve efficiency with our cutting-edge solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              shadowColor={`${service.color}40`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;