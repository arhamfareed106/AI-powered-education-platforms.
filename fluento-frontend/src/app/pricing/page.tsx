'use client'

import Navbar from '../components/Navbar'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PricingSection />
        <FaqSection />
      </main>
    </div>
  )
}