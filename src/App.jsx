import Header from './components/Header'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import WhatWeDo from './components/WhatWeDo'
import SelectedWork from './components/SelectedWork'
import HowWeWork from './components/HowWeWork'
import TrustSignals from './components/TrustSignals'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <WhatWeDo />
        <SelectedWork />
        <HowWeWork />
        <TrustSignals />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
