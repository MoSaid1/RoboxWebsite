// Static marketing copy for the site. Kept in code (not the database) because it
// changes rarely and benefits from version control, same as the original site.

export const CONTACT = {
  location: "5th District – 6th October – Giza, Egypt",
  email: "info@robox-industries.com",
  phone: "+20 121 000 8719",
  phoneHref: "+201210008719",
  whatsapp: "https://api.whatsapp.com/message/3H6SXUEBWO3EM1",
  facebook: "https://www.facebook.com/robox.industries/",
  linkedin: "https://www.linkedin.com/company/robox-industries/",
  instagram: "https://www.instagram.com/robox_industries",
  youtube: "https://www.youtube.com/",
};

export const NAV_CATEGORIES = [
  { key: "delivery", label: "Delivery Robots", category: "Delivery" },
  { key: "advertising", label: "Advertising Robots", category: "Advertising" },
  { key: "service", label: "Service Robots", category: "Service" },
  { key: "educational", label: "Educational Robotic Kits", category: "Education" },
];

export const HERO_SLIDES = [
  {
    title: "Welcome to",
    highlight: "Robox",
    subtitle: "Crafting a powerful machines",
    description:
      "We design intelligent robotic systems that transform how businesses operate — automating tasks with precision and innovation. Empowering industries to work smarter, safer, and faster.",
    buttons: [
      { text: "Our Company", to: "/company" },
      { text: "Contact Us", to: "/contact" },
    ],
    visual: { label: "Hero visual — flagship robot, studio shot", ratio: "1 / 1" },
    chips: ["10+ Robot Models", "500+ Deployments"],
  },
  {
    title: "Innovative",
    highlight: "Automation",
    subtitle: "Tailored robotic systems built around your needs.",
    description:
      "From initial concept to full-scale integration, our solutions are crafted to enhance efficiency, reduce costs, and ensure long-term sustainability. We turn automation into a true business advantage.",
    buttons: [
      { text: "Our Products", to: "/products" },
      { text: "Contact Us", to: "/contact" },
    ],
    visual: { label: "Hero visual — robotic arm on a smart factory line", ratio: "1 / 1" },
    chips: ["Custom Integration", "Full-Scale Automation"],
  },
  {
    title: "Advanced",
    highlight: "Technology",
    subtitle: "Advertising Robots",
    description:
      "Where technology meets creativity. Adbot by Robox is an intelligent advertising robot that turns marketing inside malls and exhibitions into interactive, memorable experiences. It dynamically displays ads, interacts with visitors, and gives brands a new, living presence.",
    buttons: [
      { text: "Show More", to: "/products?category=advertising" },
      { text: "Request Adbot", to: "/contact?category=advertising" },
    ],
    visual: { label: "Hero visual — Adbot advertising robot in a mall atrium", ratio: "1 / 1" },
    chips: ["Interactive Ads", "Mall & Exhibition Ready"],
  },
  {
    title: "Precision",
    highlight: "Delivery Robots",
    subtitle: "Seamless delivery. Maximum reliability.",
    description:
      "Discover Robox's smart delivery robots. Whether in hospitality or logistics, our robots ensure smooth, contactless operations that elevate your customer experience.",
    buttons: [
      { text: "Show More", to: "/products?category=delivery" },
      { text: "Request a Demo", to: "/contact?category=delivery" },
    ],
    visual: { label: "Hero visual — delivery robot in a hotel lobby", ratio: "1 / 1" },
    chips: ["Contactless Delivery", "24/7 Operation"],
  },
];

export const OUR_STORY = {
  title: "Our Story",
  paragraphs: [
    "Robox Industries is a robotics company specializing in the design, manufacturing, and assembly of innovative robotic solutions for businesses.",
    "We are committed to developing cutting-edge technology that automates jobs or accelerates repetitive tasks across various industries, enhancing efficiency, safety, and productivity.",
  ],
};

export const COMPANY_PAGE = {
  heroTitle: "About Robox Industries",
  heroDescription:
    "At Robox Industries, we believe in the power of robotics to transform the way the world works. Founded with a vision to push the boundaries of industrial innovation, we specialize in designing, manufacturing, and assembling advanced robotic solutions that empower businesses to operate smarter, safer, and more efficiently.",
  whoWeAre: {
    title: "Who We Are",
    description:
      "Robox Industries is a forward-thinking robotics company built by engineers, designers, and industry experts who share a passion for solving real operational challenges through technology. We combine deep technical expertise with a strong understanding of industrial needs to deliver reliable automated systems that create measurable impact. From high-risk operations to repetitive tasks, our robots are engineered to streamline workflows, reduce operational costs, and maximize productivity across a wide range of industries.",
  },
  mission: {
    title: "Our Mission",
    description:
      "To revolutionize industrial operations by developing cutting-edge robotic technologies that enhance efficiency, safety, and long-term business performance.",
  },
  vision: {
    title: "Our Vision",
    description:
      "A future where robotics becomes an accessible, trusted, and essential part of every industry — empowering companies to achieve more with intelligent automation.",
  },
  values: [
    {
      title: "Innovation",
      description:
        "We continuously explore new ideas, technologies, and engineering methods to shape the future of automation.",
    },
    {
      title: "Customer Focus",
      description:
        "We build strong partnerships and tailor our solutions to address each client's unique operational goals.",
    },
    {
      title: "Quality",
      description:
        "We are committed to delivering high-performance, durable, and reliable robotic systems that exceed expectations.",
    },
    {
      title: "Local Expertise",
      description:
        "Proudly leveraging regional talent and resources to design and manufacture robots built for our local market and ready for global competition.",
    },
  ],
  whyChoose: {
    title: "Why Robox Industries",
    intro: "What sets us apart is our end-to-end approach to automation.",
    lead: "From concept and design to production, integration, and after-sales support, we ensure every solution is:",
    list: ["Precise", "Scalable", "Safe", "Cost-effective", "Built for long-term performance"],
    outro: [
      "We don't just develop robots, we develop business advantages.",
      "Our systems help companies optimize operations, reduce labor strain, minimize risks, and unlock sustainable growth.",
    ],
  },
  cta: {
    title: "Explore the Future of Automation",
    subtitle:
      "Robox Industries is shaping the next era of industrial innovation. Whether you're looking to automate a single task or transform your entire workflow, our expertise and technology are here to drive your success.",
  },
};

export const INQUIRY_TYPES = [
  "General Inquiry",
  "Request a Quote",
  "Product Demo",
  "Technical Support",
  "Partnership",
  "Other",
];

export const HEAR_ABOUT_OPTIONS = [
  "Search Engine",
  "Social Media",
  "Referral",
  "Exhibition / Event",
  "Advertisement",
  "Other",
];
