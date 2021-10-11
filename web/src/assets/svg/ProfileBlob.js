// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';

const ProfileBlob = ({ className, style, bgColor = 'dark', ...props }) => {
  return (
    <svg width="253" height="240" viewBox="0 0 253 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M110.155 9.65006L110.155 9.65017C155.962 25.2646 194.527 48.985 225.934 80.7831C241.43 96.472 248.754 111.752 248.857 126.664C248.96 141.581 241.846 157.023 226.563 173.048C195.681 205.425 159.462 225.414 117.836 233.151C97.2905 236.97 79.3223 234.858 63.7251 227.073C48.0969 219.272 34.4868 205.594 23.0126 185.662C0.17711 145.992 -1.99633 102.827 16.817 55.7593C26.2106 32.2582 38.6735 17.1828 53.8675 9.70336C69.0165 2.2461 87.6346 1.97108 110.155 9.65006Z" stroke="white" stroke-width="8" />
    </svg>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  svg {
    width: 100%;
    min-width: 700px;
  }
  .colorAboutUs {
      fill: rgb(var(--colorAboutUs))
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default ProfileBlob
