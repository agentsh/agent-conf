import {withRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import {Container, Spaced, Col} from '../common/Grid';
import styled, {media} from '../common/styled';
import {ImageType} from '../common/types';
import {H1} from '../common/typography';

const Wrapper = styled.div<{backgroundImage?: ImageType; fullHeight: boolean}>`
  width: 100%;
  background: ${({theme}) => theme.black};
  background-image: ${({backgroundImage}) => (backgroundImage ? `url(${backgroundImage.url})` : '')};
  background-attachment: fixed;
  background-size: cover;
  background-position: left;
  color: black;
  height: 800px;
  max-height: ${({fullHeight}) => (fullHeight ? 100 : 60)}vh;
  position: relative;
  &:after {
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, ${({theme}) => theme.black} 0%, ${({theme}) => theme.white}10 100%);
    height: 100%;
    z-index: 1;
  }
  ${media.md} {
    background-position: center;
  }
`;
const WrapperContent = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 1024px;
  max-width: 100%;
  text-align: left;
  /* padding: 15px; */
`;

const Logo = styled.img`
  width: 50px;
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
  ${media.md} {
    width: 100px;
    left: 80px;
    top: 40px;
  }
  ${media.lg} {
    left: 80px;
    top: 40px;
  }
`;
export const InfoText = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.white};
  ${media.md} {
    display: block;
    font-size: 18px;
    margin-bottom: 15px;
    margin-left: 25px;
  }
`;

export const DateInfo = styled.div`
  font-family: Teko;
  font-size: 35px;
  line-height: 40px;
  margin-top: 40px;
  ${media.md} {
    font-size: 45px !important;
    line-height: 60px;
  }
`;
export const LocationInfo = styled.div`
  font-family: Teko;
  text-transform: uppercase;
  margin-bottom: 30px;
  ${media.md} {
    font-size: 35px !important;
    margin-bottom: 0;
  }
`;
export const Slogan = styled.div`
  display: none;
  ${media.md} {
    font-size: 35px;
    letter-spacing: 2px;
    font-family: Teko;
    display: block;
  }
`;
export const Headline = styled(H1)`
  font-size: 60px !important;
  line-height: 60px !important;
  margin-bottom: 20px;
  ${media.md} {
    font-size: 100px !important;
    line-height: 110px !important;
  }
`;
export const TicketCol = styled(Col)`
  text-align: center;
  ${media.md} {
    text-align: right;
  }
`;
export interface HeaderProps {
  router: any;
  backgroundImage?: ImageType;
  fullHeight?: boolean;
}
const Header: FunctionComponent<HeaderProps> = ({
  children,
  router,
  backgroundImage,
  fullHeight = true,
}): JSX.Element => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <Wrapper backgroundImage={backgroundImage} fullHeight={fullHeight}>
      <WrapperContent>
        <Logo src={'/static/assets/logo.png'} onClick={handleClick} />
        <Spaced multipleBottom={9} multipleTop={9}>
          <Container>
            <Content>{children}</Content>
          </Container>
        </Spaced>
      </WrapperContent>
    </Wrapper>
  );
};

export default withRouter(Header);
