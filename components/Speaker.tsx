import {FaTwitter} from 'react-icons/fa';
import React from 'react';

import {SpeakerType} from '../common/types';
import styled, {theme} from '../common/styled';

import LazyLoad from 'react-lazyload';
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 15px 15px 60px 15px;
  float: left;
  height: auto;
  width: 100%;
  color: #f2f2f2;
  img {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 30px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.primaryColor};
  margin-bottom: ${props => props.theme.spacing}px;
`;

const Text = styled.div`
  margin-bottom: ${props => props.theme.spacing}px;
`;
const Twitter = styled.div`
  position: absolute;
  right: 50px;
  top: 180px;
`;

export interface SpeakerProps {
  speaker: SpeakerType;
}
const Speaker: React.FunctionComponent<SpeakerProps> = ({speaker}) => (
  <Wrapper>
    <LazyLoad height={200} offset={100}>
      <img src={speaker.foto.url} alt={speaker.name} />
    </LazyLoad>
    <Name>{speaker.name}</Name>
    <Text>{speaker.company}</Text>
    {speaker.twitter && speaker.twitter !== '' && (
      <Twitter>
        <a href={`https://www.twitter.com/${speaker.twitter}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter color={theme.white} size={40} />
        </a>
      </Twitter>
    )}
  </Wrapper>
);

export default Speaker;
