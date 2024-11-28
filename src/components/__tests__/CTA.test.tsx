import { render, screen } from '@testing-library/react'
import { CTA } from '../CTA'

describe('CTA', () => {
  it('renders the main heading', () => {
    render(<CTA />)
    expect(screen.getByText('Ready to Modernize Your Development Pipeline?')).toBeInTheDocument()
    expect(screen.getByText('Get started with CI/CD implementation today')).toBeInTheDocument()
  })

  it('renders the action buttons', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /schedule demo/i })).toBeInTheDocument()
  })
})
