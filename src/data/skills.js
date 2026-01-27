export const skills = {
  frontend: {
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  backend: {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 80 },
      { name: "WebRTC", level: 75 },
    ]
  },
  aiAutomation: {
    title: "AI & Automation",
    icon: "brain",
    items: [
      { name: "LLMs", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "RAG Pipelines", level: 85 },
      { name: "AI Agents", level: 80 },
      { name: "Cursor AI", level: 75 },
      { name: "n8n", level: 70 },
    ]
  },
  databases: {
    title: "Databases",
    icon: "database",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Vector DB", level: 75 },
    ]
  },
  programming: {
    title: "Programming",
    icon: "code",
    items: [
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 85 },
    ]
  },
  tools: {
    title: "Tools & DevOps",
    icon: "wrench",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 80 },
    ]
  }
};

export const skillsArray = Object.values(skills).flatMap(category => 
  category.items.map(item => ({ ...item, category: category.title }))
);
