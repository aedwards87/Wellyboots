// Imported dependencies
import styled from 'styled-components/macro';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import WaveLocationTop from '../../../assets/svg/Waves/WaveLocationTop';
import WaveLocationBottom from '../../../assets/svg/Waves/WaveLocationBottom';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)``
export const Row = styled(RowMod)``
export const Column = styled(ColumnMod)``
export const Slider = styled.div`
  width: 110%;
  margin-left: -5%;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  height: 120%;
  a {
    flex: 0 0 auto; 
  }
`
export const Title = styled(TextHeading)``
export const Text = styled.p``
export const SVGDividerTop = styled(WaveLocationTop)``
export const SVGDividerBottom = styled(WaveLocationBottom)``