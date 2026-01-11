import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Turning Ideas Into{' '}
              <span className="text-pink-500">Masterpieces</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a passion for both backend development and UI/UX design, I transform 
              complex technical challenges into elegant, user-friendly solutions. Every 
              project is an opportunity to blend functionality with aesthetics, creating 
              digital experiences that are not only powerful but also beautiful.
            </p>
            <div className="flex items-start gap-3 pt-4">
              <div className="p-2 bg-pink-100 rounded-lg">
                <Lightbulb className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Creative Process</h3>
                <p className="text-gray-600 text-sm">
                  From concept to deployment, I ensure every step is carefully crafted 
                  with attention to detail and user experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-pink-200 group"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-pink-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-pink-500">BACKEND DEV</span>
                </div>
                <Sparkles className="w-16 h-16 text-pink-500/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-pink-light group mt-8"
            >
              <div className="aspect-square bg-gradient-to-br from-rose/20 to-blush flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-rose/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-rose">UI/UX DESIGN</span>
                </div>
                <Lightbulb className="w-16 h-16 text-rose/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
