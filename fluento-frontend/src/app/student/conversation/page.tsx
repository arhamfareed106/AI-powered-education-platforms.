'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ConversationPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: '¡Hola! ¿Cómo estás hoy?', timestamp: '10:00 AM' },
    { id: 2, sender: 'user', text: 'Estoy bien, gracias. ¿Y tú?', timestamp: '10:01 AM' },
    { id: 3, sender: 'ai', text: 'Estoy muy bien, gracias por preguntar. Hoy vamos a practicar el vocabulario sobre la comida.', timestamp: '10:01 AM' }
  ])

  const toggleRecording = () => {
    setIsRecording(!isRecording)
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
                <Link href="/student/conversation" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  AI Tutor
                </Link>
                <Link href="/student/lessons" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Lessons
                </Link>
                <Link href="/student/assignments" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Assignments
                </Link>
                <Link href="/student/analytics" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600">
                End Session
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conversation Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow h-[calc(100vh-12rem)] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  <div className="ml-3">
                    <h2 className="font-bold text-gray-900">María</h2>
                    <p className="text-sm text-gray-500">Online • Native Speaker</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user' 
                          ? 'bg-emerald-500 text-white rounded-br-none' 
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grammar Corrections */}
              <div className="border-t border-gray-200 p-4 bg-amber-50">
                <h3 className="font-bold text-amber-800 mb-2">Grammar Correction:</h3>
                <p className="text-amber-700">
                  "Estoy bien" is correct! For future reference, you could also say "Estoy muy bien" to express feeling great.
                </p>
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button 
                    onClick={toggleRecording}
                    className={`px-6 py-3 ${
                      isRecording 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-emerald-500 hover:bg-emerald-600'
                    } text-white font-medium transition-colors`}
                  >
                    {isRecording ? 'Stop' : '🎤'}
                  </button>
                  <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-r-lg font-medium hover:bg-gray-300 transition-colors">
                    Send
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Press and hold the microphone button to record your voice
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vocabulary Hints */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Vocabulary Hints</h2>
              <div className="space-y-3">
                {[
                  { word: 'comida', translation: 'food' },
                  { word: 'restaurante', translation: 'restaurant' },
                  { word: 'menú', translation: 'menu' },
                  { word: 'bebida', translation: 'drink' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{item.word}</span>
                    <span className="text-gray-600">{item.translation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversation History */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Session Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Vocabulary</span>
                    <span className="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Grammar</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Pronunciation</span>
                    <span className="text-sm font-medium text-gray-700">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Rating */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Rate This Lesson</h2>
              <div className="flex justify-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-2xl text-gray-300 hover:text-amber-400">
                    ★
                  </button>
                ))}
              </div>
              <textarea 
                placeholder="Leave feedback..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                rows={3}
              ></textarea>
              <button className="w-full mt-3 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                Submit Rating
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}