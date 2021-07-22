// Imported dependencies
import React from 'react'
// Imported dependencies
import styled from 'styled-components/macro';

const WaveLocationBottom = ({ className, ...props }) => {
  return (
    // <Container>
    //   <svg
    //     className={className}
    //     viewBox="0 0 1444 198"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     {...props}
    //   >
    //     <g clipPath="url(#clip0)">
    //       <rect width="1445" height="198" className="colorLight" />
    //       <path className="colorYellow" d="M1444.5 -704.269C1217 -756.77 1046.5 -579.101 758 -592.269C469.5 -605.437 238.647 -716.431 0 -660.79V192C368.926 238.728 677.751 -16.9429 992 8.23053C1206.82 25.4393 1326.39 46.2676 1444.5 25.5099V-704.269Z" />
    //     </g>
    //     <defs>
    //       <clipPath id="clip0">
    //         <rect width="1445" height="198" className="colorLight" />
    //       </clipPath>
    //     </defs>
    //   </svg>
    // </Container>
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect className="white" x="0.4" y="2" width="1444" height="198" />
        <g>
          <path className="colorYellow" d="M992,8.2c214.7,17.2,334.3,38,452.3,17.3V0H0.6v192C369.3,238.6,677.9-16.9,992,8.2z" />
        </g>
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: -60px;
  svg {
    min-width: 700px;
  }
  .colorYellow {
    fill: rgb(var(--colorYellow));
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveLocationBottom
