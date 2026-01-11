import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-500">Backend Developer & UI/UX Designer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Hi! i'm{' '}
              <span className="text-pink-500">Sierly Putri Anjani</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              UNIKOM Informatics student. Blending UI/UX roots with Backend expertise to build efficient, aesthetic digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pink-600"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(236, 72, 153, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                My Project
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-pink-500 text-lg">★</span>
                ))}
              </div>
              <span className="text-gray-700 font-medium">Google Student Ambassador 2025</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden">
              {/* Abstract background shape with pink gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-pink-100/30 to-pink-50/20 rounded-3xl"></div>
              
              {/* Profile Photo */}
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-pink-200">
                <img
                  src="/images/hero/profile-photo.jpg"
                  alt="Sierly Putri Anjani"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback jika gambar belum ada - show placeholder
                    e.target.style.display = 'none';
                    const placeholder = e.target.parentElement.querySelector('.placeholder-fallback');
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-pink-100 to-pink-50 items-center justify-center placeholder-fallback" style={{ display: 'none' }}>
                  <div className="text-center space-y-4 p-8 w-full h-full flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/30 via-pink-100 to-pink-50 flex items-center justify-center relative">
                      <svg className="w-16 h-16 text-pink-500/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Professional Portrait</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative pink elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-pink-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
