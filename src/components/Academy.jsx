import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, Sparkles } from 'lucide-react'

const Academy = () => {
  return (
    <section id="academy" className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Academy
          </h2>
          <div className="w-24 h-1.5 bg-pink-500 rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Leadership and community impact through technology
          </p>
        </motion.div>

        {/* GSA 2025 Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-4 border-pink-500 relative overflow-hidden">
            {/* Pink background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-pink-50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Google Student Ambassador 2025
                  </h3>
                  <p className="text-pink-500 font-medium flex items-center gap-2 mt-1">
                    <Sparkles className="w-4 h-4" />
                    Leadership Role
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Sep 2025 - Des 2025</span> · 4 Month · Indonesia · Jarak jauh
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Selected as one of 800 Google Student Ambassadors out of 12,000+ applicants nationwide, 
                representing Google in promoting and educating students about Google technologies.
              </p>

              {/* Gemini Rising Star Badge */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 mb-8 text-white">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-lg">Gemini Rising Star</h4>
                    <p className="text-sm text-pink-100">
                      Awarded to top 200 ambassadors across Indonesia for outstanding impact and engagement
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 25px rgba(244, 114, 182, 0.15)' }}
                  className="bg-pink-100 rounded-xl p-6 border border-pink-300"
                >
                  <Target className="w-8 h-8 text-pink-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-3">Technology Advocacy</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Actively advocated the adoption of Google technologies, with a primary focus on 
                    Google Gemini as a generative AI solution for productivity and learning.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>AI-assisted learning</li>
                    <li>Content generation</li>
                    <li>Problem-solving workflows</li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 25px rgba(236, 72, 153, 0.15)' }}
                  className="bg-pink-100 rounded-xl p-6 border border-pink-300"
                >
                  <Users className="w-8 h-8 text-pink-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-3">Educational Events</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Successfully organized and delivered 2 educational tech events focused on Google technologies:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Introduction to Generative AI concepts</li>
                    <li>Hands-on exploration of Google Gemini features</li>
                    <li>Collaboration with fellow ambassadors</li>
                  </ul>
                </motion.div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-pink-500" />
                  Impact & Collaboration
                </h4>
                <p className="text-gray-600 text-sm">
                  Collaborated with fellow ambassadors to expand awareness of AI-driven tools and their 
                  relevance in modern software development and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Academy
