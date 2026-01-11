import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Palette } from 'lucide-react'

const TechStack = () => {
  const technologies = [
    { name: 'Node.js', icon: '⚡', category: 'backend' },
    { name: 'Laravel', icon: '🔷', category: 'backend' },
    { name: 'MySQL', icon: '🗄️', category: 'database' },
    { name: 'Figma', icon: '🎨', category: 'design' },
    { name: 'React', icon: '⚛️', category: 'frontend' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20 px-6 sm:px-8 lg:px-12 bg-light-grey">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1.5 bg-pink-500 rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 25px rgba(244, 114, 182, 0.15)' }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-pink-200 hover:border-pink-500/30"
            >
              <div className="text-5xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-center font-semibold text-gray-800 text-lg">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Code className="w-8 h-8 text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Backend Development</h3>
            <p className="text-gray-600 text-sm">
              Building scalable and efficient server-side solutions
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Database className="w-8 h-8 text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Database Design</h3>
            <p className="text-gray-600 text-sm">
              Designing robust and optimized database architectures
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Palette className="w-8 h-8 text-pink-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-sm">
              Creating beautiful and intuitive user experiences
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
