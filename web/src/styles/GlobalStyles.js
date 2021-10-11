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

const space = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 100, 128, 138, 154, 192, 256, 512]

const GlobalStyles = createGlobalStyle`

  :root {
    --colorLight: 255, 255, 255;
    --colorDark: 35, 42, 49;
    --colorDark: 18, 33, 53;
    /* 
      dynamically create variable colours from cms data
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

    --colorGray: 135, 150, 165;
    --colorGrey: var(--colorGray);
    --colorText: var(--colorDark);
    --colorAlert: var(--colorOrange);
    --colorError: 255, 71, 71;
    --colorSuccess: rgb(--colorGreen);
    --colorHighlight: var(--colorYellow);

    /* Measurements */
    --viewportWidthLarge: 800px;
    --desktopMaxWidth: 1200px;
    --navHeight: var(--s10);
    --dropdownMenuSpacing: var(--s6);
    --navSpacing: min(max(var(--s3),1.85vw), 27px);

    /* Static Page Themes */
    --colorPlayTheory: var(--colorOrange);
    --colorLocations: var(--colorGreen);
    --colorCirriculum: var(--colorBlue);
    --colorReviews: var(--colorYellow);
    --colorAboutUs: var(--colorPink);
    --colorContactUs: var(--colorDarkGreen);
    --colorPoliciesProcedures: var(--colorPurple);

    /* Elevations */
    --level1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --level2: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --level3: 0 4px 6px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06);
    --level4: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --level5: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --level6: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  }

  html {
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
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

`



export { GlobalStyles }
