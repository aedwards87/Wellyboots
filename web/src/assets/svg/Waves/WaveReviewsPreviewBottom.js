// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';

const WaveReviewsPreviewTop = ({ className, width = "1444", height = "128", ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
      >
        <rect y="4" className="colorLight" width="1444" height="160" />
        <g>
          <path className="colorDarkPurple" d="M1443.8,28l0.2-28H0v26.5C398.1-60.7,546.1,156.3,770.1,159h22.8c227.3-2.9,285.6-92.1,555.3-131 C1380.4,23.4,1412.4,23.8,1443.8,28z" />
        </g>
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: -20px;
  position: relative;
  top: 1px;
  svg {
    min-width: 700px;
    width: 100%;
  }
  .colorDarkPurple {
    fill: rgb(var(--colorDarkPurple));
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveReviewsPreviewTop
