import { RichText } from 'prismic-reactjs';
import React, { FunctionComponent } from 'react';

import { Col, Row } from '../common/Grid';
import { RichTextWrapper, SessionTitle, Time } from '../common/typography';
import { TalkTypeType, TalkType } from '../common/types';
import SpeakerPreview from './SpeakerPreview';
import styled from '../common/styled';
import { FaYoutube } from 'react-icons/fa';

const TalkWrapper = styled.div<{ type: TalkTypeType }>``;

const TalkRow = styled(Row)<{ type: string }>`
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.white};
  margin-bottom: ${({ theme }) => theme.spacing * 3}px;
`;

const VideoLink = styled.a`
  text-decoration: none;
  padding-top: 25px;
  display: block;
  float: right;
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
`;
export interface TalkProps {
  talk: TalkType;
}
const Video: FunctionComponent<TalkProps> = ({
  talk: { talk_title, type, description, speaker, speaker_2, video },
}): JSX.Element => {
  if (type === 'Break' || type === 'Unconference') {
    return null;
  }
  return (
    <TalkRow valign='center' type={type}>
      <Col size={1}>
        <TalkWrapper type={type}>
          {speaker && (
            <Row>
              {video && (
                <Col size={{ xs: 0.2 }}>
                  <VideoLink href={video.url} target='blank' rel='noopener noreferrer'>
                    <FaYoutube size={50} />
                  </VideoLink>
                </Col>
              )}
              <Col size={{ xs: 0.8 }}>
                <SessionTitle>{talk_title}</SessionTitle>
                <SpeakerPreview small={true} speaker={speaker} />
              </Col>
              <Col size={{ xs: 0.8 }}>{speaker_2 && <SpeakerPreview small={true} speaker={speaker_2} />}</Col>
            </Row>
          )}
        </TalkWrapper>
      </Col>
    </TalkRow>
  );
};

Video.defaultProps = {};

export default Video;
