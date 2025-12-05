'use client'

import Link from 'next/link'

export default function TeacherManagement() {
  const teachers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@school.edu',
      classes: ['IB Spanish SL', 'Spanish III Honors'],
      students: 54,
      lastActive: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@school.edu',
      classes: ['AP Spanish Language', 'Spanish Immersion'],
      students: 48,
      lastActive: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@school.edu',
      classes: ['Spanish I', 'Spanish II'],
      students: 60,
      lastActive: '3 days ago',
      status: 'active'
    },
    {
      id: 4,
      name: 'Robert Chen',
      email: 'robert.chen@school.edu',
      classes: [],
      students: 0,
      lastActive: 'Never',
      status: 'invited'
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
                <Link href="/school-admin/dashboard" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/school-admin/teachers" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Teachers
                </Link>
                <Link href="/school-admin/billing" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Billing
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600">
                Add Teacher
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
          <h1 className="text-2xl font-bold text-gray-900">Teacher Management</h1>
          <p className="text-gray-600">Add, remove, and manage teachers in your institution.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Teachers
              </label>
              <input
                type="text"
                id="search"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Search by name or email"
              />
            </div>
            <div>
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="statusFilter"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Invited</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Teacher List */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teacher
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Classes
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-sm text-gray-500">{teacher.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {teacher.classes.length > 0 ? (
                        <ul className="space-y-1">
                          {teacher.classes.map((classItem, index) => (
                            <li key={index}>{classItem}</li>
                          ))}
                        </ul>
                      ) : (
                        'No classes assigned'
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{teacher.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{teacher.lastActive}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      teacher.status === 'active' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {teacher.status === 'active' ? (
                      <>
                        <button className="text-emerald-600 hover:text-emerald-900 mr-4">
                          Reset Password
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          Remove
                        </button>
                      </>
                    ) : (
                      <button className="text-emerald-600 hover:text-emerald-900">
                        Resend Invitation
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Teacher Form */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Add New Teacher</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="teacherName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., John Smith"
              />
            </div>
            <div>
              <label htmlFor="teacherEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="teacherEmail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., john.smith@school.edu"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                id="department"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., World Languages"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option>Teacher</option>
                <option>Department Head</option>
                <option>Administrator</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Send Invitation
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}