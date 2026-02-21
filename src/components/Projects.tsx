'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX, FiZoomIn } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Finance Agent ',
    description:
      'An LLM-powered financial analyst with advanced RAG and real-time stock quotes.',
    tech: ['Python', 'LangGraph', 'OpenAI', 'WebSocket', 'FastAPI'],
    image: '/financepage.jpg',
    github: 'https://github.com/Frida7771/yahoo-finance-agent',
  },
  {
    title: 'Cloud Storage',
    description:
      'A cloud storage platform for secure file upload, sharing, and subscription-based storage.',
    tech: ['Go', 'AWS S3', 'MySQL', 'React', 'Stripe'],
    image: '/clouddist.jpg',
    github: 'https://github.com/frida7771/cloud-dist',
  },
  {
    title: 'Knowledge Base',
    description:
      'Knowledge platform with RAG chat and Elasticsearch semantic search.',
    tech: ['Python', 'FastAPI', 'React', 'Elasticsearch', 'RAG'],
    image: '/atlaskb.jpg',
    github: 'https://github.com/Frida7771/AtlasKB',
  },
  {
    title: 'AI Code Helper',
    description:
      'AI programming assistant with RAG and streaming chat using LangChain4j.',
    tech: ['Java', 'Spring Boot', 'React', 'OpenAI'],
    image: '/aicodehelper.jpg',
    github: 'https://github.com/Frida7771/ai-code-helper',
  },
  {
    title: 'Voice Assistant',
    description:
      'An offline Chinese/English ASR/TTS system supporting real-time speech-to-text and synthesis.',
    tech: ['Python', 'FastAPI', 'ONNX', 'Paraformer', 'MeloTTS'],
    image: '/PyVoice.jpg',
    github: 'https://github.com/Frida7771/PyVoice',
  },
  {
    title: 'Gomoku AI',
    description:
      'Gomoku game with AI using Minimax and Alpha-Beta pruning.',
    tech: ['C#', 'Algorithm', 'Minimax', 'ASP.NET'],
    image: '/GomokuAI.jpg',
    github: 'https://github.com/Frida7771/GomokuAI',
  },
  {
    title: 'Health Tracker',
    description:
      'Health tracking system with data visualization and smart evaluations.',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL'],
    image: '/healthmanager.jpg',
    github: 'https://github.com/Frida7771/HealthManager',
  },
  {
    title: 'Allergy Aware Recipes',
    description:
      'A recipe sharing web application designed for users with food allergies.',
    tech: ['React', 'Node.js', 'MongoDB', 'MERN','Typescript'],
    image: '/flavorlab.jpg',
    github: 'https://github.com/Frida7771/AllergyAware_Recipes',
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-slate-800">
          <span className="font-mono text-slate-400 font-normal">//</span>
          Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg shadow-black/30"
                  onClick={() =>
                    setSelectedImage({ src: project.image, title: project.title })
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <FiZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="font-mono text-slate-400 text-sm mb-2 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX className="w-8 h-8" />
          </button>
          <h3 className="absolute top-6 left-6 text-xl font-semibold text-white">
            {selectedImage.title}
          </h3>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      )}
    </section>
  );
}
