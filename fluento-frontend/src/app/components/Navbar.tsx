'use client'

import { Globe } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-white font-bold text-xl">
              Fluentix
            </span>
          </Link>

          {/* Middle: Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-sm"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-sm"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <span className="text-gray-400">EN</span>
            <Link 
              href="/login" 
              className="text-white font-medium hover:text-emerald-400 transition-colors text-sm"
            >
              Login
            </Link>
            <Link 
              href="/signup"
              className="bg-emerald-500 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-600 transition-all duration-200 text-sm shadow-lg shadow-emerald-500/50"
            >
              Try for Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}