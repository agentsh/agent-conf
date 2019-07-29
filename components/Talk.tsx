import {RichText} from 'prismic-reactjs';
import React, {FunctionComponent} from 'react';

import {Col, Row} from '../common/Grid';
import {RichTextWrapper, SessionTitle, Time} from '../common/typography';
import {TalkTypeType, TalkType} from '../common/types';
import SpeakerPreview from './SpeakerPreview';
import styled from '../common/styled';

const TalkWrapper = styled.div<{type: TalkTypeType}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({theme}) => theme.spacing}px 0;
  h3 {
    margin-top: 0px;
  }
`;

const TalkRow = styled(Row)<{type: string}>`
  width: 100%;
  background: ${({theme, type}) => (type === 'Break' ? theme.lightGrey : theme.white)};
  color: ${({theme, type}) => (type === 'Break' ? theme.black : theme.black)};
  font-style: ${({type}) => (type === 'Break' ? 'oblique' : 'normal')};
  border-bottom: 2px solid ${({theme, type}) => (type === 'Break' ? theme.black : theme.lightGrey)};
  text-transform: ${({type}) => (type === 'Break' ? 'uppercase' : 'normal')};
  margin: 0;
`;

const VideoLink = styled.a`
  text-decoration: none;
  padding-top: 25px;
  display: block;
  float: right;
  font-size: 30px;
  font-weight: bold;
  color: ${({theme}) => theme.primaryColor};
`;
export interface TalkProps {
  talk: TalkType;
  showTimes: boolean;
}
const Talk: FunctionComponent<TalkProps> = ({
  talk: {start_time, talk_title, type, description, speaker, speaker_2, video},
}): JSX.Element => {
  const showDesc = type !== 'Break' && type !== 'Unconference';
  return (
    <TalkRow valign="center" type={type}>
      <Col size={1 / 5}>
        <Time>{start_time}</Time>
      </Col>
      <Col size={4 / 5}>
        <TalkWrapper type={type}>
          <SessionTitle>
            {type === 'Lightning Talk' && <span>⚡ </span>}
            {type === 'Keynote' && <span>Keynote - </span>}
            {talk_title}
          </SessionTitle>
          {speaker && (
            <Row>
              <Col size={{xs: 1, sm: 1, md: 0.4, lg: 0.4}}>
                <SpeakerPreview small={true} speaker={speaker} />
              </Col>
              <Col size={{xs: 1, sm: 1, md: 0.4, lg: 0.4}}>
                {speaker_2 && <SpeakerPreview small={true} speaker={speaker_2} />}
              </Col>

              {video && (
                <Col size={{xs: 1, sm: 1, md: 0.2, lg: 0.2}}>
                  <VideoLink href={video.url} target="blank" rel="noopener noreferrer">
                    ▶
                  </VideoLink>
                </Col>
              )}
            </Row>
          )}
          {showDesc === true && description && <RichTextWrapper>{RichText.render(description)}</RichTextWrapper>}
        </TalkWrapper>
      </Col>
    </TalkRow>
  );
};

Talk.defaultProps = {};

export default Talk;
