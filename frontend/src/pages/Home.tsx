import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">Fluento AI</h1>
        <p className="text-xl text-gray-600 mb-8">Master Spanish with AI-Powered Tutoring</p>
        
        <div className="flex justify-center space-x-4">
          <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
          <Link to="/ai-tutor" className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
            Try AI Tutor
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Personalized Learning</h3>
          <p className="text-gray-600">Our AI adapts to your learning style and pace, providing customized lessons and feedback.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Real-time Feedback</h3>
          <p className="text-gray-600">Get instant feedback on pronunciation, grammar, and vocabulary to accelerate your progress.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">IB/AP Preparation</h3>
          <p className="text-gray-600">Specialized curriculum designed to help you excel in IB and AP Spanish exams.</p>
        </div>
      </div>
    </div>
  )
}

export default Home