'use client'

import Link from 'next/link'

export default function AnalyticsPage() {
  // Mock data for charts
  const vocabularyData = [
    { week: 'Week 1', words: 20 },
    { week: 'Week 2', words: 45 },
    { week: 'Week 3', words: 60 },
    { week: 'Week 4', words: 85 },
    { week: 'Week 5', words: 120 },
    { week: 'Week 6', words: 150 }
  ]

  const grammarData = [
    { week: 'Week 1', accuracy: 65 },
    { week: 'Week 2', accuracy: 70 },
    { week: 'Week 3', accuracy: 75 },
    { week: 'Week 4', accuracy: 80 },
    { week: 'Week 5', accuracy: 85 },
    { week: 'Week 6', accuracy: 89 }
  ]

  const speakingData = [
    { week: 'Week 1', fluency: 40 },
    { week: 'Week 2', fluency: 50 },
    { week: 'Week 3', fluency: 55 },
    { week: 'Week 4', fluency: 65 },
    { week: 'Week 5', fluency: 70 },
    { week: 'Week 6', fluency: 75 }
  ]

  const badges = [
    { id: 1, name: 'First Lesson', description: 'Complete your first lesson', earned: true },
    { id: 2, name: 'Week Streak', description: 'Practice for 7 consecutive days', earned: true },
    { id: 3, name: 'Vocabulary Master', description: 'Learn 100 new words', earned: false },
    { id: 4, name: 'Grammar Guru', description: 'Achieve 90% grammar accuracy', earned: false }
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
                <Link href="/student/lessons" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Lessons
                </Link>
                <Link href="/student/assignments" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Assignments
                </Link>
                <Link href="/student/analytics" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-2xl font-bold text-gray-900">Learning Analytics</h1>
          <p className="text-gray-600">Track your progress and identify areas for improvement.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Words Learned</p>
                <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Grammar Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Speaking Fluency</p>
                <p className="text-2xl font-bold text-gray-900">75%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vocabulary Growth Chart */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Vocabulary Growth</h2>
            <div className="h-64 flex items-end space-x-2">
              {vocabularyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="text-xs text-gray-500 mb-1">{data.words}</div>
                  <div 
                    className="w-full bg-emerald-500 rounded-t-lg"
                    style={{ height: `${(data.words / 150) * 100}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-1">{data.week}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Accuracy Chart */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Grammar Accuracy</h2>
            <div className="h-64 flex items-end space-x-2">
              {grammarData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="text-xs text-gray-500 mb-1">{data.accuracy}%</div>
                  <div 
                    className="w-full bg-blue-500 rounded-t-lg"
                    style={{ height: `${data.accuracy}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-1">{data.week}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Speaking Fluency Chart */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Speaking Fluency</h2>
            <div className="h-64 flex items-end space-x-2">
              {speakingData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="text-xs text-gray-500 mb-1">{data.fluency}%</div>
                  <div 
                    className="w-full bg-purple-500 rounded-t-lg"
                    style={{ height: `${data.fluency}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-1">{data.week}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`border rounded-xl p-4 text-center ${
                    badge.earned ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className={`mx-auto mb-2 w-12 h-12 rounded-full flex items-center justify-center ${
                    badge.earned ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">{badge.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                  {badge.earned && (
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      Earned
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}