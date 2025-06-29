'use client'

import { motion } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

export default function TechStack() {
  const aiBuilderTools = [
    { content: "Framer" },
    { content: "Lovable" },
    { content: "Bolt" },
    { content: "Hugging Face" },
    { content: "Cursor AI" },
    { content: "Vercel" },
    { content: "Replicate" },
    { content: "LangChain" },
    { content: "OpenAI" },
    { content: "Gradio" },
    { content: "Weights & Biases" },
    { content: "Runway ML" },
    { content: "Pinecone" },
    { content: "Unbody" },
    { content: "Supabase" },
    { content: "Streamlit" },
    { content: "ChatGPT Plugins" },
  ];

  return (
    <section id="techstack" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-light mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient">TECH STACK</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My favorite tools for building with AI — fast, scalable and creator-focused.
          </motion.p>
        </motion.div>

        {/* Centered Infinite Scroll */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-light mb-6 text-gray-800 dark:text-gray-200">
            AI Building Tools I Use
          </h3>
          <div style={{ height: '500px', position: 'relative' }} className="max-w-3xl mx-auto">
            <InfiniteScroll
              items={aiBuilderTools}
              width="100%"
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.12}
              autoplayDirection="down"
              pauseOnHover={true}
              itemMinHeight={80}
              negativeMargin="-0.3em"
            />
          </div>
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 font-light">
            Always exploring and experimenting with the newest AI product tools to stay ahead.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
