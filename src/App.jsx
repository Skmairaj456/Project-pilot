import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import WhatWeSolve from './components/WhatWeSolve'
import WhatWeBuild from './components/WhatWeDo'
import SelectedWork from './components/SelectedWork'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <WhatWeSolve />
        <WhatWeBuild />
        <Positioning />
        <CTA />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
