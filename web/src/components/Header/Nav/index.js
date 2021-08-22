// Imported packages
import React from 'react'
// Imported components
import Nav from './Nav'
// Imported data
import navLinks from '../../../data/navLinks'
import { useLocationsQuery } from '../../../hooks'
// Imported helpers
import { camalise } from '../../../utils/helpers'


const NavIndex = ({ siteTitle }) => {
  const data = useLocationsQuery()
  return (
    <Nav>
      <Nav.Link home>
        <Nav.Logo title={siteTitle} />
      </Nav.Link>
      <Nav.Menu>
        <Nav.Burger />
      </Nav.Menu>
      <Nav.ListContainer>
        <Nav.List>
          {navLinks.map(
            link =>
              <Nav.ListItem key={link.title} navLinks={link}>
                <Nav.Body>
                  <Nav.Link to={link}>
                    <Nav.Span>{link.title}</Nav.Span>
                  </Nav.Link>
                  {link.hasDropdown &&
                    <Nav.Dropdown title={link.title} data={data}>
                      {data[`${camalise(link.title)}`].nodes
                        .map(({ name, title, slug, subBrandColors, subBrandLogo }) => {
                          return (
                            <Nav.Body key={name} dropdown>
                              <Nav.Link
                                to={`/${link.title.toLowerCase()}/${slug.current}`}
                                color={subBrandColors}
                                dropdown
                              >
                                <Nav.SVG subBrandLogo={subBrandLogo} />
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
