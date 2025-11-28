import React from 'react'

const Subscription: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "Individual Plan",
      price: "$9.99",
      period: "per month",
      features: [
        "Access to AI Spanish Tutor",
        "Unlimited conversations",
        "Progress tracking",
        "Basic assignments"
      ],
      recommended: false
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "$19.99",
      period: "per month",
      features: [
        "All Individual Plan features",
        "Advanced assignments",
        "Priority support",
        "Offline mode",
        "Custom learning paths"
      ],
      recommended: true
    },
    {
      id: 3,
      name: "School Plan",
      price: "$99.99",
      period: "per month",
      features: [
        "Up to 50 students",
        "Teacher dashboard",
        "Class management",
        "Assignment creation",
        "Progress reports",
        "School analytics"
      ],
      recommended: false
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Subscription Plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              plan.recommended ? 'border-2 border-blue-500 transform scale-105' : ''
            }`}
          >
            {plan.recommended && (
              <div className="bg-blue-500 text-white text-center py-2">
                <span className="font-bold">RECOMMENDED</span>
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600"> {plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-300 ${
                  plan.recommended 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Current Subscription</h2>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="text-gray-600">Renews on December 15, 2023</p>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mr-2">
              Manage
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription