'use client'

export default function CoreFeaturesGrid() {
  const features = [
    {
      title: 'AI Voice Recognition',
      description: 'Advanced speech processing for accurate pronunciation assessment.',
      items: [
        'Real-time feedback',
        'Accent reduction',
        'Fluency scoring'
      ]
    },
    {
      title: 'Adaptive Curriculum',
      description: 'Personalized learning paths that evolve with your progress.',
      items: [
        'Skill assessment',
        'Weakness identification',
        'Targeted practice'
      ]
    },
    {
      title: 'Animated Avatars',
      description: 'Interactive characters for engaging conversation practice.',
      items: [
        'Multiple personalities',
        'Scenario-based dialogues',
        'Emotional responses'
      ]
    },
    {
      title: 'Progress Analytics',
      description: 'Detailed insights into your learning journey and improvements.',
      items: [
        'Performance tracking',
        'Weekly reports',
        'Goal setting'
      ]
    },
    {
      title: 'Exam Preparation',
      description: 'Specialized modules for IB and AP Spanish examinations.',
      items: [
        'Practice tests',
        'Scoring rubrics',
        'Time management'
      ]
    },
    {
      title: 'Community Features',
      description: 'Connect with fellow learners and native speakers worldwide.',
      items: [
        'Language exchange',
        'Group challenges',
        'Cultural events'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to master Spanish efficiently and enjoyably
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}