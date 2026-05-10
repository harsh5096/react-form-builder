export const personal = {
  name: 'Harsh Joshi',
  role: 'Full Stack Engineer with AI Integration Expertise',
  shortBio:
    "Building scalable MERN stack applications, AI-powered automation systems, and cloud-based solutions with a focus on performance, user experience, and real-world impact.",
  longBio:
    "I’m a passionate Full Stack Developer with hands-on experience building scalable web applications, AI-powered solutions, and automation systems. Currently working at Morpheme Webnexus Pvt. Ltd., I specialize in MERN stack development, backend optimization, WhatsApp automation, and cloud deployment using AWS.\n\nWith a strong foundation in Data Structures & Algorithms (250+ problems solved) and an MCA in AI/ML, I enjoy combining software engineering with modern AI technologies like RAG, LangChain, Vector Databases, and Generative AI. I’ve worked on impactful projects ranging from real-time disease prediction systems using CNNs to AI-powered news platforms and enterprise POS/social media management systems.\n\nI focus on building fast, reliable, and user-friendly products while continuously learning new technologies to solve real-world problems efficiently.",
  email: 'harshjoshijh3382565@gmail.com',
  phone: '+91 9548215889',
  location: 'Noida, India',
  socials: {
    github: 'https://github.com/harsh5096',
    linkedin: 'https://linkedin.com/in/harsh-joshi-467796253',
    email: 'mailto:harshjoshijh3382565@gmail.com',
  },
  resume: '/images/hjHarsh-joshi.pdf',
  avatar: '/images/formal-pick.png',
};

export const skills = [
  { group: 'Programming Languages', items: ['C', 'C++', 'Python', 'SQL', 'TypeScript', 'JavaScript'] },
  { group: 'Front-End Technologies', items: ['Tailwind CSS', 'React.js', 'Next.js'] },
  { group: 'Back-End Technologies', items: ['Node.js', 'Express.js', 'FastAPI', 'Celery'] },
  { group: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Vector Database'] },
  { group: 'LLM/GenAI', items: ['Prompt Engineering', 'RAG', 'Embeddings', 'Vector Search (Pinecone)', 'LangChain'] },
  { group: 'Tools', items: ['GitHub (CI/CD)', 'Postman', 'Docker', 'AWS (S3, EC2, RDS, Lambda, VPC)', 'Cloudflare', 'Redis', 'WAHA'] },
  { group: 'Problem-Solving', items: ['Solved 250+ DSA problems (LeetCode, GeeksforGeeks)'] },
];

export const projects = [
  {
    title: 'Potato Disease Prediction',
    description:
      'AI-powered web app that detects potato leaf diseases using CNN. Real-time inference with FastAPI backend.',
    tech: ['Python', 'React', 'FastAPI', 'CNN'],
    accent: 'from-emerald-400 to-teal-500',
    link: 'https://github.com/harsh5096/Potato-disease/tree/master/potato-project',
  },
  {
    title: 'Mastermind News',
    description:
      'Smart news platform with AI-powered Q&A and text-to-audio. Intelligent aggregation with conversational AI.',
    tech: ['React', 'NewsAPI', 'OpenAI'],
    accent: 'from-indigo-400 to-purple-500',
    link: 'https://github.com/harsh5096/news-website',
  },
  {
    title: 'AI-Powered CRM',
    description:
      'Enterprise-grade CRM with AI lead scoring, automated WhatsApp workflows, and dynamic tool integration for sales teams.',
    tech: ['MERN', 'OpenAI', 'Node.js', 'Express'],
    accent: 'from-pink-400 to-rose-500',
    link: 'https://github.com/harshjoshihj4567-debug/AI_crm',
  },
  {
    title: 'Multi-Tenant Chatbot SaaS',
    description:
      'A scalable SaaS platform for custom AI chatbots with vector memory (Pinecone), dynamic API tool building, and multi-tenant security.',
    tech: ['Next.js', 'PostgreSQL', 'Redis', 'Pinecone'],
    accent: 'from-amber-400 to-orange-500',
    link: 'https://github.com/harsh5096/chatbot-saas',
  },
];

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Morpheme Webnexus Pvt. Ltd.',
    period: 'Sep 2025 – Present',
    description:
      'Implemented WhatsApp automation (WAHA), developed REST APIs with JWT & Redis caching, and managed AWS production deployments.',
    details: [
      'Implemented WhatsApp automation using WAHA server, handling 100+ messages/day for customer updates and follow-ups',
      'Developed REST APIs with JWT authentication and improved performance using Redis caching + background jobs with Celery, optimized DB on Supabase (PostgreSQL)',
      'Deployed and monitored production on AWS (EC2, RDS, Lambda) with Cloudflare, and fixed Python/API production bugs to ensure stability',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Bitquark Technologies',
    period: 'Feb 2025 – Sep 2025',
    description:
      'Collaborated on a departmental POS system (40% faster checkout) and built a MERN social media platform with real-time features.',
    details: [
      'Collaborated on a POS system used across 5+ departments; reduced checkout time by 40% via responsive UI improvements and optimized inventory sync workflows.',
      'Contributed to a MERN-stack social media management platform with post scheduling, analytics dashboards, and team collaboration; implemented real-time features using MongoDB + MySQL, AJAX, REST APIs, JWT authentication, and Context API.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'AISTECHX International',
    period: 'Dec 2022 – Mar 2023',
    description:
      'Built mobile-friendly React interfaces and optimized backend queries/logic for core projects.',
    details: [
      'Designed and built mobile-friendly web interfaces using React.js, enhancing layout adaptability and boosting user engagement across devices.',
      'Refactored backend logic and optimized database queries in 2 core projects, improving performance and ensuring timely deliverables.',
    ],
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];
