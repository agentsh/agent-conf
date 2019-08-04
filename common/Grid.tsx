//@ts-ignore
import Grid from 'styled-components-grid';
import styled, {media} from './styled';

export const Row = styled(Grid)`
  margin-left: -${({theme}) => theme.spacing}px;
  margin-right: -${({theme}) => theme.spacing}px;
  width: 100%;
`;

export const Col = styled(Grid.Unit)`
  padding-right: ${props => props.theme.spacing}px;
  padding-left: ${props => props.theme.spacing}px;
`;

export const RowFH = styled(Row)`
  height: 100%;
`;

export const ColFH = styled(Col)`
  max-height: 100%;
  overflow-y: scroll;
`;

export const ColR = styled(Col)`
  text-align: right;
`;

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 1024px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 100%;
`;

export const Spaced = styled.div<{multipleTop: number; multipleBottom: number}>`
  margin-top: ${props => props.theme.spacing * props.multipleTop}px;
  margin-bottom: ${props => props.theme.spacing * props.multipleBottom}px;
  display: block;
  float: left;
  height: auto;
  width: 100%;

  ${media.md} {
    margin-top: ${props => props.theme.spacing * props.multipleTop}px;
    margin-bottom: ${props => props.theme.spacing * props.multipleBottom}px;
  }
`;

export const VCenterWrapper = styled.div`
  flex: 1;
  align-self: center;
`;

export const VCenterWrapperAbsolute = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Padded = styled.div<{multiple: number}>`
  display: block;
  float: left;
  height: auto;
  width: 100%;
  padding-left: ${({multiple, theme}) => multiple * 0.3 * theme.spacing}px;
  ${media.md} {
    padding-left: ${({multiple, theme}) => multiple * theme.spacing}px;
  }
`;
