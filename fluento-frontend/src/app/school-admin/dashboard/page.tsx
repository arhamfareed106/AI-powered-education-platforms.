'use client'

import Link from 'next/link'

export default function SchoolAdminDashboard() {
  const stats = [
    { name: 'Total Students', value: '1,248', change: '+12%' },
    { name: 'Total Teachers', value: '24', change: '+2%' },
    { name: 'Active Classes', value: '42', change: '+5%' },
    { name: 'Avg. Engagement', value: '84%', change: '+3%' }
  ]

  const recentActivity = [
    { id: 1, user: 'John Smith', action: 'added 24 new students to IB Spanish SL', time: '2 hours ago' },
    { id: 2, user: 'Maria Rodriguez', action: 'created new class: Spanish Immersion Program', time: '5 hours ago' },
    { id: 3, user: 'System', action: 'license renewal successful for 500 seats', time: '1 day ago' },
    { id: 4, user: 'Sarah Johnson', action: 'updated school profile information', time: '2 days ago' }
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
                <Link href="/school-admin/dashboard" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/school-admin/teachers" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Teachers
                </Link>
                <Link href="/school-admin/billing" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Billing
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
          <h1 className="text-2xl font-bold text-gray-900">School Administration</h1>
          <p className="text-gray-600">Manage your institution's Fluentix deployment.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <div className="flex items-baseline mt-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="ml-2 text-sm font-medium text-emerald-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* License Usage */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">License Usage</h2>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Students</span>
                <span className="text-sm font-medium text-gray-700">1,248 / 1,500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-emerald-500 h-4 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Teachers</span>
                <span className="text-sm font-medium text-gray-700">24 / 30</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Administrators</span>
                <span className="text-sm font-medium text-gray-700">2 / 5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-purple-500 h-4 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="mt-6">
              <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                Upgrade License →
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl hover:bg-gray-50">
              <div className="bg-emerald-100 p-3 rounded-lg mb-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <span className="font-medium text-gray-900">Add Teachers</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl hover:bg-gray-50">
              <div className="bg-blue-100 p-3 rounded-lg mb-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <span className="font-medium text-gray-900">Manage Classes</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl hover:bg-gray-50">
              <div className="bg-purple-100 p-3 rounded-lg mb-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <span className="font-medium text-gray-900">View Reports</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}