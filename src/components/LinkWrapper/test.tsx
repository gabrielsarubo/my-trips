import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

/**
 * This is a test suite for the LinkWrapper component.
 * All the tests inside this block are related to the LinkWrapper component.
 */
describe('<LinkWrapper />', () => {
  // This is an individual test case.
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByRole('link', { name: /anything/i })
    // children == <a href="/my-link">Anything</a>

    // Assertion #1
    expect(children).toBeInTheDocument()
    // Assertion #2
    expect(children).toHaveAttribute('href', '/my-link')

    // Check how the component is being rendered on screen
    // screen.logTestingPlaygroundURL()
  })
})
