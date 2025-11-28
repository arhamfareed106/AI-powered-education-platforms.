import React, { useState } from 'react'

const Assignments: React.FC = () => {
  const [assignments] = useState([
    {
      id: 1,
      title: "Present Tense Verbs",
      description: "Practice conjugating regular verbs in the present tense",
      dueDate: "2023-12-15",
      status: "pending",
      points: "10/15"
    },
    {
      id: 2,
      title: "Spanish Culture Essay",
      description: "Write a 500-word essay about a Spanish-speaking country",
      dueDate: "2023-12-20",
      status: "submitted",
      points: "N/A"
    },
    {
      id: 3,
      title: "Listening Comprehension",
      description: "Listen to the audio and answer the questions",
      dueDate: "2023-12-10",
      status: "graded",
      points: "18/20"
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Assignments</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                  <div className="text-sm text-gray-500">{assignment.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.points}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    View
                  </button>
                  {assignment.status === 'pending' && (
                    <button className="text-green-600 hover:text-green-900">
                      Submit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Create New Assignment
        </button>
      </div>
    </div>
  )
}

export default Assignments