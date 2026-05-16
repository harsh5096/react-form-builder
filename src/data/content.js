export const personal = {
  name: 'Harsh Joshi',
  role: 'Full Stack Engineer with AI Integration Expertise',
  shortBio:
    "Building scalable MERN stack applications, AI-powered automation systems, and cloud-based solutions with a focus on performance, user experience, and real-world impact.",
  longBio:
    "I’m a passionate Full Stack Developer with hands-on experience building scalable web applications, AI-powered solutions, and automation systems. Currently working at Morpheme Webnexus Pvt. Ltd., I specialize in MERN stack development, backend optimization, WhatsApp automation, and cloud deployment using AWS.\n\nWith a strong foundation in Data Structures & Algorithms (250+ problems solved) and an MCA in AI/ML, I enjoy combining software engineering with modern AI technologies like RAG, LangChain, Vector Databases, and Generative AI. I’ve worked on impactful projects ranging from real-time disease prediction systems using CNNs to AI-powered news platforms and enterprise POS/social media management systems.\n\nI focus on building fast, reliable, and user-friendly products while continuously learning new technologies to solve real-world problems efficiently.",
  email: 'harshjoshihj3382565@gmail.com',
  phone: '+91 9548215889',
  location: 'Noida, India',
  socials: {
    github: 'https://github.com/harsh5096',
    linkedin: 'https://linkedin.com/in/harsh-joshi-467796253',
    email: 'mailto:harshjoshihj3382565@gmail.com',
  },
  resume: '/images/hjHarsh-joshi.pdf',
  avatar: '/images/formal-pick.png',
};

export const skills = [
  { group: 'Programming Languages', items: ['C', 'C++', 'Python', 'SQL', 'TypeScript', 'JavaScript'] },
  { group: 'Front-End Technologies', items: ['Tailwind CSS', 'React.js', 'Next.js'] },
  { group: 'Back-End Technologies', items: ['Node.js', 'Express.js', 'FastAPI'] },
  { group: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma'] },
  { group: 'LLM/GenAI', items: ['Prompt Engineering', 'RAG', 'Embeddings', 'Vector Search (Pinecone)', 'LangChain'] },
  { group: 'Tools', items: ['GitHub', 'Postman', 'Docker', 'AWS', 'Supabase', 'Firebase', 'Redis'] },
  { group: 'Problem-Solving', items: ['Solved 250+ DSA problems (LeetCode, GeeksforGeeks)'] },
];

export const projects = [
  {
    title: 'Potato Disease Prediction',
    description:
      'Developed a CNN-based potato disease detection app with 95%+ accuracy and FastAPI REST APIs delivering predictions in ~400ms latency. Deployed on AWS EC2 + S3 using Nginx and Gunicorn.',
    tech: ['Python', 'React.js', 'FastAPI', 'CNN', 'AWS'],
    accent: 'from-emerald-400 to-teal-500',
    link: 'https://github.com/harsh5096/Potato-disease/tree/master/potato-project',
  },
  {
    title: 'Chatbot SaaS – Multi-Tenant AI Agent Platform (Ongoing)',
    description:
      'Architected a multi-tenant SaaS platform with BYO-AI support for deploying custom AI agents. Built a Pinecone-based vector memory system using hybrid retrieval with similarity and recency scoring. Developed an MCP-based Action Runner with Redis caching and async job queues.',
    tech: ['Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'Pinecone'],
    accent: 'from-amber-400 to-orange-500',
    link: 'https://github.com/harsh5096/chatbot-saas',
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
  }
];

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Morpheme Webnexus Pvt. Ltd.',
    period: 'Sep 2025 – Present',
    description:
      'Building scalable AI community platforms and international commerce systems with multi-tenant architecture and MCP integrations.',
    details: [
      'Project 1: AI-Powered Community Builder Platform - Built a scalable WhatsApp automation system using WAHA server, handling 100+ customer messages/day for notifications and support.',
      'Developed secure REST APIs with JWT authentication, optimized backend performance using Redis caching and asynchronous background jobs.',
      'Managed deployment on AWS (EC2, RDS, Lambda) with Cloudflare and resolved critical Python/API production issues to improve system stability.',
      'Project 2: International Shipping & Multi-Tenant Commerce Platform - Built an international shipping platform with scalable data modeling and multi-tenant RBAC architecture using PostgreSQL.',
      'Integrated Zonos, Stripe, and PayPal for international tax calculation, payments, and refund management.',
      'Implemented Firebase real-time services, OCR-based document processing, AI chatbot support, and automated notifications using MCP integrations.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Bitquark Technologies',
    period: 'Feb 2025 – Sep 2025',
    description:
      'Reduced checkout time by 40% and built real-time MERN social media management platforms.',
    details: [
      'Collaborated on a POS system used across 5+ departments; reduced checkout time by 40% through responsive UI improvements and optimized inventory workflows.',
      'Contributed to a MERN-stack social media management platform with post scheduling, analytics dashboards, and real-time collaboration features using MongoDB, MySQL, REST APIs, and JWT authentication.',
    ],
  }, {
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

export const achievements = [
  'Excel Basics for Data Analysis',
  'Web Development Intern Certificate',
  'Python for Data Science, AI, and Development',
  'Problem-Solving: Solved 250+ DSA problems (LeetCode, GeeksforGeeks)',
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];
