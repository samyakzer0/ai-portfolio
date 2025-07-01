'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'ACUTE',
    category: 'Blockchain',
    description: 'Blockchain based file transfers.',
    longDescription:
      'Securely share your files using blockchain technology and IPFS storage. End-to-end encryption ensures your belongings remain private and accessible.',
    technologies: ['Ether,js', 'IPFS', 'Ethereum', 'React', 'Solidity'],
    image: '/api/placeholder/600/400',
    demoUrl: 'https://acutev2.vercel.app/',
    githubUrl: 'https://github.com/samyakzer0/acutev2',
    featured: true
  },
  {
    id: '2',
    title: 'MirrorMe',
    category: 'Real-time Feedbacks',
    description: 'Real-time insights on your speaking habits',
    longDescription:
      'MirrorMe.AI is an AI-powered real-time feedback system designed to help users improve their speaking habits during live voice or video calls (like Zoom, Google Meet, etc.).',
    technologies: ['OpenAI GPT4', 'HuggingFace Interference API', 'Whisper'],
    image: '/api/placeholder/600/400',
    demoUrl: 'https://mirrorme-ai.vercel.app/',
    githubUrl: 'https://github.com/samyakzer0/mirrorme.ai',
    featured: true
  },
  {
    id: '3',
    title: 'Smart Analytics Dashboard',
    category: 'Data Science',
    description: 'Real-time AI-powered analytics platform',
    longDescription:
      'Interactive dashboard that provides real-time insights using machine learning algorithms. Features predictive modeling, anomaly detection, and automated reporting. Built for enterprise-scale data processing with support for multiple data sources and custom visualization tools.',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
    image: '/api/placeholder/600/400',
    demoUrl: 'https://analytics.samyak.ai',
    githubUrl: 'https://github.com/samyak/smart-analytics',
    featured: false
  },
  {
    id: '4',
    title: 'Conversational AI Bot',
    category: 'Natural Language Processing',
    description: 'Advanced chatbot with contextual understanding',
    longDescription:
      'Next-generation conversational AI that understands context, maintains conversation history, and provides intelligent responses. Integrated with multiple APIs and databases to provide accurate, real-time information. Features multi-language support and sentiment analysis.',
    technologies: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'WebSocket'],
    image: '/api/placeholder/600/400',
    demoUrl: 'https://chatbot.samyak.ai',
    githubUrl: 'https://github.com/samyak/ai-chatbot',
    featured: false
  }
]

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header - matching existing style */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl lg:text-8xl font-light mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient">WORK</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI solutions that push the boundaries of innovation
          </motion.p>
        </motion.div>

        {/* Projects Grid - simplified and clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover:-translate-y-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                
                {/* Project Image Area */}
                <div className="h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="text-gray-400 dark:text-gray-600 text-sm">
                    {project.title}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 text-xs font-medium text-gray-600 dark:text-gray-400">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal - matching existing theme */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-gray-600 dark:text-gray-400"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Content */}
                <div className="p-12">
                  {/* Header */}
                  <div className="mb-12">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">
                      {selectedProject.category}
                      {selectedProject.featured && (
                        <span className="ml-4">• FEATURED PROJECT</span>
                      )}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-light mb-6">
                      <span className="text-gradient">{selectedProject.title}</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Preview Area */}
                  <div className="mb-12 h-64 bg-gray-100 dark:bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-800">
                    <div className="text-gray-400 dark:text-gray-600">
                      Project Preview
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6">Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-all font-light"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-600 transition-all font-light"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
