import React, {FunctionComponent} from 'react';
import styled from '../common/styled';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('/static/assets/sponsors.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Sponsor: FunctionComponent = () => <Wrapper />;

export default Sponsor;
