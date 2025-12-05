'use client'

export default function DashboardHome() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex! Let&apos;s Make Learning Fun!</h1>
          <p className="text-gray-600">Continue your Spanish learning journey</p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Current Streak', value: '7 days', color: 'bg-blue-500' },
            { title: 'Lessons Completed', value: '24', color: 'bg-emerald-500' },
            { title: 'Words Learned', value: '342', color: 'bg-purple-500' },
            { title: 'Accuracy Rate', value: '89%', color: 'bg-amber-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6">
              <div className={`w-12 h-12 ${stat.color} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: 'Vocabulary', level: 'Intermediate', progress: 75 },
            { title: 'Grammar', level: 'Beginner', progress: 45 },
            { title: 'Listening', level: 'Advanced', progress: 90 },
            { title: 'Speaking', level: 'Intermediate', progress: 65 }
          ].map((skill, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{skill.title}</h3>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mt-2">
                    {skill.level}
                  </span>
                </div>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full" 
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Learning Path */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Learning Path</h2>
          
          <div className="space-y-4">
            {[
              { title: 'Present Tense Verbs', duration: '15 min', completed: true },
              { title: 'Ser vs Estar', duration: '20 min', completed: true },
              { title: 'Food Vocabulary', duration: '25 min', completed: false },
              { title: 'Restaurant Conversations', duration: '30 min', completed: false }
            ].map((lesson, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${lesson.completed ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                    {lesson.completed ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <span className="text-gray-700 font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                    <p className="text-sm text-gray-500">{lesson.duration}</p>
                  </div>
                </div>
                
                {!lesson.completed ? (
                  <button className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                    Continue
                  </button>
                ) : (
                  <span className="text-emerald-500 font-medium">Completed</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}