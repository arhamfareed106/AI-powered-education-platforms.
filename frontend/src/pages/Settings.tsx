import React, { useState } from 'react'

const Settings: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    username: "johndoe"
  })
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setNotifications(prev => ({ ...prev, [name]: checked }))
  }

  const handleSaveProfile = () => {
    // Save profile logic here
    console.log("Profile saved:", profile)
  }

  const handleSaveNotifications = () => {
    // Save notifications logic here
    console.log("Notifications saved:", notifications)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={profile.firstName}
                onChange={handleProfileChange}
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={profile.lastName}
                onChange={handleProfileChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </div>
            
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={profile.username}
                onChange={handleProfileChange}
              />
            </div>
          </div>
          
          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Profile
          </button>
        </div>
        
        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email"
                name="email"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notifications.email}
                onChange={handleNotificationChange}
              />
              <label htmlFor="email" className="ml-2 block text-sm text-gray-900">
                Email notifications
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="push"
                name="push"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notifications.push}
                onChange={handleNotificationChange}
              />
              <label htmlFor="push" className="ml-2 block text-sm text-gray-900">
                Push notifications
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sms"
                name="sms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notifications.sms}
                onChange={handleNotificationChange}
              />
              <label htmlFor="sms" className="ml-2 block text-sm text-gray-900">
                SMS notifications
              </label>
            </div>
          </div>
          
          <button
            onClick={handleSaveNotifications}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Notification Settings
          </button>
        </div>
      </div>
      
      {/* Security Settings */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
              Change Password
            </button>
          </div>
          
          <div>
            <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
              Two-Factor Authentication
            </button>
          </div>
          
          <div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings