import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import TrustedBy from './components/TrustedBy'
import WhatWeDo from './components/WhatWeDo'
import SelectedWork from './components/SelectedWork'
import HowWeWork from './components/HowWeWork'
import TrustSignals from './components/TrustSignals'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Positioning />
        <TrustedBy />
        <WhatWeDo />
        <SelectedWork />
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
