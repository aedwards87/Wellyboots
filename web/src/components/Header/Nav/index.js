// Imported dependencies
import React from 'react'
// Imported components
import Nav from './Nav'
// Imported data
import navLinks from '../../../data/navLinks'
// Imported hooks
import { useLocationsQuery } from '../../../hooks'
// Imported helpers
import { camalise } from '../../../utils/helpers'


const NavIndex = ({ siteTitle }) => {
  const data = useLocationsQuery()
  const isReviews = (link) => link.title === 'Reviews' ? `#${link.title}` : link
  return (
    <Nav aria-label="Primary navigation">
      <Nav.Link home>
        <Nav.Logo title={`${siteTitle} - Home`} />
      </Nav.Link>
      <Nav.Menu className="nav-burger">
        <Nav.Burger  />
      </Nav.Menu>
      <Nav.ListContainer>
        <Nav.List className="nav-list">
          {navLinks.map(
            link =>
              <Nav.ListItem key={link.title} navLinks={link}>
                <Nav.Body>
                  <Nav.Link to={isReviews(link)}>
                    <Nav.Span>{link.title}</Nav.Span>
                  </Nav.Link>
                  {link.hasDropdown &&
                    <Nav.Dropdown title={link.title} data={data}>
                      {data[`${camalise(link.title)}`].nodes
                        .map(({ name, title, slug, subBrandColors, subBrandSVG }) => {
                          return (
                            <Nav.Body key={name} dropdown>
                              <Nav.Link
                                to={`/${link.title.toLowerCase()}/${slug.current}`}
                                color={subBrandColors}
                                dropdown
                              >
                                <Nav.Boot 
                                  alt={subBrandSVG.alt} 
                                  image={subBrandSVG.asset.gatsbyImageData} 
                                  objectFit="contain"
                                />
                                {name || title}
                              </Nav.Link>
                            </Nav.Body>
                          )
                        }
                        )
                      }
                    </Nav.Dropdown>
                  }
                  {link.hasDropdown && <Nav.Button>▾</Nav.Button>}
                </Nav.Body>
              </Nav.ListItem>
          )}
        </Nav.List>
      </Nav.ListContainer>
    </Nav>
  )
}

export default NavIndex
