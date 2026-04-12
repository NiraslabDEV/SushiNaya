'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MenuGrid from '@/components/MenuGrid'
import CheckoutSection from '@/components/CheckoutSection'
import FloatingCartBadge from '@/components/FloatingCartBadge'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <MenuGrid />
        <CheckoutSection />
        <Footer />
      </main>
      <FloatingCartBadge />
    </>
  )
}