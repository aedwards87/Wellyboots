import React from 'react';
import { useToggle, useOnClickOutside } from '../../../hooks';
// import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { SmallScreen, LargeScreen } from '../../MediaQueries/MediaQueries';
import SideNav from './SideNav'

const SideNavIndex = ({ name, page, data, lineColor, fullscreen }) => {
  const [isOpen, toggle] = useToggle(false, fullscreen)
  const ref = useOnClickOutside(isOpen && toggle)

  console.log({data});

  return (
    <SideNav 
      aria-label="Secondary navigation"
      innerRef={ref}
      bgColor="light"
      isOpen={isOpen}
      fullscreen={fullscreen}
      className="sidenav"
    >
      <SideNav.InnerContainer isOpen={isOpen}>

        <SmallScreen>
          <SideNav.Frame isOpen={isOpen}>
            <SideNav.Button onClick={toggle}>
              <SideNav.Title 
                heading="h3" 
                color="grey" 
                small
              >
                {name} <SideNav.Arrow>▾</SideNav.Arrow>
              </SideNav.Title>
            </SideNav.Button>
            {isOpen && 
              <SideNav.List>
                {data.map(d => 
                  <SideNav.ListItem key={d.title}>
                    <SideNav.Link 
                      to={`/${page}/${d.slug.current}`} 
                      lineColor={d.lineColor || lineColor}
                      onClick={toggle}
                    >
                      {d.title} {console.log(d.lineColor, lineColor)}
                    </SideNav.Link>
                  </SideNav.ListItem>
                )}
              </SideNav.List>
            }
          </SideNav.Frame>
        </SmallScreen>

        <LargeScreen>
          <SideNav.Title 
            heading="h3" 
            color="grey" 
            small
          >
            {name}
          </SideNav.Title>
          <SideNav.List>
            {data.map(d => 
              <SideNav.ListItem key={d.title}>
                <SideNav.Link 
                  to={`/${page}/${d.slug.current}`} 
                  lineColor={d.lineColor || lineColor}
                >
                  {d.title} {console.log(d.lineColor || lineColor)}
                </SideNav.Link>
              </SideNav.ListItem>
            )}
          </SideNav.List>
        </LargeScreen>

      </SideNav.InnerContainer>
    </SideNav>
  )
};

export default SideNavIndex;
