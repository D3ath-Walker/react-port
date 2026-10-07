import portfolioImg from './imgNvid/rp.jpeg';
import cccImg from './imgNvid/ccc.jpeg';
import pdfRagImg from './imgNvid/rag.jpeg';
import dietPlannerImg from './imgNvid/diet.jpeg';
import htmlLearningHubImg from './imgNvid/html.jpeg';

import htmlLearningHubVideo from './imgNvid/html.mp4';

export const projects = [
  {
    id: "html-learning-hub",
    title: "HTML Learning Hub",
    category: "Full Stack",
    description: "A full-stack educational platform that helps students learn HTML through 50 structured lessons, track their progress, and store their learning data securely. Students register, log in, mark lessons complete, and follow their journey through a personalized dashboard.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Render"],
    liveUrl: "https://html-video-project.pages.dev/",
    githubUrl: "https://github.com/D3ath-Walker/HTML-video-project",
    image: htmlLearningHubImg, // <-- your screenshot
    video: htmlLearningHubVideo, // <-- your demo clip
  },
  {
    id: "ccc",
    title: "Code Correction Championship",
    category: "Full Stack • Anti-Cheat",
    description: "A full-stack online examination platform for secure coding competitions. Questions are controlled in real time through an admin panel, with anti-cheat measures like tab-switch detection, copy-paste disabling, and auto-disqualification.",
    tags: ["JavaScript", "Express.js", "MongoDB Atlas", "Render"],
    liveUrl: "https://ccc-site-a6j.pages.dev/",
    githubUrl: "https://github.com/D3ath-Walker/CCC-Site",
    image: cccImg,
    video: null,
  },
  {
    id: "pdf-rag",
    title: "PDF RAG",
    category: "AI / Full Stack",
    description: "A full-stack Retrieval-Augmented Generation system built from scratch — PDF extraction, chunking, embeddings, and hybrid cosine similarity + BM25 search feeding a local LLM for answer generation. FastAPI backend with multi-document support, React frontend.",
    tags: ["FastAPI", "React", "Docker", "RAG", "LLM"],
    liveUrl: null,
    githubUrl: "https://github.com/D3ath-Walker/PDF-RAG",
    image: pdfRagImg,
    video: null,
  },
  {
    id: "diet-planner",
    title: "Diet Planner",
    category: "Full Stack",
    // PLACEHOLDER — send real details when ready
    description: "A personal diet and routine tracker that logs daily meals, tracks calories, protein, carbs, and fats, and gives you a clear view of your day at a glance.",
    tags: ["React", "TypeScript", "Supabase"],
    liveUrl: null,
    githubUrl: "https://github.com/D3ath-Walker/Diet",
    image: dietPlannerImg,
    video: null,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "React",
    description: "This portfolio — migrated from vanilla HTML/CSS/JS to React + Vite + Tailwind CSS v4 for a component-driven, faster-loading site.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/D3ath-Walker/react-port",
    image: portfolioImg,
    video: null,
  },
]