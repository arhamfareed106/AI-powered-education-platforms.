'use client'

import Navbar from '../components/Navbar'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Fluentix</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize Spanish learning for IB and AP students through AI-powered technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-700 text-lg mb-4">
                At Fluentix, we believe that every student deserves access to high-quality, personalized Spanish education. 
                Our AI-powered virtual tutor adapts to each learner's pace and style, providing real-time feedback and 
                engaging conversation practice.
              </p>
              <p className="text-gray-700 text-lg">
                We're committed to helping students excel in their IB and AP Spanish courses while building genuine 
                confidence in real-world communication.
              </p>
            </div>
          </div>

          {/* Who Uses Fluentix */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Uses Fluentix</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Students</h3>
                <p className="text-gray-600">
                  IB and AP Spanish students seeking personalized practice and real-time feedback to excel in their exams.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teachers</h3>
                <p className="text-gray-600">
                  Educators who want to enhance their curriculum with AI-powered tools and track student progress effectively.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Sch</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schools</h3>
                <p className="text-gray-600">
                  Educational institutions looking to provide cutting-edge language learning technology to their students.
                </p>
              </div>
            </div>
          </div>

          {/* Why Built for IB/AP */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Fluentix is Built for IB/AP Students</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Curriculum-Aligned Content:</span> All lessons and practice materials are specifically designed to match IB and AP Spanish curriculum standards.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Exam-Specific Practice:</span> Targeted modules for both IB Internal Assessments and AP Spanish exams.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Advanced Scoring Rubrics:</span> AI evaluates speaking and writing using authentic IB and AP scoring guidelines.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Progress Tracking:</span> Detailed analytics aligned with IB and AP performance indicators.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member {item}</h3>
                  <p className="text-emerald-600 mb-3">Role Title</p>
                  <p className="text-gray-600 text-sm">
                    Brief description of the team member's background and contribution to Fluentix.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}