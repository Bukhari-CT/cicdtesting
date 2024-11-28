import { render, screen } from '@testing-library/react'
import { Benefits } from '../Benefits'

describe('Benefits', () => {
  it('renders the main heading', () => {
    render(<Benefits />)
    expect(screen.getByText('Key Components of CI/CD Pipeline')).toBeInTheDocument()
  })

  it('renders all benefit cards', () => {
    render(<Benefits />)
    expect(screen.getByText('Continuous Integration')).toBeInTheDocument()
    expect(screen.getByText('Automated Testing')).toBeInTheDocument()
    expect(screen.getByText('Continuous Deployment')).toBeInTheDocument()
    expect(screen.getByText('Infrastructure as Code')).toBeInTheDocument()
    expect(screen.getByText('Monitoring & Logging')).toBeInTheDocument()
    expect(screen.getByText('Security Scanning')).toBeInTheDocument()
  })

  it('renders benefit descriptions', () => {
    render(<Benefits />)
    expect(screen.getByText(/Run comprehensive tests automatically/)).toBeInTheDocument()
    expect(screen.getByText(/Automatically merge code changes/)).toBeInTheDocument()
  })

  it('renders all benefit icons', () => {
    render(<Benefits />)
    const icons = ['🔄', '🧪', '🚀', '⚙️', '📊', '🔒']
    icons.forEach(icon => {
      expect(screen.getByText(icon)).toBeInTheDocument()
    })
  })
})
