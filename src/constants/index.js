// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Weather based Korean Menu Recommender",
    description:
      "Recommend a Korean dish based on weather condition and temperature.",
    href: "https://weather-kmenu.vercel.app/",
    image: "/assets/projects/kmenu.png",
    bgImage: "/assets/backgrounds/kmenu.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Javascript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "OpenWeathermap" },
    ],
  },
  {
    id: 2,
    name: "TRIPPASS",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/trippass.png",
    bgImage: "/assets/backgrounds/trippass.jpg",
    frameworks: [
      { id: 1, name: "React, Javascript" },
      { id: 2, name: "Python, FastAPI" },
      { id: 3, name: "MySQL, MongoDB" },
      { id: 4, name: "OpenAI, Gemini, SerpAPI, OpenWeathermap" },
    ],
  },
  {
    id: 3,
    name: "On the Rock",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/ontherock.png",
    bgImage: "/assets/backgrounds/ontherock.jpg",
    frameworks: [
      { id: 1, name: "Python, Javascript" },
      { id: 2, name: "FastAPI, NodeJS" },
      { id: 3, name: "MySQL, MongoDB" },
    ],
  },
  {
    id: 4,
    name: "Emotion Palette",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/emotionpalette.png",
    bgImage: "/assets/backgrounds/emotionpalette.jpg",
    frameworks: [
      { id: 1, name: "Python, C#" },
      { id: 2, name: "MediaPipe, Unity" },
      { id: 3, name: "Firebase" },
    ],
  },
];
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/seyoung-oh/" },
  { name: "GitHub", href: "https://github.com/osy0602" },
];