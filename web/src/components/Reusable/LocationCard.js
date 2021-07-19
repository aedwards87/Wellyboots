// Imported dependencies
import React from 'react'
// Imported components
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
// Imported hooks
import { useCompanyLocationsQuery } from '../../hooks';
import { camalise, capitilise } from '../../utils/helpers';


const LocationCard = ({ className, children, style, show = false, name = "St", ...props }) => {
  const data = useCompanyLocationsQuery()
  const location = data.locations.nodes.filter(l => l.name.includes(name))
  const colors = location[0].subBrandColors.map(color => color.title)
  return (
    // <div>
    <Container
      className={className}
      to="/"
      style={style, {}}
      {...props}
    >
      <Hero colors={colors}>
        {!show ?
          <SVGContainer dangerouslySetInnerHTML={{ __html: location[0].subBrandLogo }} />
          :
          <img />
        }
      </Hero>
      <Footer>
        <span>Roodlands Farm</span>
      </Footer>
    </Container>
    // </div> 
  )
}

const Hero = styled.div`
  :before, :after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    background: ${({ colors }) => `rgb(var(--color${capitilise(colors[0])}))`};
  }
  :before {
    top: 0;
    left: 0;
    height: 212px;
  };
  :after {
    top: 212px;
    height: var(--s2);
    filter: brightness(70%);
  }
`
const Footer = styled.div`
  background: var(--colorLight);
  display: grid;
  justify-content: center;
  align-content: center;
`
const Container = styled(Link)`
  width: 310px;
  height: 365px;
  position: relative;
  display: grid;
  grid-template-rows: 265px 1fr;
  overflow: hidden;
  background: rgb(var(--colorLight));
  border-radius: 10px;
  text-decoration: none;
  box-shadow: var(--level3);
  transition: all .3s ease;
  z-index: 3;
  :hover {
    transform: translateY(-5%) scale(1.02);
    box-shadow: var(--level5);
  }
  img {
    height: 265px;
    width: 100%;
  }
  span {
    font-size: var(--fontSizeLarge);
    font-weight: var(--fontWeightMedium);
  }
  ${Hero} {

  }
  ${Footer} {

  }
`

const SVGContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: end;
`



export default LocationCard
