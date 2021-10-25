// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Group,
  Title,
  Text,
  Link,
  NewLink,
  ExternalLink,
  Button,
  ArrowSVG,
  PhoneSVG,
  HomeSVG,
  EmailSVG,
  LocationsSVG,
  LinkSVG,
  FooterBlobSVG,
  Signature,
} from './FooterStyles'

// Imported helpers
import { capitilise } from '../../utils/helpers'
import InView from 'react-intersection-observer'


export default function Footer({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))`,
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

Footer.Frame = function FooterFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Footer.Row = function FooterRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Footer.Column = function FooterColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Footer.Group = function FooterGroup({ children, className, columns, ...props }) {
  return (<Group className={className} columns={columns} {...props}>{children}</Group>)
}

Footer.SVG = function FooterSVG({ children, className, ...props }) {
  return (<SVG className={className} {...props}>{children}</SVG>)
}

export const headingVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 4,
      stiffness: 100,
      damping: 40,
      delay: .2
    }
  }
}

Footer.Title = function FooterTitle({ children, className, ...props }) {
  return (
    <InView threshold=".3">
      {({ inView, ref }) =>
        <Title
          innerRef={ref}
          className={className}
          initial="initial"
          animate={inView && "animate"}
          variants={headingVariants}
          {...props}
        >
          {children}
        </Title>
      }
    </InView>
  )
}

Footer.Text = function FooterText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Footer.Link = function FooterLink({ children, className, ...props }) {
  return (<Link className={className} {...props}>{children}</Link>)
}

Footer.ExternalLink = function FooterExternalLink({ children, className, ...props }) {
  return (<ExternalLink className={className} {...props}>{children}</ExternalLink>)
}

Footer.Button = function FooterButton({ children, className, ...props }) {
  return (<Button className={className} {...props}>{children}</Button>)
}

Footer.ArrowSVG = function FooterArrowSVG({ children, className, ...props }) {
  return (<ArrowSVG className={className} {...props}>{children}</ArrowSVG>)
}

Footer.PhoneSVG = function FooterPhoneSVG({ children, className, ...props }) {
  return (<PhoneSVG className={className} {...props}>{children}</PhoneSVG>)
}

Footer.EmailSVG = function FooterEmailSVG({ children, className, ...props }) {
  return (<EmailSVG className={className} {...props}>{children}</EmailSVG>)
}

Footer.HomeSVG = function FooterHomeSVG({ children, className, ...props }) {
  return (<HomeSVG className={className} {...props}>{children}</HomeSVG>)
}

Footer.LocationsSVG = function FooterLocationsSVG({ children, className, ...props }) {
  return (<LocationsSVG className={className} {...props}>{children}</LocationsSVG>)
}

Footer.LinkSVG = function FooterLinkSVG({ children, className, ...props }) {
  return (<LinkSVG className={className} {...props}>{children}</LinkSVG>)
}

Footer.FooterBlobSVG = function FooterFooterBlobSVG({ children, className, ...props }) {
  return (<FooterBlobSVG className={className} {...props}>{children}</FooterBlobSVG>)
}

Footer.Signature = function FooterSignature({ children, className, ...props }) {
  return (
    <Signature className={className} {...props}>
      <li>© Wellyboots Daycare Ltd</li>
      <li>Website by: <Footer.ExternalLink href="https://www.facebook.com/adam.edwards.1650" target="_blank" rel="noopener noreferrer">Adam Edwards</Footer.ExternalLink></li>
    </Signature>
  )
}
