// Imported dependencies
import React from 'react'
// Imported components
import Footer from './Footer'
// Imported hooks
import { useLocationsQuery, useSiteDetailsQuery } from '../../hooks'
// Temp data
import footerLinks from '../../data/footerLinks'
import { addSpaceToString, replaceAmpersand, toLowerCaseAndHypen } from '../../utils/helpers'


const FooterIndex = () => {
  const googleMapURL = "https://www.google.com/maps/place/51%C2%B012'51.0%22N+0%C2%B006'51.1%22E/@51.2141732,0.1119981,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d51.2141732!4d0.1141868"
  const { locations: { nodes: locations } } = useLocationsQuery()
  const { siteDetails: { nodes } } = useSiteDetailsQuery()
  const { location } = nodes[0].contactDetails
  const conactDetails = location.contactDetails
  const address = location.address
  const hasDropdownOrIsReviews = (link) => {
    const title = toLowerCaseAndHypen(replaceAmpersand(link.title))
    if (link.hasDropdown) {
      return `/#${title}`
    } else if (title === 'reviews') {
      return `#${title}`
    } else if (title.includes('policies')) {
      return `/${replaceAmpersand(title)}/website-policy`
    } else {
      return `/${replaceAmpersand(title)}`
    }
  }
  return (
    <Footer id="company-details">
      <Footer.Frame tPad={12} bPad={25}>
        <Footer.Row columns={1}>
          <Footer.Column columns={2}>
            <Footer.Title heading="h2" lineColor="blue">
              Company details
            </Footer.Title>
            <Footer.Button
              model={1} 
              color="light" 
              yPad={3} 
              xPad={3} 
              scrollTop
              ariaLabel="Scroll to top"
              title="Scroll to top"
            >
              <Footer.ArrowSVG color="dark green" />
            </Footer.Button>
          </Footer.Column>
        </Footer.Row>

        <Footer.Row xGap="5vw" yGap={5}>

          <Footer.Column yGap={4}>
            <Footer.Group columns={2}>
              <Footer.PhoneSVG />
              <Footer.ExternalLink
                href={`tel:+44${conactDetails.mobileNumber.slice(1)}`}
                rel="noopener noreferrer"
              >
                {addSpaceToString(conactDetails.mobileNumber)}
              </Footer.ExternalLink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.EmailSVG />
              <Footer.ExternalLink
                href={`mailto:${conactDetails.emailAddressOne}`}
                rel="noopener noreferrer"
              >
                {conactDetails.emailAddressOne}
              </Footer.ExternalLink>
            </Footer.Group>
            <Footer.Group columns={2}>
              <Footer.HomeSVG />
              <Footer.Group>
                <Footer.ExternalLink
                  href={googleMapURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address.nameOrNumber && <> {address.nameOrNumber}, <br /> </>}
                  {address.addressLineOne && <> {address.addressLineOne}, <br /> </>}
                  {address.addressLineTwo && <> {address.addressLineTwo}, <br /> </>}
                  {address.townOrCity && <> {address.townOrCity}, <br /> </>}
                  {address.county && <> {address.county}, <br /> </>}
                  {address.postCode && address.postCode}
                </Footer.ExternalLink>
              </Footer.Group>
            </Footer.Group>
          </Footer.Column>

          <Footer.Row custom yGap={5}>
            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LocationsSVG />
                <Footer.Group>
                  {locations.map(({ name, title, slug, subBrandColors }) =>
                    <Footer.Link 
                      key={name} 
                      to={`/locations/${slug.current}`} 
                      lineColor={subBrandColors}
                    >
                      {name || title}
                    </Footer.Link>
                  )}
                </Footer.Group>
              </Footer.Group>
            </Footer.Column>

            <Footer.Column>
              <Footer.Group columns={2}>
                <Footer.LinkSVG />
                <Footer.Group>
                  {footerLinks.map(link =>
                    <Footer.Link
                      key={link.title}
                      to={hasDropdownOrIsReviews(link)}
                      lineColor={[link]}
                    >
                      {link.title}
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