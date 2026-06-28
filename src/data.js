export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = {
  Frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Angular', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js', 'ASP.NET Core', 'ASP.NET MVC'],
  Databases: ['MongoDB', 'SQL Server'],
  'Core Fundamentals': ['OOP', 'Data Structures', 'Algorithms', 'System Design'],
  'Tools & Architecture': ['Git / GitHub', 'REST APIs', 'JWT', 'Postman', 'Swagger'],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Vesta',
    subtitle: 'Real Estate Investment Platform',
    badge: 'Graduation Project',
    tech: ['ASP.NET Core', 'ASP.NET MVC', 'SQL Server', 'JWT'],
    image: 'Vesta.jpeg',
    demo: null,
    github: null,
    bullets: [
      'Engineered a secure platform supporting 500+ concurrent users.',
      'Optimized database schemas in SQL Server improving query response times by 20%.',
    ],
  },
  {
    id: 2,
    title: 'EduNexa',
    subtitle: 'Educational Platform',
    badge: null,
    tech: ['React.js', 'ASP.NET Core', 'SQL Server'],
    image: 'Edunexta.png',
    demo: 'https://edunexa-v1.vercel.app',
    github: null,
    bullets: [
      'Developed a dynamic frontend with React.js that reduced page load times by 25%.',
      'Integrated robust state management for seamless user experience.',
    ],
  },
  {
    id: 3,
    title: 'Rahal AI – Egypt Travel Planner ',
    subtitle: 'Developed a full-stack AI-powered travel planning platform',
    badge: null,
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    image: 'rahal.png',
    demo: null,
    github: null,
    bullets: [
      'Built a full-stack travel booking platform using the MERN stack with Next.js',
      'Developed RESTful APIs for user authentication, booking management, and travel services using Node.js, Express.js, and MongoDB.',
    ],
  },
  {
    id: 4,
    title: 'Airport Management System',
    subtitle: 'Aviation Data Platform',
    badge: null,
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    demo: null,
    github: null,
    bullets: [
      'Architected modular backend logic handling 1,000+ simulated aviation records.',
      'Implemented MongoDB indexing to speed up data retrieval by 30%.',
    ],
  },
  {
    id: 5,
    title: 'Donations Management System',
    subtitle: 'Non-Profit Backend API',
    badge: null,
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
    demo: null,
    github: null,
    bullets: [
      'Developed secure REST APIs ensuring zero data loss during high-volume transaction testing.',
      'Built analytical tracking for donation flows.',
    ],
  },
  {
    id: 6,
    title: 'E-Commerce Application',
    subtitle: 'Full Frontend Shopping Experience',
    badge: null,
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    image: 'E-commerce.jpg',
    demo: null,
    github: null,
    bullets: [
      'Crafted responsive UI components improving client-side rendering speed by 40%.',
      'Achieved absolute cross-browser compatibility across all modern platforms.',
    ],
  },
]
