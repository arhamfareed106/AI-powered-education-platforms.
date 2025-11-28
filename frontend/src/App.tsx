import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AiTutor from './pages/AiTutor'
import Assignments from './pages/Assignments'
import TeacherTools from './pages/TeacherTools'
import SchoolAdminTools from './pages/SchoolAdminTools'
import Subscription from './pages/Subscription'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ai-tutor" element={<AiTutor />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/teacher-tools" element={<TeacherTools />} />
            <Route path="/school-admin" element={<SchoolAdminTools />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App