import React, {FunctionComponent} from 'react';
import styled from '../common/styled';
import Link from 'next/link';

const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: url(static/assets/logo.svg) center center no-repeat;
  background-size: contain;
  display: block;
  margin: 0 auto;
`;

const Logo: FunctionComponent = () => (
  <Link href="/">
    <a>
      <LogoWrapper />
    </a>
  </Link>
);

export default Logo;
