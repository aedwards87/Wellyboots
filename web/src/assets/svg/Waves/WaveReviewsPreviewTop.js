// Imported dependencies
import React from 'react'
// Imported dependencies
import styled from 'styled-components/macro';

const WaveReviewsPreviewTop = ({ className, ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect className="colorLight" width="1444" height="117" />
        <path d="M1444,112.5c-62.9,8-139.7-0.2-233.9-33.2c-429.9-150.7-668.3-29.8-859.3,0C197.4,103.3,82.1,78.5,0,50.2V120h1444V112.5z" className="colorDarkPurple"
        />
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  top: -1px;
  > svg {
    min-width: 700px;
  }
  .colorDarkPurple {
    fill: rgb(var(--colorDarkPurple));
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveReviewsPreviewTop
