'use client'

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      featured: false,
      features: [
        '5 lessons per month',
        'Basic vocabulary exercises',
        'Community access',
        'Progress tracking'
      ]
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'Most popular for serious learners',
      featured: true,
      features: [
        'Unlimited lessons',
        'AI voice feedback',
        'Animated avatar conversations',
        'Exam prep modules',
        'Progress analytics',
        'Priority support'
      ]
    },
    {
      name: 'Premium',
      price: '$39',
      description: 'Complete immersion experience',
      featured: false,
      features: [
        'Everything in Pro',
        '1-on-1 tutoring sessions',
        'Custom learning paths',
        'Offline downloads',
        'Certificate of completion',
        'Dedicated account manager'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 7-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl shadow-md p-8 relative ${
                plan.featured 
                  ? 'ring-2 ring-emerald-500 bg-white transform md:-translate-y-4' 
                  : 'bg-gray-50'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex justify-center items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-4 rounded-full font-medium ${
                  plan.featured
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-white text-emerald-600 border border-emerald-500 hover:bg-emerald-50'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}