/** Update `linkedinUrl` and `githubUrl` with your full profile links when ready. */
export const profile = {
  fullName: 'Chenwi Edna Neh',
  shortName: 'CHENWI',
  title: 'Software Engineer',
  location: 'Douala, Cameroon',
  phoneDisplay: '+237 679 611 727',
  phoneTel: '+237679611727',
  email: 'chenwieddy@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/',
  githubUrl: 'https://github.com/',
  summary:
    'Results-driven Software Engineer with 4+ years of experience designing high-performance backend systems and full-stack applications. I specialize in Node.js, TypeScript, PHP (Laravel), and React—building secure, scalable APIs and data-driven platforms. Proven track record reducing backend latency, maintaining 99.9% data availability, and shipping ahead of deadline in agile teams.',
  aboutHighlight: 'BACKEND & FULL-STACK',
} as const

export const projects = [
  {
    id: 'reepls',
    title: 'REEPLS',
    tags: 'Node.js, Express, React, TypeScript, Tailwind CSS',
    description:
      'Publishing platform for African creators—long-form writing and storytelling away from noisy social feeds. Backend APIs, authentication, and content delivery.',
    url: 'https://reepls.com/',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'learnoso',
    title: 'Learnoso',
    tags: 'Laravel, MySQL, React, Tailwind CSS',
    description:
      'Scalable LMS with video conferencing, live lectures, quizzes, multi-role dashboards (admin, tutors, students), academic tracking, and financial modules.',
    url: 'https://www.learnoso.com/',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b05541c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'testlangues',
    title: 'TestLanguesUB',
    tags: 'Laravel, MySQL, Bootstrap, Tailwind CSS',
    description:
      'Digital exam registration for the Faculty of Arts, University of Buea—replacing manual workflows, cutting admin time, and reducing paper-based errors.',
    url: null,
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'tradelabfx',
    title: 'Tradelabfx',
    tags: 'Laravel, MySQL, React, Angular, Bootstrap',
    description:
      'Crypto trading platform with secure deposits/withdrawals, multi-currency trading, admin oversight, and safeguards against fraudulent transactions.',
    url: 'https://tradelabfx.online/',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80&auto=format&fit=crop',
  },
] as const
