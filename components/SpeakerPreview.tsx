import React, {FunctionComponent} from 'react';
import styled from '../common/styled';
import {SpeakerType} from '../common/types';
import LazyLoad from 'react-lazyload';

const SmallWrapper = styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  width: 100%;
  vertical-align: center;
  margin-top: ${props => props.theme.spacing}px;
  margin-bottom: ${props => props.theme.spacing}px;
  img {
    width: 40px;
    border-radius: 50%;
    height: 40px;
  }
`;

const SpeakerName = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  padding: 0 20px;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`;
export interface SpeakerPreviewProps {
  speaker: SpeakerType;
  small: boolean;
}

const SpeakerPreview: FunctionComponent<SpeakerPreviewProps> = ({speaker: {name, foto}}): JSX.Element => {
  return (
    <SmallWrapper>
      <LazyLoad height={60} offset={100}>
        <img src={foto.url} alt={foto.alt} />
      </LazyLoad>
      <SpeakerName>{name}</SpeakerName>
    </SmallWrapper>
  );
};

SpeakerPreview.defaultProps = {};

export default SpeakerPreview;
