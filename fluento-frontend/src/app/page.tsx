'use client'

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import DashboardHome from '../components/DashboardHome'
import SessionComplete from '../components/SessionComplete'
import FeaturesSplit from '../components/FeaturesSplit'
import CoreFeaturesGrid from '../components/CoreFeaturesGrid'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DashboardHome />
        <SessionComplete />
        <FeaturesSplit />
        <CoreFeaturesGrid />
        <PricingSection />
        <FaqSection />
      </main>
    </div>
  )
}