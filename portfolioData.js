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
        "React.Js",
        "Next.Js",
        "Node.Js",
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
      name: "Subtend",
      type: "Personal Project",
      year: "2026 - Ongoing",
      description:
        "A full-stack team collaboration platform built around workspaces, teams, projects and issues, with a focus on access control, asynchronous processing, issue lifecycle management and operational visibility.",
      highlights: [
        "Engineered a hierarchical workspace → team → project → issue architecture with role-based access control, custom status workflows and granular issue management.",
        "Built a complete authentication system with short-lived JWT access tokens, rotating refresh tokens, HTTP-only cookies and custom Google OAuth 2.0.",
        "Implemented asynchronous email infrastructure using Redis and BullMQ, handling OTP verification and workspace invitations through background workers with Resend.",
        "Designed an issue attention engine that scores issues based on status, priority, overdue duration, staleness and assignment state, powering the dashboard's Action Required section.",
        "Built workspace activity tracking with before/after state snapshots for issue changes, providing an auditable history of status, priority, assignment and content updates.",
        "Implemented a complete deletion lifecycle for teams and projects with soft deletion, Trash-based recovery, restoration and scheduled permanent purging through background jobs, keeping logical deletion separate from physical data removal.",
        "Designed relational data models and REST APIs using PostgreSQL, Prisma and Express.js, with authorization enforced across workspace, team and project boundaries.",
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
      liveUrl: "https://subtend.vishubanotra.xyz/",
      repositories: {
        frontend: "https://github.com/vishubanotra98/subtend-web",
        backend: "https://github.com/vishubanotra98/subtend-api",
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
      liveUrl: "https://thecakeshopp.vercel.app/",
      repositories: {
        frontend: "https://github.com/vishubanotra98/TheCakeShop",
        backend: "https://github.com/vishubanotra98/cakeShop-restApi",
      },
    },
  ],
};
