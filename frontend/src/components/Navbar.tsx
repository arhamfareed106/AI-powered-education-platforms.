import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Fluentix</Link>
          <div className="flex space-x-4">
            <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
            <Link to="/ai-tutor" className="hover:text-blue-200">AI Tutor</Link>
            <Link to="/assignments" className="hover:text-blue-200">Assignments</Link>
            <Link to="/subscription" className="hover:text-blue-200">Subscription</Link>
            <Link to="/settings" className="hover:text-blue-200">Settings</Link>
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar