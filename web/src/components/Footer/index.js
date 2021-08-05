// Imported dependencies
import React from 'react'
// Imported components
import Footer from './Footer'
import { TextUnderlineLink } from '../Reusable'
// Imported hooks
import { useCompanyLocationsQuery } from '../../hooks'

// Temp data
const schoolData = ['Crockham Hill', 'Four Elms', 'Hever', 'St Stephens', 'Roodlands Farm',]
const footLinks = ['Play theory', 'Locations', 'Curriculum', 'Reviews', 'About us', 'Contact us', 'Policies & Procedures',]
import footerLinks from '../../data/footerLinks'
import { camalise } from '../../utils/helpers'


const FooterIndex = () => {
  const data = useCompanyLocationsQuery()

  console.log(data)

  return (
    <Footer>
      <Footer.Frame tPad={11} bPad={15}>
        <Footer.Row columns={1}>
          <Footer.Column columns={2}>
            <Footer.Title heading="h2" lineColor="blue">
              Company details
            </Footer.Title>
            <Footer.Button to="/" model={1} color="light" yPad={3} xPad={3}>
              <Footer.ArrowSVG color="dark green" />
            </Footer.Button>
          </Footer.Column>
        </Footer.Row>

        <Footer.Row xGap="5vw" yGap={5}>

          <Footer.Column yGap={4}>
            <Footer.Group columns={2}>
              <Footer.PhoneSVG />
              <Footer.ExternalLink href="tel:+447967028418">
                07967 028418
              </Footer.ExternalLink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.EmailSVG />
              <Footer.ExternalLink href="mailto:wellyboots2009@gmail.com">
                wellyboots2009@gmail.com
              </Footer.ExternalLink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.HomeSVG />
              <Footer.Group>
                <Footer.ExternalLink
                  href="https://goo.gl/maps/JALFdSucj7WPZvwD6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Roodlands Farm,<br />
                  Roodlands Lane,<br />
                  Four Elms, Edenbridge,<br />
                  TN8 6PD<br />
                </Footer.ExternalLink>
              </Footer.Group>
            </Footer.Group>
          </Footer.Column>

          <Footer.Row custom yGap={5}>
            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LocationsSVG />
                <Footer.Group>
                  {/* Change to be short name */}
                  {data.locations.nodes
                    .map(({ name, title, subBrandColors }) =>
                      <TextUnderlineLink key={name} to="/" lineColor={subBrandColors}>
                        {name || title}
                      </TextUnderlineLink>
                    )
                  }
                </Footer.Group>
              </Footer.Group>
            </Footer.Column>

            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LinkSVG />
                <Footer.Group>
                  {footerLinks.map(link =>
                    <TextUnderlineLink key={link.title} to="/" lineColor={[link]} >
                      {link.title}
                    </TextUnderlineLink>
                  )}
                </Footer.Group>
              </Footer.Group>
            </Footer.Column>
          </Footer.Row>

          <Footer.FooterBlobSVG />
          <Footer.Signature />

        </Footer.Row>
      </Footer.Frame>
    </Footer>
  )
}

export default FooterIndex