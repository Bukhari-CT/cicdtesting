import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Understanding CI/CD Pipeline')).toBeInTheDocument()
    expect(screen.getByText('Your Guide to Modern Software Development')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Learn how Continuous Integration and Continuous Deployment/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<Hero />)
    const button = screen.getByRole('link', { name: /learn more/i })
    expect(button).toBeInTheDocument()
  })

  it('renders the Watch Demo button', () => {
    render(<Hero />)
    const button = screen.getByRole('link', { name: /watch demo/i })
    expect(button).toBeInTheDocument()
  })
})
