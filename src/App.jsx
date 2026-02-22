import { useState, useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import TrustedBy from './components/TrustedBy'
import WhatWeDo from './components/WhatWeDo'
import WhyChooseUs from './components/WhyChooseUs'
import SelectedWork from './components/SelectedWork'
import CaseStudies from './components/CaseStudies'
import Pricing from './components/Pricing'
import HowWeWork from './components/HowWeWork'
import TrustSignals from './components/TrustSignals'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import BookingForm from './components/BookingForm'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Handle route changes
    const handleRoute = () => {
      const path = window.location.pathname
      if (path === '/book' || path === '/book/') {
        setCurrentPage('book')
      } else {
        setCurrentPage('home')
      }
      window.scrollTo(0, 0)
    }

    handleRoute()
    window.addEventListener('popstate', handleRoute)
    return () => window.removeEventListener('popstate', handleRoute)
  }, [])

  const navigate = (path) => {
    window.history.pushState(null, '', path)
    setCurrentPage(path === '/book' ? 'book' : 'home')
    window.scrollTo(0, 0)
  }

  // Intercept link clicks
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a')
      if (link && (link.href.endsWith('/book') || link.pathname === '/book')) {
        e.preventDefault()
        navigate('/book')
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  if (currentPage === 'book') {
    return (
      <>
        <Header />
        <main className="pt-20">
          <BookingForm />
        </main>
      </>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Positioning />
        <TrustedBy />
        <WhatWeDo />
        <WhyChooseUs />
        <SelectedWork />
        <CaseStudies />
        <Pricing />
        <HowWeWork />
        <TrustSignals />
        <FAQ />
        <CTA />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
