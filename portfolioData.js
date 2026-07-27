window.portfolioData = {
  profile: {
    name: "Vishu Vishal Banotra",
    title: "Full-stack Developer",
    email: "banotravishu89@gmail.com",
    github: "https://github.com/vishubanotra98",
    linkedin: "https://linkedin.com/in/vishu-vishal-banotra-107828160",
  },
  skills: [
    {
      title: "Languages",
      icon: "code-2",
      items: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: "layout-dashboard",
      items: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "Material UI",
        "SASS",
      ],
    },
    {
      title: "Backend",
      icon: "server",
      items: ["Node.js", "Express.js", "JWT", "Google OAuth 2.0", "REST APIs"],
    },
    {
      title: "Database",
      icon: "database",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Mongoose",
        "Redis",
        "BullMQ",
      ],
    },
    {
      title: "Tools",
      icon: "terminal",
      items: ["Git", "GitHub", "Docker", "Postman"],
    },
  ],
  experience: [
    {
      period: "Jul 2024 – Nov 2025",
      role: "Software Developer",
      company: "Vodex.ai • Bangalore",
      bullets: [
        "Rebuilt the legacy application UI using React and Material UI based on updated Figma designs.",
        "Built a visual workflow automation interface using ReactFlow v11 and Redux Toolkit.",
        "Implemented a hybrid RSA-AES encryption layer for secure client-server communication.",
        "Resolved critical frontend issues to improve application stability and user experience.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "ReactFlow",
        "Material UI",
        "REST APIs",
      ],
    },
  ],
  projects: [
    {
      name: "TaskFlow",
      type: "Personal Project",
      year: "2026",
      description:
        "A Jira-inspired team collaboration platform with workspaces, Kanban boards, project management, role-based access control and invitation-based onboarding.",
      highlights: [
        "Built secure authentication using JWT access tokens, refresh tokens and custom Google OAuth 2.0 with HTTP-only cookies.",
        "Implemented invitation-based onboarding using Resend, BullMQ and Redis for asynchronous email processing.",
        "Designed REST APIs and relational database models using Express.js, Prisma ORM and PostgreSQL.",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "BullMQ",
        "Tailwind CSS",
      ],
      liveUrl: "https://taskflow.vercel.app",
      repositories: {
        frontend: "https://github.com/vishubanotra98/taskflow-frontend",
        backend: "https://github.com/vishubanotra98/taskflow-backend",
      },
    },
    {
      name: "The Cake Shop",
      type: "Personal Project",
      year: "2023",
      description:
        "A MERN-based e-commerce application with product management, secure authentication and online payment integration.",
      highlights: [
        "Integrated Razorpay to support secure online payments.",
        "Implemented JWT authentication and role-based access control for users and administrators.",
        "Built REST APIs using Express.js and MongoDB with a responsive React frontend powered by Redux.",
      ],
      stack: [
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Razorpay API",
      ],
      liveUrl: "https://taskflow.vercel.app",
      repositories: {
        frontend: "https://github.com/vishubanotra98/taskflow-frontend",
        backend: "https://github.com/vishubanotra98/taskflow-backend",
      },
    },
  ],
};
