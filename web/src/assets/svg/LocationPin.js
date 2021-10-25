import React from 'react'
import styled, { css } from 'styled-components/macro'
import { capitilise } from '../../utils/helpers'

const LocationPin = ({ className, width = "38", height = "52", colorOne = "dark", colorTwo = "dark", ...props }) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      viewBox="0 0 38 52"
      colorOne={colorOne}
      colorTwo={colorTwo}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="colorTwo" d="M28.9579 35.502C28.3035 36.6472 27.5945 37.7379 26.8856 38.774C31.4665 39.8102 34.1932 41.6098 34.1932 42.9732C34.1932 44.991 28.1399 48.0449 18.9781 48.0449C9.81623 48.0449 3.76289 44.991 3.76289 42.9732C3.76289 41.6098 6.48962 39.8647 11.0705 38.774C10.3616 37.7379 9.65263 36.6472 8.99821 35.502C3.76289 36.8653 0 39.3194 0 42.9732C0 48.7539 9.54356 51.8078 18.9781 51.8078C28.4125 51.8078 37.9561 48.7539 37.9561 42.9732C37.9561 39.3194 34.1932 36.8653 28.9579 35.502Z" fill="#CEDD80" />
      <path className="colorOne" d="M20.6689 41.4463C24.5408 35.7202 33.8117 21.3776 33.8117 14.888C33.8117 6.65322 27.1585 0 18.9783 0C10.7981 0 4.09033 6.65322 4.09033 14.888C4.09033 21.3776 13.4158 35.7202 17.2877 41.4463C18.1057 42.5915 19.8508 42.5915 20.6689 41.4463ZM12.0524 14.888C12.0524 11.0705 15.1609 7.96206 18.9783 7.96206C22.7957 7.96206 25.9042 11.0705 25.9042 14.888C25.9042 18.7054 22.7957 21.7593 18.9783 21.7593C15.1609 21.7593 12.0524 18.6508 12.0524 14.888Z" fill="#81C38E" />
    </Container>
  )
}

const Container = styled.svg`
  ${({ colorOne, colorTwo }) =>
    css`
      .colorOne {
        fill: rgb(var(--color${capitilise(colorOne)}));
      }
      .colorTwo {
        fill: rgb(var(--color${capitilise(colorTwo)}))
      }
    `
  } 
`

export default LocationPin
