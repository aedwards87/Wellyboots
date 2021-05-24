// Imported Packages
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

// Imported Components
import FrameMod from '../../Reusuable/Frame'
import RowMod from '../../Reusuable/Row'
import ColumnMod from '../../Reusuable/Column'
import TextHeading from '../../Reusuable/TextHeading';
import ButtonMod from '../../Reusuable/Button';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)``
export const Row = styled(RowMod)``
export const Column = styled(ColumnMod)``

// export const ImageCarousel = styled(Image)``
export const ImageCarousel = styled.img``

export const Title = styled(TextHeading)`
  span {
    > span:nth-child(1):after {
      background: rgba(var(--colorPink), .8);
    }
    > span:nth-child(2):after {
      background: rgba(var(--colorBlue), .8);
    }
    > span:nth-child(3):after {
      background: rgba(var(--colorYellow));
    }
    > span:nth-child(3) {
      span:after {
        background: rgba(var(--colorYellow));
      }
    }
  }
`

export const Text = styled.p``

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: var(--s3);
`

export const Button = styled(ButtonMod)``
