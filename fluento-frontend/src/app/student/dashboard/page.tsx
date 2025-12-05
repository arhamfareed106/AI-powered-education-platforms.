'use client'

import Link from 'next/link'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Fluentix</h1>
              </div>
              <nav className="ml-6 flex space-x-4">
                <Link href="/student/dashboard" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/student/conversation" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  AI Tutor
                </Link>
                <Link href="/student/lessons" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Lessons
                </Link>
                <Link href="/student/assignments" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Assignments
                </Link>
                <Link href="/student/analytics" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600">
                Start Conversation
              </button>
              <div className="ml-4 relative">
                <button className="flex items-center text-sm rounded-full focus:outline-none">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
          <p className="text-gray-600">Ready to continue your Spanish learning journey?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">7 days</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Words Learned</p>
                <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Accuracy Rate</p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Your Skills</h2>
              <div className="space-y-6">
                {[
                  { name: 'Vocabulary', level: 'Intermediate', progress: 75 },
                  { name: 'Grammar', level: 'Beginner', progress: 45 },
                  { name: 'Listening', level: 'Advanced', progress: 90 },
                  { name: 'Speaking', level: 'Intermediate', progress: 65 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Morning Practice</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Vocabulary Review</p>
                    <p className="text-sm text-gray-600">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Start</h2>
              <Link 
                href="/student/conversation" 
                className="w-full bg-emerald-500 text-white text-center px-4 py-3 rounded-lg font-medium hover:bg-emerald-600 block"
              >
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}