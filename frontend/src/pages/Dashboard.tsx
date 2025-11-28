import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Tutor Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">AI Tutor</h2>
          <p className="text-gray-600 mb-4">Practice Spanish conversation with our AI tutor.</p>
          <Link to="/ai-tutor" className="text-blue-600 hover:underline font-medium">
            Start Chatting →
          </Link>
        </div>
        
        {/* Assignments Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Assignments</h2>
          <p className="text-gray-600 mb-4">View and submit your assignments.</p>
          <Link to="/assignments" className="text-blue-600 hover:underline font-medium">
            View Assignments →
          </Link>
        </div>
        
        {/* Progress Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <p className="text-gray-600 mb-4">Track your learning progress and achievements.</p>
          <Link to="/dashboard" className="text-blue-600 hover:underline font-medium">
            View Progress →
          </Link>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="border-b pb-3">
            <span className="font-medium">Completed</span> Spanish Basics Quiz
            <span className="text-gray-500 text-sm ml-2">2 hours ago</span>
          </li>
          <li className="border-b pb-3">
            <span className="font-medium">Submitted</span> Essay on Spanish Culture
            <span className="text-gray-500 text-sm ml-2">1 day ago</span>
          </li>
          <li className="border-b pb-3">
            <span className="font-medium">Started</span> New Lesson: Present Tense Verbs
            <span className="text-gray-500 text-sm ml-2">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard