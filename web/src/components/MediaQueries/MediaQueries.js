import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 981 })
  return matches ? children : null
}

const Laptop = ({ children }) => {
  const matches = useMediaQuery({ maxWidth: 980 })
  return matches ? children : null
}

const Tablet = ({ children }) => {
  const matches = useMediaQuery({ minWidth: 768, maxWidth: 1024, minHeight: 1000 })
  return matches ? children : null
}

const Mobile = ({ children }) => {
  const matches = useMediaQuery({ maxWidth: 767 })
  return matches ? children : null
}

export { Desktop, Laptop, Tablet, Mobile }