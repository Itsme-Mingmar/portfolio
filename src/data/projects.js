import { image } from "framer-motion/client";

export const projects = [
  {
    id: 1,
    title: "Regional OTT Streaming Platform",
    category: "Full Stack",   // ← NEW  ('Full Stack' | 'MERN' | 'ML')
    featured: true,
    image: "images/regional-ott.png",        // ← NEW  shows ★ badge


    description:
      "A full-stack regional OTT streaming platform designed to promote local and regional content with personalized movie recommendations, secure authentication, and content management features.",

    techStack: [
      "React", "Node.js", "Express.js", "MongoDB",
      "Tailwind CSS", "JWT", "Python", "FastAPI",
    ],

    github: {
      frontend: "https://github.com/Itsme-Mingmar/regional-ott-frontend",
      backend: "https://github.com/Itsme-Mingmar/regional-ottbackfinal",
      recommendation: "https://github.com/Itsme-Mingmar/regional-ott-recommendation",
    },

    live: "https://regional-ott.vercel.app/",

    details: {
      problem:
        "Regional movies and cultural content are often difficult to access through mainstream streaming services. Users also face challenges discovering relevant content tailored to their preferences.",

      solution:
        "Developed a regional OTT streaming platform that enables users to explore and stream regional content while receiving personalized movie recommendations based on genres and user interests. The platform integrates a recommendation system to improve content discovery and user engagement.",

      features: [
        "Secure user authentication and authorization using JWT",
        "Subscription-based plan selection (Free & Premium)",
        "Movie browsing with province-based categorization",
        "Personalized recommendation system integration",
        "Search and filtering functionality",
        "Responsive user interface for desktop and mobile",
        "Admin content management dashboard",
      ],

      challenges:
        "One of the key challenges was integrating the recommendation system with the main application and ensuring smooth communication between the MERN application and Python backend. Managing authentication flow, subscription plans, and scalable content organization also required careful system design.",

      learnings:
        "This project strengthened my understanding of full-stack development, REST API integration, authentication, recommendation systems, and deploying interconnected applications.",
    },
  },
  {
    id: 2,
    title: "Nutripulse - Nutrition supply store",
    category: "MERN",           // ← NEW
    // image: "/screenshots/recommender.png",

    description:
      "A full-stack e-commerce platform for a nutrition supply store with product management, user authentication, and payment integration.",

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],

    github: {
      frontend: "https://github.com/Itsme-Mingmar/E-commerce-/tree/main/frontend",
      backend: "https://github.com/Itsme-Mingmar/E-commerce-/tree/main/backend",
    },

    //live: "https://nutripulse.vercel.app",

    details: {
      problem:
        "Customers often find it difficult to discover and purchase health and nutrition products through a simple, organized, and user-friendly online platform.",

      solution:
        "Developed NutriPulse, a full-stack e-commerce platform that enables users to browse, search, and purchase nutrition and wellness products through a secure and responsive online shopping experience.",

      features: [
        "User authentication and authorization",
        "Product browsing and search",
        "Category-based product filtering",
        "Shopping cart management",
        "Secure checkout process",
        "Order management dashboard",
      ],

      challenges:
        "Implementing secure user authentication, managing shopping cart state, designing an intuitive user interface, and ensuring efficient product and order management across the application.",
    },
  },
]