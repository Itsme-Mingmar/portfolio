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
      frontend:       "https://github.com/Itsme-Mingmar/regional-ott-frontend",
      backend:        "https://github.com/Itsme-Mingmar/regional-ottbackfinal",
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
    title: "MovieRecommender — ML System",
    category: "ML",           // ← NEW
    // image: "/screenshots/recommender.png",

    description:
      "Machine learning-based recommendation system using collaborative filtering and content-based filtering techniques.",

    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "React", "TensorFlow"],

    github: {
      frontend: "https://github.com/mingmartamang/movie-recommender",
    },

    live: "https://movierecommender-demo.herokuapp.com",

    details: {
      problem:
        "Users spend too much time searching for movies they might like, and existing recommendation systems lack personalization.",

      solution:
        "Developed a hybrid recommendation system combining collaborative filtering and content-based approaches to provide highly accurate movie suggestions.",

      features: [
        "Hybrid recommendation algorithm",
        "User preference learning",
        "Real-time recommendations",
        "Similarity score visualization",
        "Genre-based filtering",
        "Rating prediction system",
      ],

      challenges:
        "Handling the cold-start problem for new users and optimizing the recommendation algorithm for real-time performance with a large movie database.",
    },
  },
]