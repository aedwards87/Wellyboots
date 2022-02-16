import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 980 })
  return matches ? children : null
}

const Laptop = ({ children }) => {
  const matches = useMediaQuery({ maxWidth: 979 })
  return matches ? children : null
}

const LargeScreen = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 768 })
  return matches ? children : null
}

const SmallScreen = ({ children }) => {
  const matches = useMediaQuery({ maxWidth: 767 })
  return matches ? children : null
}

const LargeTablet = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 768, maxWidth: 1024, minHeight: 1000 })
  return matches ? children : null
}


const SmallTablet = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 420, maxWidth: 767 })
  return matches ? children : null
}

const Mobile = ({ children }) => {
  const matches = useMediaQuery({ maxWidth: 420 })
  return matches ? children : null
}

export { Desktop, Laptop, LargeScreen, LargeTablet, SmallTablet, SmallScreen, Mobile }