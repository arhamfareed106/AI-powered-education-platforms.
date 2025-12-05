'use client'

import Link from 'next/link'

export default function LessonsPage() {
  const lessons = [
    {
      id: 1,
      title: 'Introductions and Greetings',
      description: 'Learn how to introduce yourself and greet others in Spanish.',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 100,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Food and Dining',
      description: 'Order food, talk about meals, and discuss dining experiences.',
      duration: '20 min',
      difficulty: 'Intermediate',
      progress: 75,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Travel and Transportation',
      description: 'Navigate airports, ask for directions, and discuss travel plans.',
      duration: '25 min',
      difficulty: 'Intermediate',
      progress: 0,
      status: 'not-started'
    },
    {
      id: 4,
      title: 'Shopping and Commerce',
      description: 'Shop for items, discuss prices, and make purchases.',
      duration: '18 min',
      difficulty: 'Beginner',
      progress: 0,
      status: 'not-started'
    },
    {
      id: 5,
      title: 'Health and Wellness',
      description: 'Discuss symptoms, visit doctors, and talk about wellness.',
      duration: '22 min',
      difficulty: 'Advanced',
      progress: 0,
      status: 'not-started'
    }
  ]

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
                <Link href="/student/dashboard" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/student/conversation" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  AI Tutor
                </Link>
                <Link href="/student/lessons" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Lessons</h1>
          <p className="text-gray-600">Continue your learning journey with our structured lessons.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{lesson.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{lesson.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{lesson.duration}</span>
                {lesson.status === 'completed' ? (
                  <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">Completed</span>
                ) : lesson.status === 'in-progress' ? (
                  <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">In Progress</span>
                ) : (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Not Started</span>
                )}
              </div>

              {lesson.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-700">{lesson.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        lesson.progress === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} 
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <Link 
                href={`/student/lessons/${lesson.id}`} 
                className={`w-full text-center py-2 rounded-lg font-medium block ${
                  lesson.status === 'completed' 
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {lesson.status === 'completed' ? 'Review Lesson' : 'Start Lesson'}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}