export type Language = 'en' | 'ru';

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface UIContent {
  viewDetails: string;
  systemModule: string;
  backToServices: string;
  backToJournal: string;
  readyToStart: string;
  share: string;
  readMore: string;
  lightMode: string;
  darkMode: string;
  initializing: string;
  systemLog: string;
  endOfBuffer: string;
  readOnly: string;
  notFound: string;
  goHome: string;
  articleNotFound: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  cta: string;
  whyChooseUs: {
    title: string;
    items: Feature[];
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessContent {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  paymentTitle: string;
  paymentDescription: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];
  ctaTitle: string;
  ctaButton: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  cta: string;
  faq: FAQItem[];
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  liveUrl: string;
  description: string;
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  outro: string;
  visitLink: string;
  items: ProjectItem[];
}

export interface FooterContent {
  sitemapTitle: string;
  contactTitle: string;
  rights: string;
  privacy: string;
  developedBy: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface ContentDictionary {
  nav: NavItem[];
  ui: UIContent;
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  process: ProcessContent;
  faq: FAQContent;
  footer: FooterContent;
}
