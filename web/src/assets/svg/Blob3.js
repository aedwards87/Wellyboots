import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { blackOrWhite, capitilise } from '../../utils/helpers'

const Blob = ({ className, width = "876", height = "793", color = "Blue", ...props }) => {
  return (
    <Container
      className={className}
      style={{ '--colorBlob': `var(--color${blackOrWhite(capitilise(color))})` }}
      {...props}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 876 793"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M436.875 188.81C341.744 207.117 301.505 208.002 207.507 195.002C113.508 182.002 18.5131 268.004 43.0066 363.502C67.5 459 116.499 438.001 147.006 579.002C165.339 686.963 200.196 720.363 272.506 723.502C359.978 727.3 412.313 635.413 492.524 634.179C608.052 632.454 730.234 649.219 789.6 470.425C815.577 392.115 810.368 305.037 743.005 251.002C652.068 178.054 532.007 170.503 436.875 188.81Z" className="colorBlob" />
      </svg>
    </Container>
  )
}

const Container = styled(motion.div)`
  .colorBlob {
    fill: rgb(var(--colorBlob))
  }
  z-index: 1;
`

export default Blob
