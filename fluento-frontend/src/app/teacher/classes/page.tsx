'use client'

import Link from 'next/link'

export default function ClassesManagement() {
  const classes = [
    {
      id: 1,
      name: 'IB Spanish SL',
      studentCount: 24,
      startDate: '2023-09-01',
      endDate: '2024-06-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'AP Spanish Language',
      studentCount: 18,
      startDate: '2023-09-01',
      endDate: '2024-05-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Spanish III Honors',
      studentCount: 30,
      startDate: '2023-09-01',
      endDate: '2024-06-15',
      status: 'active'
    },
    {
      id: 4,
      name: 'Spanish I',
      studentCount: 0,
      startDate: '',
      endDate: '',
      status: 'draft'
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
                <Link href="/teacher/dashboard" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/teacher/classes" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
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
                Create Class
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
          <h1 className="text-2xl font-bold text-gray-900">Class Management</h1>
          <p className="text-gray-600">Manage your classes and student enrollment.</p>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
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
              {classes.map((classItem) => (
                <tr key={classItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{classItem.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {classItem.studentCount > 0 ? `${classItem.studentCount} students` : 'No students'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {classItem.startDate ? (
                        <>
                          {classItem.startDate} to {classItem.endDate}
                        </>
                      ) : (
                        'Not scheduled'
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      classItem.status === 'active' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {classItem.status.charAt(0).toUpperCase() + classItem.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/teacher/classes/${classItem.id}`} className="text-emerald-600 hover:text-emerald-900 mr-4">
                      Manage
                    </Link>
                    <button className="text-gray-600 hover:text-gray-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Class Creation Form */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Create New Class</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-1">
                Class Name
              </label>
              <input
                type="text"
                id="className"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., IB Spanish SL"
              />
            </div>
            <div>
              <label htmlFor="classType" className="block text-sm font-medium text-gray-700 mb-1">
                Class Type
              </label>
              <select
                id="classType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option>IB Spanish SL</option>
                <option>IB Spanish HL</option>
                <option>AP Spanish Language</option>
                <option>Spanish I</option>
                <option>Spanish II</option>
                <option>Spanish III</option>
                <option>Spanish IV</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enrollment Options
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" className="rounded text-emerald-500 focus:ring-emerald-500" name="enrollment" defaultChecked />
                  <span className="ml-2 text-gray-700">Join Code</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="rounded text-emerald-500 focus:ring-emerald-500" name="enrollment" />
                  <span className="ml-2 text-gray-700">Direct Invite</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="rounded text-emerald-500 focus:ring-emerald-500" name="enrollment" />
                  <span className="ml-2 text-gray-700">Open Enrollment</span>
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Create Class
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}