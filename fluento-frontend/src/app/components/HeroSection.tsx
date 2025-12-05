'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 border border-emerald-500 rounded-full text-emerald-500 mb-6">
              <span className="text-sm font-medium">AI-Powered Language Learning</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Master IB/AP Spanish with AI Tutoring
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-2xl">
              Immersive Spanish learning platform with real-time feedback, voice interaction, and animated avatars. 
              Aligned with IB and AP curriculum standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right Side Avatars */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar Cards */}
              <div className="flex flex-col space-y-6">
                {/* Avatar 1 */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-64">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <h3 className="font-bold text-white">Maria Rodriguez</h3>
                      <p className="text-emerald-500 text-sm">Native Speaker</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm">
                    "Fluento helped me improve my speaking skills dramatically in just 2 weeks!"
                  </p>
                </div>
                
                {/* Avatar 2 */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-64 ml-12">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <h3 className="font-bold text-white">Carlos Gutierrez</h3>
                      <p className="text-emerald-500 text-sm">IB Examiner</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm">
                      "The curriculum alignment is perfect for IB students preparing for exams."
                    </p>
                </div>
                
                {/* Avatar 3 */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-64">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <h3 className="font-bold text-white">Ana Martinez</h3>
                      <p className="text-emerald-500 text-sm">AP Student</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm">
                      "I scored 5 on my AP Spanish exam thanks to Fluento's personalized practice."
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Bar */}
        <div className="mt-20 pt-10 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">4.9/5</span>
              <span className="text-gray-400">Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">IB</span>
              <span className="text-gray-400">Aligned</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">AP</span>
              <span className="text-gray-400">Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">10K+</span>
              <span className="text-gray-400">Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}