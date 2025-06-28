'use client'

import { motion } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

export default function TechStack() {
  const techItems = [
    { content: "Python" },
    { content: "TensorFlow" },
    { content: "PyTorch" },
    { content: "React" },
    { content: "Next.js" },
    { content: "TypeScript" },
    { content: "Node.js" },
    { content: "FastAPI" },
    { content: "OpenAI" },
    { content: "LangChain" },
    { content: "Docker" },
    { content: "Kubernetes" },
    { content: "PostgreSQL" },
    { content: "MongoDB" },
    { content: "Redis" },
    { content: "AWS" },
    { content: "GCP" },
    { content: "Vercel" },
    { content: "Git" },
    { content: "Linux" },
  ];

  const aiFrameworks = [
    { content: "Transformers" },
    { content: "Scikit-learn" },
    { content: "Pandas" },
    { content: "NumPy" },
    { content: "Matplotlib" },
    { content: "Jupyter" },
    { content: "MLflow" },
    { content: "Weights & Biases" },
    { content: "Hugging Face" },
    { content: "OpenCV" },
    { content: "NLTK" },
    { content: "spaCy" },
    { content: "Streamlit" },
    { content: "Gradio" },
    { content: "Apache Spark" },
    { content: "Databricks" },
    { content: "Airflow" },
    { content: "Ray" },
    { content: "Dask" },
    { content: "CUDA" },
  ];

  const webTech = [
    { content: "HTML5" },
    { content: "CSS3" },
    { content: "JavaScript" },
    { content: "Tailwind CSS" },
    { content: "Framer Motion" },
    { content: "Three.js" },
    { content: "WebGL" },
    { content: "REST APIs" },
    { content: "GraphQL" },
    { content: "WebSocket" },
    { content: "Progressive PWA" },
    { content: "Service Workers" },
    { content: "Webpack" },
    { content: "Vite" },
    { content: "ESLint" },
    { content: "Prettier" },
    { content: "Jest" },
    { content: "Cypress" },
    { content: "Storybook" },
    { content: "Figma" },
  ];

  return (
    <section id="techstack" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
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
            <span className="text-gradient">TECH STACK</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technologies and frameworks that power my AI solutions
          </motion.p>
        </motion.div>

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* AI & Machine Learning */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-light mb-6 text-gray-800 dark:text-gray-200">
              AI & Machine Learning
            </h3>
            <div style={{ height: '500px', position: 'relative' }}>
              <InfiniteScroll
                items={aiFrameworks}
                width="100%"
                isTilted={true}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.1}
                autoplayDirection="down"
                pauseOnHover={true}
                itemMinHeight={80}
                negativeMargin="-0.3em"
              />
            </div>
          </motion.div>

          {/* Core Technologies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-light mb-6 text-gray-800 dark:text-gray-200">
              Core Technologies
            </h3>
            <div style={{ height: '500px', position: 'relative' }}>
              <InfiniteScroll
                items={techItems}
                width="100%"
                isTilted={false}
                autoplay={true}
                autoplaySpeed={0.15}
                autoplayDirection="up"
                pauseOnHover={true}
                itemMinHeight={80}
                negativeMargin="-0.3em"
              />
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-light mb-6 text-gray-800 dark:text-gray-200">
              Web Development
            </h3>
            <div style={{ height: '500px', position: 'relative' }}>
              <InfiniteScroll
                items={webTech}
                width="100%"
                isTilted={true}
                tiltDirection="right"
                autoplay={true}
                autoplaySpeed={0.12}
                autoplayDirection="down"
                pauseOnHover={true}
                itemMinHeight={80}
                negativeMargin="-0.3em"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 font-light">
            Continuously learning and adapting to emerging technologies in AI and software development
          </p>
        </motion.div>
      </div>
    </section>
  )
}