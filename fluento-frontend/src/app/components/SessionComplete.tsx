'use client'

export default function SessionComplete() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Green Gradient Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-6 md:mb-0">
              <h1 className="text-3xl font-bold mb-2">Session Complete!</h1>
              <p className="text-emerald-100">Great job on completing your Spanish lesson</p>
            </div>
            <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-emerald-600">92</span>
                <span className="block text-gray-600">Score</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { title: 'Pronunciation', score: 85 },
            { title: 'Grammar', score: 95 },
            { title: 'Vocabulary', score: 78 },
            { title: 'Fluency', score: 90 }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <span className="font-bold text-emerald-600">{item.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-emerald-500 h-3 rounded-full" 
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Suggestions Box */}
        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalized Suggestions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Focus on Pronunciation', 
                description: 'Practice rolling your Rs more consistently',
                color: 'border-l-4 border-l-emerald-500'
              },
              { 
                title: 'Expand Vocabulary', 
                description: 'Learn 10 new food-related words this week',
                color: 'border-l-4 border-l-blue-500'
              }
            ].map((suggestion, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm ${suggestion.color}`}>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{suggestion.title}</h3>
                <p className="text-gray-600">{suggestion.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-4">You said:</h3>
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="text-gray-800 italic">"Quiero comer una manzana roja."</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-4">Correct:</h3>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="text-emerald-800 italic">"Quiero comer una manzana roja."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}