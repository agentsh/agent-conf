import styled, {media} from '../common/styled';

export interface IContentWrapper {
  colorTop: string;
  colorMain: string;
  colorBottom: string;
  backgroundContent?: string;
}

const TriColorWrapper = styled.div<IContentWrapper>`
  background: linear-gradient(
    to bottom,
    ${props => props.colorTop} 0%,
    ${props => props.colorTop} 5%,
    ${props => props.colorMain} 5%,
    ${props => props.colorMain} 95%,
    ${props => props.colorBottom} 95%,
    ${props => props.colorBottom} 100%
  );
  ${media.md} {
    background: linear-gradient(
      to bottom,
      ${props => props.colorTop} 0px,
      ${props => props.colorTop} 150px,
      ${props => props.colorMain} 150px,
      ${props => props.colorMain} calc(100% - 150px),
      ${props => props.colorBottom} calc(100% - 150px),
      ${props => props.colorBottom} 100%
    );
  }
`;

const Container = styled.div<{background: string}>`
  width: 1024px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => (props.background ? props.background : 'none')};
`;

const ContentWrapper: React.SFC<IContentWrapper> = ({children, backgroundContent, ...rest}) => {
  return (
    <TriColorWrapper {...rest}>
      <Container background={backgroundContent}>{children}</Container>
    </TriColorWrapper>
  );
};
export default ContentWrapper;
