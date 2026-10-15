
import { useNavigate } from 'react-router'

type LoginProps = {
  onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate()

  function handleLogin() {
    onLogin()
    navigate('/protected')
  }

  return (
    <section className="page-section">
      <span className="eyebrow">MEMBERS ONLY</span>
      <h1>Welcome back.</h1>
      <p>Sign in to access the protected page.</p>
      <button className="primary-button" onClick={handleLogin}>
        Sign in →
      </button>
    </section>
  )
}
