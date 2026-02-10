import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { y = 40, duration = 0.8, ease = 'power3.out', start = 'top 88%', once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          once,
          toggleActions: 'play none none none',
        },
      }
    )
    return () => {
      anim.kill()
      const st = anim.scrollTrigger
      if (st) st.kill()
    }
  }, [y, duration, ease, start, once])

  return ref
}
