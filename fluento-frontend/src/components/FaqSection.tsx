'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs = [
    {
      question: 'How does the AI voice recognition work?',
      answer: 'Our advanced AI analyzes your pronunciation, intonation, and fluency in real-time, providing instant feedback to help you improve your Spanish speaking skills.'
    },
    {
      question: 'Is Fluento suitable for beginners?',
      answer: 'Absolutely! Fluento adapts to your skill level and provides personalized learning paths for beginners through advanced learners.'
    },
    {
      question: 'Can I prepare for IB or AP exams with Fluento?',
      answer: 'Yes, Fluento offers specialized exam preparation modules aligned with both IB and AP Spanish curriculum standards.'
    },
    {
      question: 'How much time should I spend daily?',
      answer: 'We recommend 15-30 minutes of daily practice for optimal results, but you can adjust based on your schedule and goals.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your learning experience.'
    }
  ]
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about the platform
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}