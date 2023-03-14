import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    expect(screen.getByText(/Hello there/i)).toBeInTheDocument()
  })
})
