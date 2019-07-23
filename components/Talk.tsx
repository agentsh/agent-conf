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
  margin-bottom: ${props => 3 * props.theme.spacing}px;
  h3 {
    margin-top: 0px;
  }
`;

export interface ITalkProps {
  talk: TalkType;
  showTimes: boolean;
}
const Talk: FunctionComponent<ITalkProps> = ({
  talk: {start_time, talk_title, type, description, speaker, speaker2},
  showTimes,
}): JSX.Element => {
  const showDesc = type !== 'Break' && type !== 'Unconference';
  return (
    <Row>
      {showTimes && (
        <Col size={1}>
          <Time>{start_time}</Time>
        </Col>
      )}
      <Col size={1}>
        <TalkWrapper type={type}>
          <SessionTitle>
            {type === 'Lightning Talk' && <span>⚡Talk - </span>}
            {type === 'Keynote' && <span>Keynote - </span>}
            {talk_title}
          </SessionTitle>
          {speaker && (
            <Row>
              <Col size={{xs: 1, sm: 1, md: 0.5, lg: 0.3}}>
                <SpeakerPreview small={true} speaker={speaker} />
              </Col>
              <Col size={{xs: 1, sm: 1, md: 0.5, lg: 0.3}}>
                {speaker2 && <SpeakerPreview small={true} speaker={speaker2} />}
              </Col>
            </Row>
          )}
          {showDesc === true && description && <RichTextWrapper>{RichText.render(description)}</RichTextWrapper>}
        </TalkWrapper>
      </Col>
    </Row>
  );
};

Talk.defaultProps = {};

export default Talk;
