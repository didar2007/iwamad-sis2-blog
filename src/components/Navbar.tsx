
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Daily Notes</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/protected">Protected</Link>
      </div>
    </nav>
  )
}
