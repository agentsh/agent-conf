import styled, {css, media} from './styled';

export const H1css = css`
  font-weight: 100;
  text-transform: uppercase;
  margin: 40px 0 15px 0;
  font-size: 30px;
  line-height: 40px;
  font-family: Teko;
  line-height: 1;
  margin: 0;
  padding: 0;
  ${media.md} {
    font-size: 50px;
    line-height: 70px;
  }
`;

export const H2css = css`
  font-weight: 100;
  text-transform: uppercase;
  margin: 40px 0 15px 0;
  font-family: Teko;
  font-size: 26px;
  line-height: 1;
  margin: 0;
  padding: 0;
  ${media.md} {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const H3css = css`
  font-weight: 100;
  text-transform: uppercase;
  margin: 40px 0 15px 0;
  font-family: Teko;
  font-size: 26px;
  font-weight: normal;
  ${media.md} {
    font-size: 40px;
    line-height: 50px;
  }

  /* &:after {
    background: none repeat scroll 0 0 #000;
    bottom: -10px;
    content: '';
    display: block;
    height: 5px;
    position: relative;
    width: 100px;
  } */
`;

export const H1 = styled.h1<{color: string}>`
  ${H1css}
  color: ${props => props.color};
`;

export const H2 = styled.h2<{color: string}>`
  ${H2css}
  color: ${props => props.color};
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
    ${H2css}
    /* border-left: 5px solid;
    margin-top: ${props => props.theme.spacing * 2.5}px;
    margin-bottom: ${props => props.theme.spacing * 1}px;
    padding-left: ${props => props.theme.spacing * 1}px;
    margin-left: -${props => props.theme.spacing * 1.5}px;
    ${media.md} {
      margin-top: ${props => props.theme.spacing * 5}px;
      margin-bottom: ${props => props.theme.spacing * 2}px;
      padding-left: ${props => props.theme.spacing * 2}px;
      margin-left: -${props => props.theme.spacing * 3}px;
    } */
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
  div[data-oembed-type="video"]{
    overflow-x:hidden;
    ${media.md} {
    width: 50%;
    float:left;
    margin-bottom:30px;
    iframe{
      display: block;
      margin:0 auto;
      width:100%;
    }
  }
  }
`;

export const Time = styled.div`
  font-size: 16px;
  ${media.md} {
    font-size: 22px;
  }
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
  font-size: 16px;
  font-weight: bold;
  ${media.md} {
    font-size: 22px;
  }
`;
