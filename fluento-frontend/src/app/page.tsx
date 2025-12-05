'use client'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DashboardHome from './components/DashboardHome'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DashboardHome />
      </main>
    </div>
  )
}