'use client'

import Link from 'next/link'

export default function SupportCenter() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to your inbox."
    },
    {
      question: "Can I use Fluentix on my mobile device?",
      answer: "Yes! Fluentix is fully responsive and works on all devices including smartphones and tablets. You can also download our mobile app for iOS and Android."
    },
    {
      question: "How do I track my students' progress as a teacher?",
      answer: "As a teacher, you can monitor your students' progress through the Teacher Dashboard. You'll see detailed analytics on vocabulary growth, grammar accuracy, and speaking fluency for each student."
    },
    {
      question: "What's the difference between IB and AP Spanish courses?",
      answer: "Our platform offers specialized content for both IB and AP Spanish courses. IB content focuses on communicative competence and intercultural understanding, while AP content emphasizes literary analysis and formal writing skills."
    },
    {
      question: "How does the AI tutor provide feedback?",
      answer: "Our AI tutor analyzes your speech in real-time, providing instant feedback on pronunciation, grammar, and vocabulary usage. Written responses are evaluated for coherence, accuracy, and complexity."
    }
  ]

  const contactMethods = [
    {
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours.",
      detail: "support@fluentix.ai"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team during business hours.",
      detail: "Available Mon-Fri, 9AM-5PM EST"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance with urgent issues.",
      detail: "+1 (800) 555-1234"
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
                <Link href="/dashboard" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/support" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Support
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
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Get help with Fluentix or find answers to common questions below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Still can't find what you're looking for?
                </p>
                <button className="mt-3 bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div>
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-lg">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{method.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Support Assistant */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">AI Support Assistant</h2>
              <p className="text-gray-600 mb-4">
                Ask our AI assistant any questions about using Fluentix.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 h-40 overflow-y-auto">
                <div className="text-sm text-gray-600">
                  Hello! I'm your Fluentix AI support assistant. How can I help you today?
                </div>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Type your question..."
                />
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-emerald-600 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
              <div className="bg-emerald-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Getting Started Guide</h3>
              <p className="text-gray-600 text-sm">
                Learn the basics of Fluentix and how to get the most out of your learning experience.
              </p>
            </a>
            <a href="#" className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
              <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm">
                Watch step-by-step video guides on using all Fluentix features.
              </p>
            </a>
            <a href="#" className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
              <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community Forum</h3>
              <p className="text-gray-600 text-sm">
                Connect with other learners and teachers in our community forum.
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}