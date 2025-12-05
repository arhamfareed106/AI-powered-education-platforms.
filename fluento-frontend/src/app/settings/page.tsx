'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  
  const tabs = [
    { id: 'profile', name: 'Profile' },
    { id: 'preferences', name: 'Preferences' },
    { id: 'notifications', name: 'Notifications' },
    { id: 'security', name: 'Security' }
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
                <Link href="/settings" className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-md text-sm font-medium">
                  Settings
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
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences.</p>
        </div>

        <div className="bg-white rounded-2xl shadow">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Profile Information</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="Alex"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="alex.johnson@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="languageLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Spanish Level
                    </label>
                    <select
                      id="languageLevel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="intermediate"
                    >
                      <option value="beginner">Beginner (A1-A2)</option>
                      <option value="intermediate">Intermediate (B1-B2)</option>
                      <option value="advanced">Advanced (C1-C2)</option>
                      <option value="native">Native Speaker</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Tell us about yourself..."
                      defaultValue="High school student preparing for the IB Spanish exam."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Dark Mode</h3>
                      <p className="text-sm text-gray-500">Enable dark theme for the application</p>
                    </div>
                    <button
                      type="button"
                      className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive email updates about your progress</p>
                    </div>
                    <button
                      type="button"
                      className="bg-emerald-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Weekly Progress Reports</h3>
                      <p className="text-sm text-gray-500">Receive weekly summaries of your learning</p>
                    </div>
                    <button
                      type="button"
                      className="bg-emerald-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Reminders</h3>
                      <p className="text-sm text-gray-500">Get reminders to practice daily</p>
                    </div>
                    <button
                      type="button"
                      className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">In-App Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="inAppAssignments"
                          name="inAppAssignments"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="inAppAssignments" className="ml-3 text-sm text-gray-700">
                          Assignment updates
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="inAppProgress"
                          name="inAppProgress"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="inAppProgress" className="ml-3 text-sm text-gray-700">
                          Progress milestones
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="inAppMessages"
                          name="inAppMessages"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor="inAppMessages" className="ml-3 text-sm text-gray-700">
                          Messages from teachers
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="emailWeekly"
                          name="emailWeekly"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="emailWeekly" className="ml-3 text-sm text-gray-700">
                          Weekly progress report
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="emailAssignments"
                          name="emailAssignments"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor="emailAssignments" className="ml-3 text-sm text-gray-700">
                          Assignment deadlines
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="emailPromotions"
                          name="emailPromotions"
                          type="checkbox"
                          className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor="emailPromotions" className="ml-3 text-sm text-gray-700">
                          Product updates and promotions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Security</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Change Password</h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div className="md:col-span-2"></div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Not enabled</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                        Enable
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Chrome on Windows</p>
                          <p className="text-xs text-gray-500">Last active: Just now</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Current
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                          <p className="text-xs text-gray-500">Last active: 2 days ago</p>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}