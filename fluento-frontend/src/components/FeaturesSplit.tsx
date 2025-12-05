'use client'

import { useState } from 'react'

export default function FeaturesSplit() {
  const [activeTab, setActiveTab] = useState('students')
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section A: Left text + accordion, Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Immersive AI-Powered Learning</h2>
            <p className="text-gray-600 mb-8">
              Our cutting-edge platform combines artificial intelligence with immersive experiences to accelerate your Spanish learning journey.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  title: 'Real-time Voice Feedback', 
                  content: 'Get instant pronunciation corrections from our AI tutor.' 
                },
                { 
                  title: 'Adaptive Learning Paths', 
                  content: 'Personalized curriculum that adapts to your progress and weaknesses.' 
                },
                { 
                  title: 'Interactive Avatars', 
                  content: 'Practice conversations with lifelike animated characters.' 
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl">
                  <button className="w-full flex justify-between items-center p-6 text-left">
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 flex items-center justify-center">
            <span className="text-gray-500">Feature Image</span>
          </div>
        </div>
        
        {/* Section B: Left image, Right text + tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 flex items-center justify-center order-2 lg:order-1">
            <span className="text-gray-500">Feature Image</span>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for Everyone</h2>
            <p className="text-gray-600 mb-8">
              Whether you're a student preparing for exams or an educator looking to enhance your curriculum, Fluento has you covered.
            </p>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'students', name: 'Students' },
                  { id: 'teachers', name: 'Teachers' },
                  { id: 'schools', name: 'Schools' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-emerald-500 text-emerald-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Tab Content */}
            <div>
              {activeTab === 'students' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Learning for Students</h3>
                  <ul className="space-y-3">
                    {[
                      'Adaptive curriculum based on your skill level',
                      'Real-time pronunciation feedback',
                      'Gamified progress tracking',
                      'Exam-specific practice modules'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'teachers' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Powerful Tools for Educators</h3>
                  <ul className="space-y-3">
                    {[
                      'Class progress monitoring dashboard',
                      'Custom assignment creation',
                      'Detailed student performance analytics',
                      'Curriculum alignment tools'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'schools' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Solutions for Institutions</h3>
                  <ul className="space-y-3">
                    {[
                      'School-wide deployment and management',
                      'Teacher training and support',
                      'Integration with existing LMS platforms',
                      'Bulk licensing and reporting'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}