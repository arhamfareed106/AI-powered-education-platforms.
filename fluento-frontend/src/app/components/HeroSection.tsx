'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const tutors = [
    { name: 'Jocelyn Gouse', role: 'Tutor', position: 'left' },
    { name: 'Terry Mango', role: 'Tutor', position: 'center' },
    { name: 'Wilson Gouse', role: 'Tutor', position: 'right' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #10b981 0px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #10b981 0px, transparent 1px, transparent 60px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 border border-emerald-500 rounded-full text-emerald-400 mb-6 bg-emerald-500/10">
              <span className="text-sm font-medium">🎓 AI-Powered Spanish Learning</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              AI-powered Virtual<br />
              Spanish Tutor for<br />
              <span className="text-emerald-400">IB & AP Students</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              The SaaS educational solution combining AI, Interactive Audio, and Realistic Avatars for unprecedented success in high-stakes exams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup"
                className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all duration-200 text-center shadow-lg shadow-emerald-500/50"
              >
                Try for Free
              </Link>
              <Link 
                href="/login"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-200 text-center"
              >
                Login
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          {/* Right Side - AI Tutors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl">
              {/* Tutor Cards */}
              <div className="grid grid-cols-3 gap-4">
                {tutors.map((tutor, index) => (
                  <motion.div
                    key={tutor.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 ${
                      index === 1 ? 'transform scale-110 z-10' : ''
                    }`}
                  >
                    {/* Avatar Placeholder */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-4xl">👤</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-center text-sm">{tutor.name}</h3>
                    <p className="text-emerald-400 text-xs text-center">{tutor.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9 Star</span>
              <span className="text-gray-400 text-sm">User Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-1">🎓</span>
              <span className="text-2xl font-bold text-white">IB Aligned</span>
              <span className="text-gray-400 text-sm">Curriculum Approved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-1">✅</span>
              <span className="text-2xl font-bold text-white">AP Certified</span>
              <span className="text-gray-400 text-sm">College Board Approved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-1">👥</span>
              <span className="text-2xl font-bold text-white">10,000+ User</span>
              <span className="text-gray-400 text-sm">Students & Teachers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}