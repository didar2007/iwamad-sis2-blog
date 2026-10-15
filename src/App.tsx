
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import Protected from './pages/Protected'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default function App() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <BrowserRouter basename="/iwamad-sis2-blog">
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={
                signedIn
                  ? <Navigate to="/protected" replace />
                  : <Login onLogin={() => setSignedIn(true)} />
              }
            />
            <Route
              path="/protected"
              element={
                signedIn
                  ? <Protected />
                  : <Navigate to="/login" replace />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          © 2026 Daily Notes. Made with React.
        </footer>
      </div>
    </BrowserRouter>
  )
}
