// Imported dependencies
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// Imported dependencies
import LocationPin from '../assets/svg/LocationPin';
import { TextParagraph } from './Reusable';
// Imported helpers
import { capitilise } from '../utils/helpers';

// Component
function Map({ children, zoom = 12, center, width, innerRef, address, colors, ...props }) {
  const [isVisible, setIsVisible] = useState(false)
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  })

  const handleClick = () => setIsVisible(old => !old)

  // Positions the InfoWindow slightly higher so you can see the pin
  const position = {
    lat: center.lat + 0.0065,
    lng: center.lng
  }

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps..."
  return (
    <Container width={width} ref={innerRef} >
      <GoogleMap
        center={center}
        defaultCenter={center}
        zoom={zoom}
        {...props}
      >
        <Marker position={center} onClick={() => handleClick()}>
          {isVisible &&
            <InfoWindow
              onCloseClick={() => handleClick()}
              position={position}
            >
              <TextParagraph>
                <ExternalLink
                  href={`https://maps.google.com/maps?q=${center.lat},${center.lng}`}
                  title="Open this area in Google Maps (opens a new window)."
                  rel="noopener noreferrer"
                  target="blank"
                  colors={colors}
                  infoWindow
                >
                  Open this area in Google Maps (opens a new window).
                </ExternalLink>
              </TextParagraph>
            </InfoWindow>
          }
        </Marker>

      </GoogleMap>
      <ExternalLink
        href={`https://maps.google.com/maps?q=${center.lat},${center.lng}`}
        title="Open this area in Google Maps (opens a new window)."
        rel="noopener noreferrer"
        target="blank"
        colors={colors}
      >
        <LocationPin colorOne={colors[1].title} colorTwo={colors[0].title} />
        <TextParagraph>
          <strong>{`${address.nameOrNumber}`}, </strong>
          {`${address.addressLineOne}, ${address.townOrCity}, ${address.county}, ${address.postCode} `}
        </TextParagraph>
      </ExternalLink>
    </Container>
  )
}

// Styles
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgb(var(--colorLight));
  box-shadow: var(--level4),var(--level4);
  border: 10px solid rgb(var(--colorLight));
  border-radius: var(--s3);
  display: grid;
  grid-template-rows: 1fr auto;
  > div:first-of-type {
    width: 100%;
    height: 100%;
    border-radius: var(--s2);
  }
  strong {
    display: block;
  }
  @media (min-width: 1111px) {
    top: -140px;
    max-width: 520px;
  }
`

const ExternalLink = styled.a`
  ${({ infoWindow }) => !infoWindow && css`
    display: grid;
    padding: var(--s5) calc(var(--s5) - 14px) calc(var(--s5) - 10px);
    column-gap: var(--s4);
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    text-decoration: none;
  `}
  ${({ colors }) => {
    const darkColor = colors.filter(c => c.title.includes("Dark"))
    if (colors) return (
      css`
        &, p { transition: color .3s ease; }
        :hover, 
        :focus-visible,
        :hover p, 
        :focus-visible p {
          color: rgb(var(--color${capitilise(darkColor[0].title || colors[0])}));
        }
      `
    )
  }}
`


export default React.memo(Map)
