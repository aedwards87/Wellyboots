// Imported packages
import React from 'react'

// Imported components
import Footer from './Footer'

const schoolData = ['St Stephens', 'Crockham Hill', 'Roodlands Farm', 'Four Elms Primary School', 'Hever C of E Primary School']
const footLinks = ['Play theory', 'Locations', 'Curriculum', 'Reviews', 'About us', 'Contact us', 'Policies & Procedures',]

const FooterIndex = () => {
  return (
    <Footer>
      <Footer.Frame tPad={8} bPad={14}>
        <Footer.Row columns={1}>
          <Footer.Column columns={2}>
            <Footer.Title heading="h1" lineColor="blue">
              Company details
            </Footer.Title>
            <Footer.Button model={1} color="light" yPad={3} xPad={3}>
              <Footer.ArrowSVG color="dark green" />
            </Footer.Button>
          </Footer.Column>
        </Footer.Row>

        <Footer.Row xGap="5vw" yGap={7}>

          <Footer.Column yGap={7}>
            <Footer.Group columns={2}>
              <Footer.PhoneSVG />
              <Footer.ALink href="tel:+447967028418">07967 028418</Footer.ALink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.EmailSVG />
              <Footer.ALink href="mailto:wellyboots2009@gmail.com">wellyboots2009@gmail.com</Footer.ALink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.HomeSVG />
              <Footer.ALink
                href="https://goo.gl/maps/JALFdSucj7WPZvwD6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roodlands Farm,<br />
                Roodlands Lane,<br />
                Four Elms, Edenbridge,<br />
                TN8 6PD<br />
              </Footer.ALink>
            </Footer.Group>
          </Footer.Column>

          <Footer.Row custom>
            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LocationsSVG />
                <Footer.Group>
                  {schoolData.map(school =>
                    <Footer.Link
                      key={school}
                      to="/"
                    >
                      {school}
                    </Footer.Link>
                  )}
                </Footer.Group>
              </Footer.Group>
            </Footer.Column>

            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LinkSVG />
                <Footer.Group>
                  {footLinks.map(link =>
                    <Footer.Link
                      key={link}
                      to="/"
                    >
                      {link}
                    </Footer.Link>
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