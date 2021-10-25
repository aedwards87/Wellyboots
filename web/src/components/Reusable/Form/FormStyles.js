// Imported Packages
import styled, { css } from 'styled-components/macro';
import { default as GatsbyImage } from 'gatsby-image'
// Imported Components
import {
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../Reusable';


// Styles
export const Container = styled.form`
  background-color: var(--sectionBgColor);
  display: grid;
`
export const FormField = styled.label`
  display: grid;
`
export const Field = styled.label``

export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Label = styled.label``
export const Input = styled.input``
export const TextArea = styled.textarea``
export const Link = styled(LinkOrigin)``
