import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  :root {
    /* Family */
    --fontPrimaryFamily: 'Ubuntu', Helvetica, Arial, sans-serif;
    --fontSecondaryFamily: 'Delius', Helvetica, Arial, sans-serif;

    /* Size */
    --fontSizeBase: 10px;
    --fontSizeBody: 1.6rem;
    --fontSizeNav: 1.5rem;
    --fontSizeFooter: 1.5rem;
    --fontSizeHero: calc(var(--fontSizeBody) * 3.213);
    --fontSizeh1: calc(var(--fontSizeBody) * 2.441);
    --fontSizeh2XL: calc(var(--fontSizeBody) * 2.441);
    --fontSizeh2: calc(var(--fontSizeBody) * 1.953);
    --fontSizeh3: calc(var(--fontSizeBody) * 1.563);
    --fontSizeh4: calc(var(--fontSizeBody) * 1.25);
    --fontSizeh5: calc(var(--fontSizeBody) * 1);
    --fontSizeLarge: 2rem;
    --fontSizeMedium: 1.8rem;
    --fontSizeSmall: 1.4rem;
    --fontSizeSmallest: 1.2rem;

    /* Weight */
    --fontWeightLight: 300;
    --fontWeightNormal: 400;
    --fontWeightMedium: 500;
    --fontWeightBold: 700;

    /* Line height */
    --headingLineHeight: 1.3;
    --textLineHeight: 1.5;
    
    /* Coupled font styles min(max(38px, 12vw), 80px)*/
    --heroFont:  min(max(35px, 9vw), var(--fontSizeHero)) var(--fontSecondaryFamily);
    --ctaFont: var(--fontWeightMedium) calc(var(--fontSizeBody) * 2) var(--fontFamily);
    --inputFont: var(--fontWeightNormal) var(--fontSizeBody * 1.8) var(--fontFamily);


    font-size: var(--fontSizeBase);
  }

  @media(min-width: 420px) {
    :root {
      --fontSizeBody: 1.8rem;
      --fontSizeLarge: 2.2rem;
      --fontSizeMedium: 2rem;
      --fontSizeSmall: 1.6rem;
      --fontSizeSmallest: 1.4rem;
    }
  }

  @media(min-width: 980px) {
    :root {
      --heroFont:  min(max(39px, 4.1vw), var(--fontSizeHero)) var(--fontSecondaryFamily);
    }
  }

  html {
    font-family: var(--fontPrimaryFamily);
    font-size: var(--fontSizeBody);
    color: rgb(var(--colorText));
  }

  body {
    font-size: var(--fontSizeBody);
  }

  p, a, li, span, td, blockquote, cite {
    letter-spacing: 0.3px;
    line-height: var(--textLineHeight);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: var(--headingLineHeight);
    letter-spacing: 0.3px;
    color: rgb(var(--colorText));
    > span {
      line-height: var(--headingLineHeight);
    }
  }

  h1 {
    font-family: var(--fontSecondaryFamily);
    font-size: var(--fontSizeh1);
  }

  h2 {
    font-family: var(--fontSecondaryFamily);
    font-size: var(--fontSizeh2);
    font-weight: var(--fontWeightBold);
  }

  h3 {
    font-size: var(--fontSizeh3);
    font-weight: var(--fontWeightBold);
  }

  h4 {
    font-size: var(--fontSizeh4);
    font-weight: var(--fontWeightBold);
  }

  h5 {
    font-size: var(--fontSizeh5);
    font-weight: var(--fontWeightBold);
  }

  a {
    color: (var(--colorPrimaryTwo));
    text-decoration-skip-ink: none; 
  }

  button {
    font-size: calc(var(--fontSizeBody) + .2rem);
  }

  mark, .mark {
    background: var(--colorHighlight, yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .textCenter {
    text-align: center;
  }
`;

export { Typography };
