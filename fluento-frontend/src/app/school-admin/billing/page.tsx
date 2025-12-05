'use client'

import Link from 'next/link'

export default function BillingPage() {
  const currentPlan = {
    name: 'School Premium',
    price: '$499',
    period: 'per month',
    students: 'Up to 1,500 students',
    features: [
      'Unlimited classes',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'API access'
    ],
    nextBilling: 'June 15, 2023'
  }

  const invoices = [
    { id: 1, date: 'May 15, 2023', amount: '$499.00', status: 'paid' },
    { id: 2, date: 'April 15, 2023', amount: '$499.00', status: 'paid' },
    { id: 3, date: 'March 15, 2023', amount: '$499.00', status: 'paid' },
    { id: 4, date: 'February 15, 2023', amount: '$499.00', status: 'paid' }
  ]

  const plans = [
    {
      name: 'School Starter',
      price: '$199',
      period: 'per month',
      students: 'Up to 500 students',
      features: [
        '50 classes',
        'Basic analytics',
        'Email support',
        'Standard branding'
      ],
      cta: 'Current Plan'
    },
    {
      name: 'School Premium',
      price: '$499',
      period: 'per month',
      students: 'Up to 1,500 students',
      features: [
        'Unlimited classes',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      cta: 'Current Plan'
    },
    {
      name: 'School Enterprise',
      price: 'Custom',
      period: '',
      students: 'Unlimited students',
      features: [
        'Unlimited classes',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom branding',
        'API access',
        'Single sign-on (SSO)',
        'Custom integrations'
      ],
      cta: 'Contact Sales'
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
                <Link href="/school-admin/dashboard" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/school-admin/teachers" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  Teachers
                </Link>
                <Link href="/school-admin/billing" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Billing
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription and payment information.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Plan</h2>
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{currentPlan.name}</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {currentPlan.price}
                      <span className="text-lg font-normal text-gray-600">/{currentPlan.period.split(' ')[1]}</span>
                    </p>
                    <p className="text-gray-600 mt-1">{currentPlan.students}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Active
                  </span>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-2">Plan Features</h4>
                  <ul className="space-y-2">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    Next billing date: <span className="font-medium text-gray-900">{currentPlan.nextBilling}</span>
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                      Update Payment Method
                    </button>
                    <button className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoices */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Billing History</h2>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{invoice.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{invoice.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Plan Comparison */}
          <div>
            <div className="bg-white rounded-2xl shadow p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Change Plan</h2>
              <div className="space-y-6">
                {plans.map((plan, index) => (
                  <div key={index} className={`border rounded-xl p-5 ${plan.name === currentPlan.name ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-20' : 'border-gray-200'}`}>
                    <h3 className="font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {plan.price}
                        {plan.period && <span className="text-base font-normal text-gray-600">/{plan.period.split(' ')[1]}</span>}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">{plan.students}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="h-4 w-4 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2 text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`mt-6 w-full py-2 rounded-lg font-medium ${
                        plan.cta === 'Current Plan' 
                          ? 'bg-gray-100 text-gray-800 cursor-default' 
                          : plan.cta === 'Contact Sales' 
                            ? 'bg-purple-500 text-white hover:bg-purple-600' 
                            : 'bg-emerald-500 text-white hover:bg-emerald-600'
                      }`}
                      disabled={plan.cta === 'Current Plan'}
                    >
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}