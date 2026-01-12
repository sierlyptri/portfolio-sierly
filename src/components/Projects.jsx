import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const backendProjects = [
    {
      title: 'CineBook: Cinema Ticketing & Management System',
      description: 'A robust backend system designed to handle real-time movie scheduling, seat reservations, and seamless API integration for cinema transaction flows.',
      tech: ['Laravel', 'MySQL', 'RESTful API'],
      image: '/images/cinebook-preview.jpg',
      github: 'https://github.com/sierlyptri/laramart.git',
      // demo: '#',
    },
    {
      title: 'Laramart: Scalable E-Commerce Backend Engine',
      description: 'A feature-rich e-commerce core focused on efficient product lifecycle management, shopping cart logic, and secure checkout processes with structured database architecture.',
      tech: ['Laravel', 'MySQL', 'Blade'],
      image: '/images/laramart-preview.jpg',
      github: 'https://github.com/sierlyptri/cinebook-be.git',
      //demo: '#',
    }
  ];

  const uiuxProjects = [
    {
      title: 'Kshop | K-Pop E-commerce',
      description: 'A vibrant mobile shopping experience tailored for K-pop fans, focusing on official merchandise discovery and a seamless checkout flow.',
      image: '/images/projects/ui-ux/kshop.png',
      fallback: 'https://via.placeholder.com/400x600/F472B6/FFFFFF?text=Kshop+App',
    },
    {
      title: 'Swipe | Social Streaming',
      description: 'An interactive mobile platform that merges live streaming with social challenges, featuring a modern UI for co-hosting and content sharing.',
      image: '/images/projects/ui-ux/swipe.png',
      fallback: 'https://via.placeholder.com/400x600/818CF8/FFFFFF?text=Swipe+App',
    },
    {
      title: 'Cinebook | Movie Ticketing',
      description: 'A sleek web-based booking system designed for speed, featuring an intuitive seat selection map and a frictionless payment experience.',
      image: '/images/projects/ui-ux/cinebook.png',
      fallback: 'https://via.placeholder.com/1200x800/BE185D/FFFFFF?text=Cinebook+Web',
    },
    {
      title: 'Onedash | Affiliate Dashboard',
      description: 'A professional management tool for affiliate marketers to centralize links and track performance through real-time data visualization.',
      image: '/images/projects/ui-ux/onedash.png',
      fallback: 'https://via.placeholder.com/1200x800/059669/FFFFFF?text=Onedash+Web',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1.5 bg-pink-500 rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            A collection of my backend engineering and UI/UX design projects that showcase 
            technical excellence and creative vision.
          </p>
        </motion.div>

        {/* Backend Engineering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Backend Engineering</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {backendProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 10px 30px rgba(244, 114, 182, 0.2)' }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-pink-200 hover:border-pink-500/30"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-100 text-pink-500 text-xs font-medium rounded-full border border-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-pink-500 hover:text-white transition-colors duration-200 shadow-sm border border-gray-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  {/*<motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors duration-200 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>*/}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* UI/UX Designs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">UI/UX Designs</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {uiuxProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 10px 30px rgba(244, 114, 182, 0.2)' }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-pink-200 hover:border-pink-500/30"
              >
                <div className="relative overflow-hidden bg-pink-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage({ src: project.image, title: project.title, fallback: project.fallback })}
                    onError={(e) => {
                      e.target.src = project.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="rounded-lg max-w-full max-h-[85vh] w-auto h-auto object-contain"
                onError={(e) => {
                  e.target.src = selectedImage.fallback;
                }}
              />
              <p className="mt-4 text-white text-lg font-semibold">{selectedImage.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
