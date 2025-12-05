'use client'

import Navbar from '../components/Navbar'
import FeaturesSplit from '../components/FeaturesSplit'
import FaqSection from '../components/FaqSection'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <FeaturesSplit />
        <FaqSection />
      </main>
    </div>
  )
}