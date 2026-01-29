export const projects = [
  {
    id: "oceaniq",
    title: "OceanIQ - Marine Data Intelligence Platform",
    category: "AI & Data Science",
    featured: true,
    sihWinner: true,
    shortDesc: "SIH 2025 Winner - AI-powered platform for analyzing 30GB+ of complex NetCDF data.",
    fullDesc: "OceanIQ is a pioneering marine data intelligence platform designed to democratize access to complex oceanographic data. It processes over 30GB of high-dimensional NetCDF data from Argo floats, transforming raw binary streams into actionable insights. At its core, the system utilizes a Retrieval-Augmented Generation (RAG) pipeline powered by Google Gemini 2.5 and FAISS, allowing researchers to query vast datasets using natural language. The architecture includes a Python FastAPI backend for heavy data lifting and a MERN stack frontend for interactive visualization.",
    problem: "Analyzing multi-dimensional Marine NetCDF files traditionally requires specialized coding skills (Python/Matlab) and significant computational resources, creating a barrier for non-technical researchers and policy makers.",
    solution: "We built an end-to-end AI platform that ingests raw NetCDF data, indexes it into a vector database for semantic search, and provides a conversational interface. Features include automated anomaly detection, 3D trajectory visualization of floats, and instant statistical analysis via a chat interface.",
    tech: [
      "MERN Stack",
      "FastAPI (Python)",
      "Google Gemini 2.5",
      "FAISS Vector DB",
      "RAG Pipeline",
      "NetCDF Processing",
      "Argo Float API",
      "Leaflet Maps",
      "Docker",
      "Redis Caching",
      "Chart.js"
    ],
    impact: [
      "🏆 Won Smart India Hackathon 2025 (Grand Finale)",
      "📊 Successfully processed & indexed 30GB+ of global ocean data",
      "⚡ Reduced complex query time from hours of manual coding to seconds",
      "🎯 Empowered non-technical researchers with NLI (Natural Language Interface)",
      "🗺️ Visualized 4D trajectories (Lat, Long, Depth, Time) in real-time"
    ],
    features: [
      "Natural Language Querying (RAG)",
      "Automated NetCDF Data Ingestion Pipeline",
      "Interactive 3D Trajectory Visualization",
      "Real-time Anomaly Detection",
      "Multi-modal Data Analysis (Text + Spatial)",
      "Chat-based Statistical Reporting"
    ],
    github: "https://github.com/amitsauraurv/oceaniq",
    demo: "https://oceaniq-demo.vercel.app",
    images: ["/OceanIQ.png"],
    year: "2025"
  },
  {
    id: "aarogyam",
    title: "Aarogyam 1.0 - Smart Health Management Platform",
    category: "HealthTech & Analytics",
    featured: true,
    shortDesc: "Comprehensive health platform with hospital dashboards, outbreak prevention, and digital health cards.",
    fullDesc: "Aarogyam 1.0 is a holistic healthcare ecosystem engineered to bridge the gap between hospital administration and public health monitoring. It serves two key stakeholders: Hospital Admins (for resource management) and Public Health Officials (for epidemic tracking). The platform features a unique 'Migrant Tracking System' to monitor health trends across borders and a 'Digital Health Card' system that uses QR codes for instant patient history retrieval, ensuring seamless care continuity.",
    problem: "The lack of centralized health data leads to delayed responses during disease outbreaks and inefficient bed/resource tracking in hospitals, especially in rural or high-migrant areas.",
    solution: "A unified cloud-based platform offering real-time analytics. Hospitals get a live dashboard for bed availability and OPD stats. The government gets an 'Outbreak Prediction Heatmap' powered by aggregated patient symptom data to detect potential epidemics early.",
    tech: [
      "React.js + Vite",
      "TypeScript",
      "Redux Toolkit",
      "Supabase (PostgreSQL)",
      "Google Maps API",
      "Recharts Data Viz",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js & Express",
      "JWT Authentication"
    ],
    impact: [
      "🏥 optimized operation flow for 50+ simulation hospitals",
      "🚨 Early Warning System for disease clusters and outbreaks",
      "🆔 Instant Patient Identification (< 2sec) via QR Cards",
      "📊 Real-time visualization of Migrant Health Trends",
      "🌍 Scalable architecture supporting multi-regional deployments"
    ],
    features: [
      "Real-time Hospital Resource Dashboard",
      "QR-Based Digital Health Cards",
      "Geospatial Outbreak Heatmaps",
      "Migrant Worker Health Tracking",
      "Automated OPD Analytics",
      "Role-based Access Control (RBAC)"
    ],
    github: "https://github.com/amitsauraurv/aarogyam",
    demo: "https://aarogyam-demo.vercel.app",
    images: ["/Aarogyam.png"],
    year: "2024"
  },
  {
    id: "smartsalgo",
    title: "SmartsAlgo - Ultimate AI Coding Platform",
    category: "EdTech & AI",
    featured: true,
    shortDesc: "Next-gen coding platform with 3D visuals, Smarter AI feedback, and Judge0 execution.",
    fullDesc: "SmartsAlgo redefines the coding interview preparation experience by merging a high-fidelity 3D environment with serious algorithmic capabilities. Unlike standard coding platforms, it employs a 3D immersive dashboard built with Three.js to gamify the learning process. Under the hood, it leverages the Judge0 API for robust, multi-language code execution and integrates Google Gemini to provide semantic code analysis—explaining not just 'what' is wrong, but 'why' and 'how' to optimize it.",
    problem: "Standard coding platforms like LeetCode or HackerRank can feel static and isolating. Beginners often struggle to understand opaque error messages without human guidance.",
    solution: "We created an engaging, gamified ecosystem. The 'AI Co-pilot' acts as a personal mentor, analyzing code logic in real-time. The Judge0 integration ensures that code runs in a secure, sandboxed environment across 40+ programming languages.",
    tech: [
      "React 19",
      "Three.js (R3F)",
      "Judge0 API",
      "Monaco Editor",
      "Google GenAI",
      "Redis Caching",
      "Redux Toolkit",
      "Tailwind v4",
      "Node.js/Express",
      "MongoDB",
      "Framer Motion"
    ],
    impact: [
      "🚀 Increased user engagement time via Immersive 3D UI",
      "⚡ Sub-second code execution for 40+ Languages",
      "🤖 AI Mentor provides context-aware debugging hints",
      "🔒 Secure, sandboxed execution environment",
      "🌐 Real-time leaderboard and progress tracking"
    ],
    features: [
      "Immersive 3D Developer Dashboard",
      "Multi-language Compilation (Judge0)",
      "AI-Powered Code Optimization Tips",
      "VS Code-like Editor Experience (Monaco)",
      "Problem-Solving Gamification System"
    ],
    github: "https://github.com/amitsauraurv/smartsalgo",
    demo: "https://smartsalgo-demo.vercel.app",
    images: ["/SmartsAlgo.png"],
    year: "2025"
  },
  {
    id: "siteforge",
    title: "SiteForge - AI Website Builder",
    category: "AI & Web Development",
    featured: true,
    shortDesc: "AI-powered website builder leveraging React.js, Redux, Tailwind CSS, and Node.js.",
    fullDesc: "SiteForge is an intelligent website generation engine that translates natural language prompts into fully responsive, production-ready websites. Leveraging OpenAI's GPT models for code generation and a custom React rendering engine, it allows users to simply describe their dream website (e.g., 'A portfolio for a photographer with a dark theme') and see it built in seconds. It features a live drag-and-drop editor for fine-tuning and supports one-click deployment to AWS.",
    problem: "Small business owners and creatives need professional web presence but often lack the budget for agencies or the skills for complex site builders.",
    solution: "An 'Idea-to-Site' engine. Tech-wise, it uses Handlebars for dynamic templating and Socket.io to allow multiple users to collaborate on the design in real-time, similar to Figma.",
    tech: [
      "React.js",
      "Node.js & Express",
      "Socket.io",
      "Redux Toolkit",
      "Tailwind CSS",
      "Handlebars",
      "OpenAI API",
      "MongoDB",
      "AWS S3",
      "OAuth 2.0"
    ],
    impact: [
      "🚀 Reduced website creation time from days to minutes",
      "⏱️ empowered 100+ non-technical users to launch sites",
      "👥 Enabled real-time multi-user design collaboration",
      "🎨 Generated consistent, high-quality UI designs automatically"
    ],
    features: [
      "Prompt-based Website Generation (NLP)",
      "Real-time Collaborative Editor (Socket.io)",
      "Component-level Drag & Drop Customization",
      "Automated Responsive Layout Handling",
      "Instant Cloud Deployment Pipeline"
    ],
    github: "https://github.com/amitsauraurv/siteforge",
    demo: "https://siteforge-demo.vercel.app",
    images: ["/projects/siteforge-1.jpg"],
    year: "2024"
  },
  {
    id: "ai-automation",
    title: "AI Automation & Agent Workflows",
    category: "AI & Automation",
    featured: true,
    shortDesc: "Collection of AI automation projects using LangChain, RAG, and AI agents.",
    fullDesc: "This is a suite of advanced autonomous agents and automation workflows designed to handle complex business logic. It moves beyond simple chatbots to 'Action Agents' capable of performing tasks. The suite includes an RAG-based document analyzer, a customer support triage agent, and an automated data extraction pipeline. Built using LangChain for orchestration and n8n for workflow visualizaton.",
    problem: "Businesses spend thousands of hours on repetitive data entry, categorization, and basic customer support queries.",
    solution: "Self-governing AI Agents. For example, the 'Support Agent' doesn't just answer questions; it can query the database, check order status, and process refunds autonomously within defined safety limits.",
    tech: [
      "LangChain",
      "OpenAI GPT-4",
      "Python",
      "FastAPI",
      "Pinecone Vector DB",
      "n8n Automation",
      "Docker",
      "Streamlit",
      "HuggingFace Transformers",
      "Pandas & NumPy"
    ],
    impact: [
      "⚡ Automating 40% of standard manual data workflows",
      "🤖 Deployed 'Action Agents' that can use API tools",
      "📊 Seamless integration with existing enterprise SQL DBs",
      "💡 Demonstrated autonomous reasoning capabilities"
    ],
    features: [
      "Autonomous 'Action Agents' with Tool Use",
      "RAG Document Analysis Pipeline",
      "Visual Workflow Builder (n8n integration)",
      "Multi-Agent Collaboration Systems",
      "API-First Design for easy integration"
    ],
    github: "https://github.com/amitsauraurv/ai-automation",
    images: ["/projects/ai-automation-1.jpg"],
    year: "2024"
  },
  {
    id: "swiggy-clone",
    title: "Swiggy Clone - Food Delivery App",
    category: "Full Stack",
    featured: false,
    shortDesc: "Full-stack food delivery application built with React.js featuring real-time updates.",
    fullDesc: "A pixel-perfect, high-performance clone of a major food delivery platform, engineered to handle complex state management and real-time data flow. It features a microservice-ready backend architecture. The frontend handles complex cart logic (restaurant-specific grouping, add-ons) and uses Redux for global state sync. Real-time order tracking simulates the live delivery experience using WebSockets.",
    problem: "Building a delivery app requires mastering complex many-to-many relationships (Users <-> Restaurants <-> Orders <-> Drivers) and real-time state synchronization.",
    solution: "A scalable full-stack solution. We implemented JWT for secure persistent sessions, Stripe for payment processing simulation, and an admin dashboard for restaurant menu management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT Authentication",
      "Stripe Payments",
      "Socket.io",
      "Cloudinary"
    ],
    impact: [
      "📱 Demonstrated mastery of complex React State patterns",
      "🔐 Secure, production-grade Auth implementation",
      "🛒 Robust Cart & Order Management Logic",
      "📍 Real-time websocket communication layer"
    ],
    features: [
      "Live Order Status Tracking (Simulated)",
      "Complex Cart Management System",
      "Restaurant Menu & Search Filtering",
      "Secure Payment Gateway Integration",
      "Admin Panel for Menu Management"
    ],
    github: "https://github.com/amitsauraurv/swiggy-clone",
    demo: "https://swiggy-clone-demo.vercel.app",
    images: ["/projects/swiggy-1.jpg"],
    year: "2023"
  }
];

export const featuredProjects = projects.filter(p => p.featured);
