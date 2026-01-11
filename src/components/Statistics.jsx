import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Clock, Code, TrendingUp } from 'lucide-react'

const Statistics = () => {
  const stats = [
    {
      icon: Briefcase,
      value: '50+',
      label: 'Projects Completed',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
    {
      icon: Clock,
      value: '3+',
      label: 'Years Experience',
      color: 'text-pink-400',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Code,
      value: '1000+',
      label: 'Hours of Coding',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Client Satisfaction',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-light"
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
