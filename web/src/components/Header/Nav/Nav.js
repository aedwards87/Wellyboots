// Imported dependencies
import React from 'react'
import { AnimatePresence } from 'framer-motion'

// Imported components
import {
  Container,
  Logo,
  Burger,
  Menu,
  ListContainer,
  List,
  ListItem,
  Body,
  Link,
  Span,
  Button,
  Dropdown,
  SVG
} from './NavStyles'
import {
  ListVariants,
  ListItemVariants,
  DropdownVariants,
  framerMotionAPI
} from './NavAnimations'
import { Desktop, Laptop } from '../../MediaQueries/MediaQueries'

// Imported helpers
import { camalise, capitilise } from '../../../utils/helpers'

//Imported custom hooks
import {
  useHoverToggle,
  useDropdownToggleContext,
  DropdownToggleProvider,
  useNavMenuToggleContext,
  useCompanyBrandQuery
} from '../../../hooks'


export default function Nav({ children, className, height, fontSize, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--height': height,
        '--fontSize': fontSize
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

Nav.Logo = function NavLogo({ children, className, ...props }) {
  const { brand } = useCompanyBrandQuery()
  const { logo } = brand.nodes[0]
  return (
    <Logo
      className={className}
      fluid={logo.image.asset.fluid}
      alt={logo.alt}
      {...props}
    >
      {children}
    </Logo>
  )
}

Nav.Menu = function NavMenu({ children, className, ...props }) {
  return (<Menu className={className} {...props}>{children}</Menu>)
}

Nav.Burger = function NavBurger({ children, className, ...props }) {
  const [isOpen, toggle] = useNavMenuToggleContext()
  return (
    <Laptop>
      <Burger
        className={className}
        open={isOpen}
        onClick={toggle}
        aria-label="View navigation items"
        {...props}
      >
        <div />
        <div />
        <div />
      </Burger>
    </Laptop>
  )
}

Nav.ListContainer = function NavListContainer({ children, className, ...props }) {
  const [isOpen, _] = useNavMenuToggleContext()
  return (
    <>
      <Laptop>
        <AnimatePresence>
          {isOpen &&
            <ListContainer
              className={className}
              variants={ListVariants}
              {...framerMotionAPI}
              {...props}
            >
              {children}
            </ListContainer>
          }
        </AnimatePresence>
      </Laptop>
      <Desktop>{children}</Desktop>
    </>
  )
}

Nav.List = function NavList({ children, className, ...props }) {
  return (
    <List className={className} {...props}>{children}</List>
  )
}

Nav.Body = function NavBody({ children, className, ...props }) {
  return (<Body className={className} {...props}>{children}</Body>)
}

Nav.ListItem = function NavListItem({ children, className, navLinks, ...props }) {
  const [isHovered, toggle, bind] = useHoverToggle()
  return (
    <DropdownToggleProvider value={{ isHovered, toggle }}>
      <ListItem
        className={className}
        variants={ListItemVariants}
        style={{ '--lineColor': `var(--color${capitilise(navLinks.title)})` }}
        aria-haspopup={navLinks.hasDropdown}
        aria-expanded={isHovered}
        onClick={toggle}
        {...bind}
        {...props}
      >
        {children}
      </ListItem>
    </DropdownToggleProvider>
  )
}

Nav.Button = function NavButton({ children, className, ...props }) {
  const { toggle } = useDropdownToggleContext()
  return (
    <Desktop>
      <Link
        as={Button}
        className={className}
        onClick={toggle}
        aria-label="View sub-navigation links"
        {...props}
      >
        {children}
      </Link>
    </Desktop>
  )
}

Nav.Link = function NavLink({ children, className, home, color, dropdown, ...props }) {
  const [isOpen, toggle] = useNavMenuToggleContext()
  return (
    <Link
      className={className}
      onClick={isOpen ? toggle : null}
      home={home}
      dropdown={dropdown}
      $home={home}
      $dropdown={dropdown}
      hoverColor={color}
      {...props}
    >
      {children}
    </Link>
  )
}

Nav.Span = function NavSpan({ children, className, ...props }) {
  return (<Span className={className} {...props}>{children}</Span>)
}

Nav.SVG = function NavSVG({ children, className, subBrandLogo, ...props }) {
  return (<SVG dangerouslySetInnerHTML={{ __html: subBrandLogo }} className={className} {...props} />)
}

Nav.Dropdown = function NavDropdown({ children, className, background, pad, tPad, bPad, rPad, lPad, xPad, yPad, title, data, ...props }) {
  const { isHovered } = useDropdownToggleContext()
  return (
    <Desktop>
      <AnimatePresence>
        {isHovered &&
          <Dropdown
            className={className}
            style={{
              '--background': background,
            }}
            tPad={tPad || yPad}
            bPad={bPad || yPad}
            rPad={rPad || xPad}
            lPad={lPad || xPad}
            pad={pad}
            variants={DropdownVariants}
            {...framerMotionAPI}
            {...props}
          >
            {children}
          </Dropdown>
        }
      </AnimatePresence>
    </Desktop>
  )
}

Nav.DropdownBody = function NavSpan({ children, className, ...props }) {
  return (<Span className={className} {...props}>{children}</Span>)
}