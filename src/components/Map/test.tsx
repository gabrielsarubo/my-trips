import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render with any marker', () => {
    render(<Map />)

    // Test if leaflet was rendered onscreen (withou any wrapper)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })

  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Guareí',
      slug: 'guareí',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Husavik',
      slug: 'husavik',
      location: {
        latitude: 100,
        longitude: -150
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/guareí/i)).toBeInTheDocument()
    expect(screen.getByTitle(/husavik/i)).toBeInTheDocument()
  })
})
