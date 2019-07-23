import React, {FunctionComponent} from 'react';
import styled, {keyframes, media} from '../common/styled';

import {RichText} from 'prismic-reactjs';
import {HeaderH2css, HeaderH1css, Pcss} from '../common/typography';

export type PrismicContent = {};

export interface IImageHeaderProps {
  headerContent: PrismicContent;
  image?: string;
}
const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div<{image: string}>`
  background: url('${props => props.image}');
  background-size:cover;
  color:white;
  min-height: 100vh;

  ${media.md}{
      height: 700px;
      min-height: 700px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .8;
    background-image: linear-gradient(to right,#000,#44883e, #000);
    background-size: 100% 100%;
}

  
`;

const slideInFromRight = keyframes`
  from {
    filter: alpha(opacity=50);
    opacity: 0.5;
    transform: rotate(1deg) translate(-50%,-50%);
  }

  to {
    filter: alpha(opacity=100);
    opacity: 1;
    transform:  rotate(0) translate(-50%,-50%);
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: 1.5s ease-out 1 ${slideInFromRight};
  padding: 15px;
  h1 {
    ${HeaderH1css}
  }
  h2,
  h3 {
    ${HeaderH2css}
  }
  p {
    ${Pcss}
  }
`;

const ImageHeader: FunctionComponent<IImageHeaderProps> = ({image, headerContent}): JSX.Element => {
  console.log(headerContent);
  return (
    <Container>
      <Wrapper image={image}>
        <Content>{RichText.render(headerContent)}</Content>
      </Wrapper>
    </Container>
  );
};

ImageHeader.defaultProps = {
  image: 'https://www.worker.sh/static/assets/og.jpg',
};

export default ImageHeader;
