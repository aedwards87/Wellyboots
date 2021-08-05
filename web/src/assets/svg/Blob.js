import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { blackOrWhite, capitilise } from '../../utils/helpers'

const Blob = ({ className, width = "1200", height = "1110", color = "Blue", ...props }) => {
  return (
    <Container
      className={className}
      style={{ '--colorBlob': `var(--color${blackOrWhite(capitilise(color))})` }}
      {...props}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 770 610"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M429.897 57.8203C372 61 302.679 56.3456 209.933 12.3467C117.068 -31.7751 -60.2379 52.4939 20.9492 188.995C102.136 325.496 124.701 329.277 136.481 432.308C148.21 535.436 157.187 601.249 239.822 609.3C322.407 617.448 383.402 479.205 459.378 482.212C568.802 486.594 683.562 508.821 749.053 342.702C777.715 269.942 782.491 194.302 721.551 139.657C639.287 65.8852 535.452 51.7716 429.897 57.8203Z" fill={color} className="colorBlob" />
      </svg>
    </Container>
  )
}

const Container = styled(motion.div)`
  .colorBlob {
    fill: rgb(var(--colorBlob))
  }
`

export default Blob
