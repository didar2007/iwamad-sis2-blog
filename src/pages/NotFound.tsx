
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <span className="eyebrow">ERROR 404</span>
      <h1>Lost in the pages?</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="primary-button">
        Back to home →
      </Link>
    </section>
  )
}
