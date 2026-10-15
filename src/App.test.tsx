
import '@testing-library/jest-dom/vitest'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Login from './pages/Login'

describe('Blog application', () => {
  it('renders the home page heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /ideas, stories\s*and inspiration/i,
      })
    ).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Posts />)

    expect(
      screen.getByRole('heading', {
        name: 'The Power of Small Habits',
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'Why Travel Changes Us',
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'Learning Never Stops',
      })
    ).toBeInTheDocument()
  })

  it('toggles the like button when clicked', () => {
    render(<Posts />)

    const likeButton = screen.getAllByRole('button', {
      name: '♡ Like',
    })[0]

    fireEvent.click(likeButton)

    expect(likeButton).toHaveTextContent('♥ Liked')
    expect(likeButton).toHaveAttribute('aria-pressed', 'true')
  })

  it('renders the sign-in page', () => {
    render(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /welcome back/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /sign in/i,
      })
    ).toBeInTheDocument()
  })
})
