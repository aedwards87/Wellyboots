// Imported Packages
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Button as ButtonOrigin,
} from '../../Reusable';


// Styles
export const Container = styled.form`
  background-color: var(--sectionBgColor);
  display: grid;
  width: 100%;
  gap: var(--s4);
  > div {
    display: grid;
    gap: var(--s4);
    align-items: start;
  }
  > div {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }
  input, 
  textarea, 
  select {
    width: 100%;
    padding: var(--s3);
    border-radius: var(--s1);
    border: none;
    background: rgba(var(--colorPurple), .25);
  }
  input:focus, 
  select:focus, 
  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(var(--colorDarkPurple));
  }
  textarea {
    resize: vertical; 
    min-height: 150px;
  }
  button {
    margin-top: var(--s2);
  }
  button:disabled {
    background: rgb(var(--colorGrey));
    border: 2px solid rgb(var(--colorGrey));
    :hover {
      filter: none;
      box-shadow: none;
      transform: none;
      cursor: auto;
    }
  }
`
export const Field = styled.label`
  position: relative;
  display: grid;
  > *[aria-invalid=true],
  > *[aria-invalid=true]:focus {
    box-shadow: 0 0 0 2px rgb(var(--colorError));
  }
  > *[aria-invalid=true] + div {
    display: flex;
    padding-left: calc(var(--s3) + 2px);
    padding-right: calc(var(--s3) + 2px);
    padding-top: var(--s2);
    svg {
      width: 20px;
      height: 100%;
    }
  }
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)`
  ${({invalid}) => !invalid && css`
    font-size: var(--s3);
    padding-left: calc(var(--s3) + 2px);
    padding-right: calc(var(--s3) + 2px);
    padding-bottom: var(--s1);
  `}
  ${({invalid}) => invalid && css`
    font-size: var(--fontSizeSmallest);
    color: rgb(var(--colorError));
    padding-left: calc(var(--s2));
    padding-top: 2px;
  `}
`
export const SubmitButton = styled.input``
export const TextArea = styled.textarea`
  resize: vertical;
`
export const Link = styled(LinkOrigin)``
export const Button = styled(ButtonOrigin)``
