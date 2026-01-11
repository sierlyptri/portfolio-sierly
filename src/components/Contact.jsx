import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Github, Send } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sierlyptri',
      color: 'text-blue-600',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/sierlyptri',
      color: 'text-pink-500',
      hoverColor: 'hover:bg-pink-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sierlyptri',
      color: 'text-gray-800',
      hoverColor: 'hover:bg-gray-800',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 bg-light-grey relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch Today!
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1.5 bg-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-pink-light"
        >
          {/* Email */}
          <motion.a
            href="mailto:sierlypajani89@gmail.com"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-4 mb-8 p-6 bg-pink-100 rounded-2xl hover:bg-pink-500 hover:text-white transition-all duration-300 group border border-pink-300"
          >
            <div className="p-3 bg-white rounded-xl group-hover:bg-white/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm text-gray-500 mb-1 group-hover:text-white/80">Email</p>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
                sierlypajani89@gmail.com
              </p>
            </div>
            <Send className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
          </motion.a>

          {/* Social Links */}
          <div className="space-y-4">
            <p className="text-center text-gray-600 font-medium mb-6">Follow me on</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-white rounded-xl shadow-sm border border-gray-200 ${social.hoverColor} ${social.color} transition-all duration-300 group hover:border-transparent`}
                >
                  <social.icon className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
