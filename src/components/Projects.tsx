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
    title: 'Financial Research Copilot ',
    description:
      'A LLM-powered agent for Yahoo Finance, supporting stock information retrieval, SEC document search, and API response generation.',
    tech: ['Python', 'LangChain', 'OpenAI', 'Yahoo Finance API', 'SEC API'],
    image: '/financeagent.jpg',
    github: 'https://github.com/Frida7771/yahoo-finance-agent',
  },
  {
    title: 'Cloud Dist',
    description:
      'A cloud storage platform for secure file upload, sharing, and subscription-based storage. Supports resumable uploads, deduplication, and fine-grained access control.',
    tech: ['Go', 'AWS S3', 'MySQL', 'React', 'Stripe'],
    image: '/clouddist.jpg',
    github: 'https://github.com/frida7771/cloud-dist',
  },
  {
    title: 'AtlasKB',
    description:
      'A private LLM-powered knowledge base for document ingestion and knowledge reuse. Supports semantic search, conversational retrieval, and knowledge export.',
    tech: ['Python', 'FastAPI', 'React', 'Elasticsearch', 'RAG'],
    image: '/atlaskb.jpg',
    github: 'https://github.com/Frida7771/AtlasKB',
  },
  {
    title: 'AI Code Helper',
    description:
      'An AI-powered code assistant supporting code explanation, optimization suggestions, and bug fixes. Built with Spring Boot + React, integrated with LLM model.',
    tech: ['Java', 'Spring Boot', 'React', 'OpenAI'],
    image: '/aicodehelper.jpg',
    github: 'https://github.com/Frida7771/ai-code-helper',
  },
  {
    title: 'PyVoice',
    description:
      'An offline Chinese ASR/TTS system supporting real-time speech-to-text and synthesis. Features optimized audio processing pipelines and WebSocket-based streaming.',
    tech: ['Python', 'FastAPI', 'ONNX', 'Paraformer', 'MeloTTS'],
    image: '/PyVoice.jpg',
    github: 'https://github.com/Frida7771/PyVoice',
  },
  {
    title: 'LeetCode Review',
    description:
      'An algorithm practice review tool supporting Blind 75, Hot 100, and NeetCode 150 problem sets. Features smart review reminders based on spaced-repetition scheduling.',
    tech: ['Node.js', 'JWT', 'OAuth', 'JavaScript', 'PostgreSQL', 'AWS EC2'],
    image: '/leetreviewer.jpg',
    demo: 'https://leetreviewer.com',
  },
  {
    title: 'Health Manager',
    description:
      'A full-stack health monitoring platform for logging and analyzing personal health metrics. Features trend visualization, goal tracking, and personalized health-news recommendations.',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL'],
    image: '/healthmanager.jpg',
    github: 'https://github.com/Frida7771/HealthManager',
  },
  {
    title: 'Smart Home',
    description:
      'A smart home control system built with object-oriented design patterns. Supports modular device management through console and GUI interfaces.',
    tech: ['Java', 'Design Pattern'],
    image: '/smarthome.jpg',
    github: 'https://github.com/Frida7771/SmartHome',
  },
  {
    title: 'FlavorLab',
    description:
      'A recipe sharing web application designed for users with food allergies. Supports allergen filtering, recipe flagging, and responsive recipe management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Typescript'],
    image: '/flavorlab.jpg',
    github: 'https://github.com/Frida7771/AllergyAware_Recipes',
  },
  {
    title: 'Chinese Chess',
    description:
      'A classic Chinese Chess (Xiangqi) game with AI opponent. Features multiple difficulty levels, move hints, and game replay functionality.',
    tech: ['Java', 'Algorithm', 'Minimax', 'Alpha-Beta'],
    image: '/Chinesechess.jpg',
    github: 'https://github.com/Frida7771/ChineseChess',
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="font-mono text-cyan-400 font-normal">//</span>
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
                <span className="font-mono text-cyan-400 text-sm mb-2 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-md border border-cyan-400/20"
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
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors"
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
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-medium text-sm rounded-lg"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
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
