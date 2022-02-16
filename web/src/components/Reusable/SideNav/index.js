import React from 'react';
import { useToggle, useOnClickOutside } from '../../../hooks';
// import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { SmallScreen, LargeScreen } from '../../MediaQueries/MediaQueries';
import SideNav from './SideNav'

const SideNavIndex = ({ name, data, fullscreen }) => {
  const [isOpen, toggle] = useToggle(false, fullscreen)
  const ref = useOnClickOutside(isOpen && toggle)
  console.log({fullscreen});

  return (
    <SideNav 
      aria-label="Secondary navigation"
      innerRef={ref}
      bgColor="light"
      isOpen={isOpen}
      fullscreen={fullscreen}
      className="sidenav"
    >
      <SideNav.InnerContainer>

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
                {data.map(({ title, slug }) => 
                  <SideNav.ListItem key={title}>
                    <SideNav.Link 
                      to={`/policies-and-procedures/${slug.current}`} 
                      lineColor="purple"
                    >
                      {title}
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
              {data.map(({ title, slug }) => 
                <SideNav.ListItem key={title}>
                  <SideNav.Link 
                    to={`/policies-and-procedures/${slug.current}`} 
                    lineColor="purple"
                  >
                    {title}
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
