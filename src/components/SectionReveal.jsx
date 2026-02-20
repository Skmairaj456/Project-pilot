import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionReveal({ children, className = '', y = 32, duration = 0.85 }) {
  const ref = useScrollReveal({ y, duration, start: 'top 85%' })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
