import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Database, Shield, Globe, Cpu, BarChart3 } from 'lucide-react'

const Certificates = () => {
  const mainCertificates = [
    {
      title: "Google Student Ambassador 2025",
      issuer: "Google",
      date: "2025",
      description: "Selected as Gemini Rising Star (Top 200 out of 800 GSAs in Indonesia). Representing UNIKOM in technology and community leadership.",
      color: "from-pink-500 to-rose-600",
      icon: Award,
      link: null,
      isAchievement: true 
    },
    {
      title: "Belajar Dasar SQL",
      issuer: "Dicoding",
      date: "2024",
      description: "Mastered fundamental database management, complex queries, and data manipulation for scalable backend systems.",
      color: "from-pink-400 to-pink-500",
      icon: Database,
      link: "https://www.dicoding.com/certificates/L4PQ12M4QXO1",
    },
    {
      title: "Implement Cloud Security on Google Cloud",
      issuer: "Google Cloud (Credly)",
      date: "2024",
      description: "Proficiency in implementing security controls and maintaining secure environments on Google Cloud Platform.",
      color: "from-fuchsia-400 to-pink-500",
      icon: Shield,
      link: "https://www.credly.com/badges/b0a57548-e028-4827-a8b1-df162a0bb8ed/public_url",
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco (Credly)",
      date: "2024",
      description: "Solid understanding of networking protocols, IP addressing, and fundamental infrastructure security.",
      color: "from-pink-800 to-rose-900",
      icon: Globe,
      link: "https://www.credly.com/badges/3cc465fe-ecf3-4119-a8cd-7301a44a7dcf/public_url",
    },
    {
      title: "JavaScript Dasar (Gold)",
      issuer: "Skilvul",
      date: "2024",
      description: "Advanced logic in JavaScript, including DOM manipulation and asynchronous programming with Gold level recognition.",
      color: "from-pink-500 to-fuchsia-600",
      icon: Cpu,
      link: "https://skilvul.com/courses/javascript-dasar/student/cluayjabx069y01s47lyqin4q/",
    },
    {
      title: "Networking Fundamentals on Google Cloud",
      issuer: "Google Cloud (Credly)",
      date: "2024",
      description: "Hands-on experience with VPC, load balancing, and cloud-native networking architectures.",
      color: "from-pink-700 to-rose-800",
      icon: Globe,
      link: "https://www.credly.com/badges/5373e79c-9321-4197-b66e-0d110c8126ee/public_url",
    },
    {
      title: "Big Data Foundations - Level 2",
      issuer: "IBM SkillsBuild",
      date: "2024",
      description: "Deep dive into big data ecosystems, storage models, and processing frameworks for high-scale data.",
      color: "from-pink-400 to-rose-400",
      icon: Database,
      link: "https://skillsbuild.skillsnetwork.site/learn/big-data-foundations-level-2",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      date: "2024",
      description: "Foundation in Python for automation and backend development, focusing on clean code and efficient algorithms.",
      color: "from-fuchsia-500 to-rose-500",
      icon: Cpu,
      link: "https://www.dicoding.com/certificates/1OP8W47LQXQK",
    },
  ];

  // Sertifikat Pendukung (Data, AI, Frontend, Career)
  const supportingSkills = [
    "Hadoop Foundations (IBM)", "Machine Learning (Dicoding)", "Artificial Intelligence Fundamentals (IBM)",
    "Data Visualisation (Looker Studio)", "UX Design Fundamentals", "HTML & CSS Dasar (Gold)",
    "Web Dev Bronze", "Career Management Essentials", "Data Fundamentals (IBM)"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="certificates" className="py-20 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications & Expertise</h2>
          <div className="w-20 h-1.5 bg-pink-500 rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Highlighting my technical journey in Backend Engineering, Cloud Infrastructure, and leadership as a Google Student Ambassador.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {mainCertificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-6 border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-4 bg-gradient-to-br ${cert.color} rounded-2xl shadow-lg text-white`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                    <span className="text-pink-500 uppercase tracking-wider">{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {cert.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-pink-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">
                        {cert.isAchievement ? "Top Achiever" : "Verified Badge"}
                      </span>
                    </div>
                    {cert.link && (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-pink-500 transition-colors"
                      >
                        VIEW CREDENTIAL <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Skills Section (Minimalist Tag Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-pink-50/50 rounded-[2rem] p-8 border border-pink-100"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-pink-100">
                <BarChart3 className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supporting Specializations</h3>
              <p className="text-sm text-gray-500 mb-5">Additional certifications in AI, Data Visualization, and Design Principles.</p>
              <div className="flex flex-wrap gap-2">
                {supportingSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-pink-100 rounded-full text-[11px] font-bold text-pink-600 shadow-sm hover:border-pink-300 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
