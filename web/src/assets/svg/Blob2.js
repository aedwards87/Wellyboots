import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { blackOrWhite, capitilise } from '../../utils/helpers'

const Blob = ({ className, width = "924", height = "860", color = "Blue", ...props }) => {
  return (
    <Container
      className={className}
      style={{ '--colorBlob': `var(--color${blackOrWhite(capitilise(color))})` }}
      {...props}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 924 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M482.869 246.808C482.869 246.808 348.766 252.626 248.513 211.65C148.126 170.551 -33.7739 269.599 59.6629 408.692C153.1 547.785 174.62 529.143 193 637C211.333 744.961 246.19 778.361 318.5 781.5C405.972 785.297 458.307 693.411 538.518 692.177C654.046 690.452 776.228 707.217 835.594 528.423C861.571 450.113 862.22 370.153 794.856 316.118C703.919 243.17 593.716 234.319 482.869 246.808Z" className="colorBlob" />
      </svg>
    </Container>
  )
}

const Container = styled(motion.div)`
  .colorBlob {
    fill: rgb(var(--colorBlob))
  }

  position: absolute;
`

export default Blob
