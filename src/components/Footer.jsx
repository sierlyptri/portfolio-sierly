import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 px-6 sm:px-8 lg:px-12 bg-light-grey border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.span>{' '}
            & code by <span className="font-semibold text-gray-900">Sierly</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} Sierly Putri Anjani. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
