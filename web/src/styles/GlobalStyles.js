// Imported packages
import { createGlobalStyle, css } from 'styled-components'
import 'normalize.css'
import { capitilise } from '../utils/helpers'

/* 
  /- Previous coding for filtering and mapping to create dynamic variables from cms data
  ${({ colors }) => {
  const filteredByColorKey = Object.fromEntries(
  Object.entries(colors).filter(([key, value]) => key.includes('color')))
  return (
    Object.entries(filteredByColorKey).map(([key, value]) =>
      css`
        --${key}: ${value.rgb.r}, ${value.rgb.g}, ${value.rgb.b};
      `
    )
  )
  }}
*/

const space = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192]

const GlobalStyles = createGlobalStyle`

  :root {
    --colorLight: 255, 255, 255;
    --colorDark: 35, 42, 49;
    --colorDark: 18, 33, 53;
    /* 
      dynamically create variable colours from cms data, they are:
          --colorYellow, --colorDarkPink, --colorDarkBlue, --colorPurple, 
          --colorPink, --colorBlue, --colorGreen, --colorDarkPurple, --colorOrange
    */
  ${({ brandColors }) => {
    return (
      brandColors.map(({ color, title }) =>
        css`
          --color${capitilise(title)}: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b};
        `
      )
    )
  }}

  --colorDarkBlue: 68, 119, 186;
  --colorDarkPurple: 132, 106, 174;
  /* --colorDarkPink: 205, 72, 85; */
  
    /* Space */
    --s0: ${space[0]}px;
    --s1: ${space[1]}px;
    --s2: ${space[2]}px;
    --s3: ${space[3]}px;
    --s4: ${space[4]}px;
    --s5: ${space[5]}px;
    --s6: ${space[6]}px;
    --s7: ${space[7]}px;
    --s8: ${space[8]}px;
    --s9: ${space[9]}px;
    --s10: ${space[10]}px;
    --s11: ${space[11]}px;
    --s12: ${space[12]}px;
    --s13: ${space[13]}px;
    --s14: ${space[14]}px;
    --s15: ${space[15]}px;
    --s16: ${space[16]}px;
    --s17: ${space[17]}px;
    --s18: ${space[18]}px;
    --s19: ${space[19]}px;
    --s20: ${space[20]}px;
    --s21: ${space[21]}px;
    --s22: ${space[22]}px;
    --s23: ${space[23]}px;
    --s24: ${space[24]}px;
    --s25: ${space[25]}px;

    --colorGray: 135, 150, 165;
    --colorGrey: var(--colorGray);
    --colorText: var(--colorDark);
    --colorAlert: var(--colorOrange);
    --colorError: 255, 71, 71;
    --colorSuccess: rgb(--colorGreen);
    --colorHighlight: var(--colorYellow);
    --colorShadow: 12, 43, 84;

    /* Measurements */
    --viewportWidthLarge: 800px;
    --desktopMaxWidth: 1200px;
    --navHeight: var(--s10);
    --dropdownMenuSpacing: var(--s6);
    --navSpacing: clamp(var(--s2), 1vw, var(--s4));

    /* Static Page Themes */
    --colorPlayTheory: var(--colorOrange);
    --colorLocations: var(--colorGreen);
    --colorCurriculum: var(--colorBlue);
    --colorReviews: var(--colorYellow);
    --colorAboutUs: var(--colorPink);
    --colorContactUs: var(--colorDarkGreen);
    --colorBookAVisit: var(--colorDarkBlue);
    --colorPoliciesProcedures: var(--colorPurple);

    /* Elevations */
    --level1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --level2: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --level3: 0 4px 6px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06);
    --level4: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --level5: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --level6: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --level7: 
      0.3px 0.5px 0.7px rgba(var(--colorDarkBlue) , 0.14),
      1.5px 2.9px 3.7px -0.4px rgba(var(--colorDarkBlue) , 0.14),
      2.7px 5.4px 6.8px -0.7px rgba(var(--colorDarkBlue) , 0.14),
      4.5px 8.9px 11.2px -1.1px rgba(var(--colorDarkBlue) , 0.14),
      7.1px 14.3px 18px -1.4px rgba(var(--colorDarkBlue) , 0.14),
      11.2px 22.3px 28.1px -1.8px rgba(var(--colorDarkBlue) , 0.14),
      0 25px 60px -12px rgba(var(--colorDarkBlue), 0.25);
    --level7-Reverse: 
      -0.3px 0.5px 0.7px rgba(var(--colorDarkBlue) , 0.14),
      -1.5px 2.9px 3.7px -0.4px rgba(var(--colorDarkBlue) , 0.14),
      -2.7px 5.4px 6.8px -0.7px rgba(var(--colorDarkBlue) , 0.14),
      -4.5px 8.9px 11.2px -1.1px rgba(var(--colorDarkBlue) , 0.14),
      -7.1px 14.3px 18px -1.4px rgba(var(--colorDarkBlue) , 0.14),
      -11.2px 22.3px 28.1px -1.8px rgba(var(--colorDarkBlue) , 0.14),
      -0 25px 60px -12px rgba(var(--colorDarkBlue), 0.25);
    --level8: 
      0px 4px 4.3px -4.5px rgba(var(--colorDarkBlue), 0.15),
      0px 6px 6.3px -6.5px rgba(var(--colorDarkBlue), 0.15),
      0px 8px 8.3px -8px rgba(var(--colorDarkBlue), 0.15),
      0px 10px 10.3px -10px rgba(var(--colorDarkBlue), 0.15);
    --level9: 
      0.3px 0.5px 0.7px rgba(var(--colorDarkBlue), 0.34),
      1.5px 2.9px 3.7px -0.4px rgba(var(--colorDarkBlue), 0.34),
      2.7px 5.4px 6.8px -0.7px rgba(var(--colorDarkBlue), 0.34),
      4.5px 8.9px 11.2px -1.1px rgba(var(--colorDarkBlue), 0.34),
      7.1px 14.3px 18px -1.4px rgba(var(--colorDarkBlue), 0.34),
      11.2px 22.3px 28.1px -1.8px rgba(var(--colorDarkBlue), 0.34),
      17px 33.9px 42.7px -2.1px rgba(var(--colorDarkBlue), 0.34),
      25px 50px 62.9px -2.5px rgba(var(--colorDarkBlue), 0.34);
    --level9-Reverse: 
      -0.3px 0.5px 0.7px rgba(var(--colorDarkBlue), 0.34),
      -1.5px 2.9px 3.7px -0.4px rgba(var(--colorDarkBlue), 0.34),
      -2.7px 5.4px 6.8px -0.7px rgba(var(--colorDarkBlue), 0.34),
      -4.5px 8.9px 11.2px -1.1px rgba(var(--colorDarkBlue), 0.34),
      -7.1px 14.3px 18px -1.4px rgba(var(--colorDarkBlue), 0.34),
      -11.2px 22.3px 28.1px -1.8px rgba(var(--colorDarkBlue), 0.34),
      -17px 33.9px 42.7px -2.1px rgba(var(--colorDarkBlue), 0.34),
      -25px 50px 62.9px -2.5px rgba(var(--colorDarkBlue), 0.34);
  }

  html {
    ${'' /* scroll-behavior: smooth; */}
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .smooth {
    scroll-behavior: smooth;
  }

  html, body, blockquote, figure, h1, h2, h3, h4, h5, h6, p, pre {
    margin: 0;
    padding: 0;
    *::selection {
      background: rgb(var(--colorHighlight));
      mix-blend-mode: multiply;
    }
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  button {
    background: transparent;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    border: 2px solid var(--colorDark);
    transition: all .3s ease;
    :hover {
      cursor: pointer;
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }

  button, a {
    outline-offset: 4px;
  }

  p + p {
    margin-top: 2rem;
  }

  .scrollBarMargin {
    margin-right: 15px;
  }
  
`



export { GlobalStyles }
