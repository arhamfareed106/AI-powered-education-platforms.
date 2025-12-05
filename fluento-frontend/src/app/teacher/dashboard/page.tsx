'use client'

import Link from 'next/link'

export default function TeacherDashboard() {
  const classes = [
    { id: 1, name: 'IB Spanish SL', studentCount: 24, activeAssignments: 3 },
    { id: 2, name: 'AP Spanish Language', studentCount: 18, activeAssignments: 2 },
    { id: 3, name: 'Spanish III Honors', studentCount: 30, activeAssignments: 4 }
  ]

  const recentActivity = [
    { id: 1, student: 'Alex Johnson', action: 'submitted assignment', assignment: 'Weekend Conversation Recording', time: '2 hours ago' },
    { id: 2, student: 'Maria Garcia', action: 'completed lesson', lesson: 'Food and Dining', time: '4 hours ago' },
    { id: 3, student: 'James Wilson', action: 'asked question', question: 'Grammar rule clarification', time: '1 day ago' }
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
                <Link href="/teacher/dashboard" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/teacher/classes" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Classes
                </Link>
                <Link href="/teacher/students" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Students
                </Link>
                <Link href="/teacher/assignments" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Assignments
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600">
                Create Assignment
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600">Monitor your classes and student progress.</p>
        </div>

        {/* Class Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-2xl shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{classItem.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">{classItem.studentCount} students</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                  {classItem.activeAssignments} active
                </span>
              </div>
              <div className="mt-4">
                <Link 
                  href={`/teacher/classes/${classItem.id}`} 
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  View Class Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Student Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="font-bold">{activity.student}</span> {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.assignment || activity.lesson || activity.question}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Class Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Average Vocabulary</span>
                    <span className="text-sm font-medium text-gray-700">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Grammar Accuracy</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Speaking Fluency</span>
                    <span className="text-sm font-medium text-gray-700">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assignment Suggestions */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">AI Suggestions</h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  Based on class performance, consider assigning additional vocabulary practice for travel-related terms.
                </p>
                <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Create Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}