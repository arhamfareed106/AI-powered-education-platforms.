'use client'

import Link from 'next/link'

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: 'Record a 2-minute conversation about your weekend',
      subject: 'Speaking',
      dueDate: '2023-06-15',
      status: 'submitted',
      grade: 'A',
      feedback: 'Great job! Your pronunciation was clear and you used excellent vocabulary.'
    },
    {
      id: 2,
      title: 'Write a paragraph about your favorite restaurant',
      subject: 'Writing',
      dueDate: '2023-06-18',
      status: 'in-progress',
      grade: null,
      feedback: null
    },
    {
      id: 3,
      title: 'Complete the vocabulary quiz on travel terms',
      subject: 'Vocabulary',
      dueDate: '2023-06-20',
      status: 'pending',
      grade: null,
      feedback: null
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'bg-emerald-100 text-emerald-800'
      case 'in-progress': return 'bg-amber-100 text-amber-800'
      case 'pending': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
                <Link href="/student/assignments" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600">View and manage your assigned tasks from your teacher.</p>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.grade ? (
                      <span className="text-sm font-medium text-gray-900">{assignment.grade}</span>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/student/assignments/${assignment.id}`} className="text-emerald-600 hover:text-emerald-900">
                      {assignment.status === 'pending' ? 'Start' : 'View'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {assignments.some(a => a.feedback) && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Feedback</h2>
            <div className="bg-white rounded-2xl shadow p-6">
              {assignments.filter(a => a.feedback).map((assignment) => (
                <div key={assignment.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                    <span className="text-sm font-medium text-emerald-600">{assignment.grade}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{assignment.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}