import styled, {css, media} from './styled';

export const HeaderH1css = css`
  font-size: 25px;
  text-transform: uppercase;
  ${media.md} {
    font-size: 40px;
  }
`;

export const HeaderH2css = css`
  font-size: 18px;
  font-weight: normal;
  ${media.md} {
    font-size: 20px;
  }
`;

export const H1css = css`
  font-size: 60px;
  line-height: 1;
  margin: 0;
  padding: 0;
  letter-spacing: -5px;
  ${media.md} {
    font-size: 160px;
    letter-spacing: -10px;
  }
`;

export const H2css = css`
  font-size: 35px;
  line-height: 1;
  margin: 0;
  padding: 0;
  ${media.md} {
    font-size: 85px;
  }
`;

export const H2Smallcss = css`
  font-size: 25px;
  line-height: 1;
  margin: 0;
  padding: 0;
  ${media.md} {
    font-size: 60px;
  }
`;

export const H3css = css`
  font-size: 25px;
  font-weight: normal;
  ${media.md} {
    font-size: 45px;
  }
  &:after {
    background: none repeat scroll 0 0 #000;
    bottom: -10px;
    content: '';
    display: block;
    height: 5px;
    position: relative;
    width: 100px;
  }
`;

export const H1 = styled.h1<{color: string}>`
  ${H1css}
  color: ${props => props.color};
`;

export const H1Small = styled.h1<{color: string}>`
  font-size: 60px;
  line-height: 1;
  margin: 0;
  padding: 0;
  ${media.md} {
    font-size: 90px;
  }
  color: ${props => props.color};
`;
export const H2 = styled.h2<{color: string}>`
  ${H2css}
  color: ${props => props.color};
`;

export const H2Small = styled.h2<{color: string}>`
  font-size: 25px;
  line-height: 1;
  margin: 0;
  padding: 0;
  color: ${({color}) => (color ? color : '')};
  ${media.md} {
    font-size: 60px;
  }
`;

export const H3 = styled.h3<{color: string}>`
  ${H3css}
  color: ${props => props.color};
`;

export const Pcss = css`
  line-height: 1.4em;
  margin: 0;
`;

export const Acss = css`
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const A = styled.a`
  ${Acss};
`;

export const RichTextWrapper = styled.div`
  h1 {
    ${H1css}
  }
  h2 {
    ${H2Smallcss}
    border-left: 5px solid;
    margin-top: ${props => props.theme.spacing * 2.5}px;
    margin-bottom: ${props => props.theme.spacing * 1}px;
    padding-left: ${props => props.theme.spacing * 1}px;
    margin-left: -${props => props.theme.spacing * 1.5}px;
    ${media.md} {
      margin-top: ${props => props.theme.spacing * 5}px;
      margin-bottom: ${props => props.theme.spacing * 2}px;
      padding-left: ${props => props.theme.spacing * 2}px;
      margin-left: -${props => props.theme.spacing * 3}px;
    }
  }
  h3 {
    ${H3css}
  }
  p {
    ${Pcss};
    &:empty {
      height: 1.25em;
      line-height: 1.25;
    }
  }
  a,
  a:hover {
    ${Acss};
  }
`;

export const Time = styled.div`
  font-size: 22px;
`;

export const FontBig = styled.div`
  padding: ${props => props.theme.spacing}px 0;
  font-size: 18px;
  font-weight: normal;
  ${media.md} {
    font-size: 20px;
  }
`;

export const SessionTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  ${media.md} {
    font-size: 22px;
  }
`;
