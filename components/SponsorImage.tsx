import styled, {media} from '../common/styled';

const SponsorImage = styled(({smaller, hasPadding, ...rest}) => <img {...rest} />)`
  display: block;
  padding: ${({theme, hasPadding}) => (hasPadding ? theme.spacing : 0)}px 0;
  width: 100%;
  ${media.md} {
    width: ${({smaller}) => (smaller ? 70 : 100)}%;
    padding: ${({hasPadding, theme}) => (hasPadding ? 2 * theme.spacing : 0)}px 0;
  }
`;

export default SponsorImage;
