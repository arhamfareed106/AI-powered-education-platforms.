'use client'

import Navbar from '../components/Navbar'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Blog Post Title {item}</h2>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">December 5, 2025</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}