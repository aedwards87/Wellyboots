import React from 'react'
import styled, { css } from 'styled-components/macro'
import { capitilise } from '../../utils/helpers'

const Clock = ({ 
  className, 
  width = "53", 
  height = "53", 
  colorOne = "dark", 
  colorTwo = "light", 
  colorThree = "dark", 
  ...props 
}) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      viewBox="0 0 55 55"
      colorOne={colorOne}
      colorTwo={colorTwo}
      colorThree={colorThree}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M49.2265 26.219C49.2265 38.8042 38.9735 49.0451 26.3735 49.0451V3.45459C39.0353 3.45459 49.2265 13.6338 49.2265 26.219Z" className="colorTwo" />
      <path d="M18.9948 37.8605L16.282 42.6362L17.4639 43.306L20.1767 38.5303L18.9948 37.8605Z" className="colorOne" />
      <path d="M14.1498 32.567L9.40527 35.3403L10.0916 36.5118L14.8361 33.7385L14.1498 32.567Z" className="colorOne" />
      <path d="M17.2456 9.28267L16.0732 9.96875L18.852 14.706L20.0244 14.02L17.2456 9.28267Z" className="colorOne" />
      <path d="M9.96501 16.1658L9.29443 17.3462L14.0752 20.0558L14.7458 18.8754L9.96501 16.1658Z" className="colorOne" />
      <path d="M12.5351 25.5293L7.03809 25.5513L7.04352 26.9085L12.5406 26.8865L12.5351 25.5293Z" className="colorOne" />
      <path d="M44.8412 7.71151C39.9 2.71445 33.2912 0 26.25 0C19.2088 0 12.6618 2.71445 7.65882 7.71151C2.71765 12.6469 0 19.2479 0 26.2191C0 33.252 2.71765 39.7914 7.72059 44.7885C12.7235 49.7855 19.2706 52.5 26.3118 52.5C33.3529 52.5 39.9 49.7855 44.9029 44.7885C49.8441 39.8531 52.6235 33.252 52.6235 26.2191C52.5 19.2479 49.7823 12.6469 44.8412 7.71151ZM26.3735 49.0452C13.7735 49.0452 3.52059 38.8043 3.52059 26.2191C3.52059 13.634 13.7735 3.39307 26.3735 3.39307C38.9735 3.39307 49.2264 13.634 49.2264 26.2191C49.2264 38.8043 39.0353 49.0452 26.3735 49.0452Z" className="colorOne" />
      <path d="M33.5211 37.9111L32.3394 38.5811L35.0527 43.3562L36.2345 42.6863L33.5211 37.9111Z" className="colorThree" />
      <path d="M38.4621 32.4563L37.7915 33.6367L42.5723 36.3463L43.2429 35.166L38.4621 32.4563Z" className="colorThree" />
      <path d="M35.2958 9.25715L32.5203 13.9966L33.6932 14.6818L36.4688 9.94239L35.2958 9.25715Z" className="colorThree" />
      <path d="M39.9629 25.4802L39.9568 26.8374L45.4538 26.8622L45.46 25.505L39.9629 25.4802Z" className="colorThree" />
      <path d="M42.6036 16.1185L37.8223 18.8281L38.4928 20.0086L43.2742 17.299L42.6036 16.1185Z" className="colorThree" />
    </Container>
  )
}

const Container = styled.svg`
  ${({ colorOne, colorTwo, colorThree }) =>
    css`
      .colorOne {
        fill: rgb(var(--color${capitilise(colorOne)}));
      }
      .colorTwo {
        fill: rgb(var(--color${capitilise(colorTwo)}))
      }
      .colorThree {
        fill: rgb(var(--color${capitilise(colorThree)}))
      }
    `
  } 
`

export default Clock
