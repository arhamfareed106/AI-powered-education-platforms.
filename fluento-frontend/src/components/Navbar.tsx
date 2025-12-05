'use client'

import { Globe } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-bold text-xl">
              Fluent<span className="text-emerald-500">o</span>
            </span>
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-white" />
            <a href="#" className="text-white font-medium hover:text-emerald-500 transition-colors">
              Login
            </a>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-full font-medium hover:bg-emerald-600 transition-colors">
              Try AI Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}