import BookingForm from './components/BookingForm'
import Header from './components/Header'

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <BookingForm />
      </main>
    </>
  )
}
