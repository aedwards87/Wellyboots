import React from 'react'
import styled, { css } from 'styled-components/macro'
import { capitilise } from '../../utils/helpers'

const Locations = ({ className, width = "55", height = "52", colorOne = "pink", colorTwo = "blue", ...props }) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      viewBox="0 0 37 50"
      colorOne={colorOne}
      colorTwo={colorTwo}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="colorOne" d="M28.0353 33.7153C27.4138 34.8029 26.7405 35.8387 26.0672 36.8227C30.4176 37.8068 33.0071 39.5158 33.0071 40.8106C33.0071 42.7268 27.2584 45.6271 18.5577 45.6271C9.85691 45.6271 4.10819 42.7268 4.10819 40.8106C4.10819 39.5158 6.6977 37.8585 11.0481 36.8227C10.3748 35.8387 9.70154 34.8029 9.08005 33.7153C4.10819 35.0101 0.534668 37.3406 0.534668 40.8106C0.534668 46.3004 9.59796 49.2006 18.5577 49.2006C27.5174 49.2006 36.5807 46.3004 36.5807 40.8106C36.5807 37.3406 33.0071 35.0101 28.0353 33.7153Z" />
      <path className="colorTwo" d="M20.1637 39.3606C23.8408 33.9226 32.6451 20.3018 32.6451 14.1387C32.6451 6.3184 26.3267 0 18.5582 0C10.7896 0 4.41943 6.3184 4.41943 14.1387C4.41943 20.3018 13.2756 33.9226 16.9527 39.3606C17.7295 40.4482 19.3868 40.4482 20.1637 39.3606ZM11.9808 14.1387C11.9808 10.5134 14.9328 7.56137 18.5582 7.56137C22.1835 7.56137 25.1355 10.5134 25.1355 14.1387C25.1355 17.764 22.1835 20.6643 18.5582 20.6643C14.9328 20.6643 11.9808 17.7123 11.9808 14.1387Z" />
    </Container>
  )
}

const Container = styled.svg`
  ${({ colorOne, colorTwo }) =>
    css`
      .colorOne {
        fill: rgb(var(--color${capitilise(colorOne)}));
        stroke
      }
      .colorTwo {
        fill: rgb(var(--color${capitilise(colorTwo)}))
      }
    `
  } 
`

export default Locations
