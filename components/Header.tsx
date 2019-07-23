import {withRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import {Container, Spaced} from '../common/Grid';
import styled, {media} from '../common/styled';
import {ImageType} from '../common/types';

const Wrapper = styled.div<{backgroundImage?: ImageType}>`
  width: 100%;
  background: ${({theme}) => theme.secondaryColor};
  background-image: ${({backgroundImage}) => (backgroundImage ? `url(${backgroundImage.url})` : '')};
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: black;
  height: 100vh;
  position: relative;
  &:after {
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, ${({theme}) => theme.black} 0%, ${({theme}) => theme.white}40 100%);
    height: 100%;
    z-index: 1;
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
  width: 1024%;
  max-width: 90%;
  text-align: left;
  transform: translate(0, 0);
  padding: 15px;
`;

const Logo = styled.img`
  width: 100px;
  position: absolute;
  left: 80px;
  top: 20px;
  cursor: pointer;
  ${media.lg} {
    left: 80px;
    top: 40px;
  }
`;
export interface HeaderProps {
  router: any;
  backgroundImage?: ImageType;
}
const Header: FunctionComponent<HeaderProps> = ({children, router, backgroundImage}): JSX.Element => {
  const handleClick = e => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <Wrapper backgroundImage={backgroundImage}>
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
