import { Link } from 'react-router-dom'
import { RelatedGuides } from '../components/ui'

function NotFound() {
  return (
    <div className="min-h-screen">
      <section className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center max-w-3xl">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange mb-6">Page not found</h1>
        <p className="text-xl text-halloween-light mb-8">
          This page doesn't exist, or it moved. Try one of the One Halloween Night guides below, or go back to the{' '}
          <Link to="/" className="underline text-halloween-orange hover:text-white">home page</Link>.
        </p>
        <div className="text-left">
          <RelatedGuides />
        </div>
      </section>
    </div>
  )
}

export default NotFound
