
import { Link } from 'react-router'

export default function Home() {
  return (
    <section className="hero">
      <span className="eyebrow">A BLOG ABOUT EVERYDAY LIFE</span>
      <h1>Ideas, stories<br />and inspiration.</h1>
      <p>
        A little space for thoughts, experiences,
        and things worth sharing.
      </p>
      <Link to="/posts" className="primary-button">
        Explore posts →
      </Link>
    </section>
  )
}
