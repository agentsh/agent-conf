import {RichText} from 'prismic-reactjs';
import React, {FunctionComponent} from 'react';
import {Col, Row} from '../common/Grid';
import {ButtonLink} from '../common/links';
import styled, {theme, media} from '../common/styled';
import {WorkshopType} from '../common/types';
import {RichTextWrapper, SessionTitle, Time} from '../common/typography';
import SpeakerPreview from './SpeakerPreview';
import Link from 'next/link';

const WorkshopWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${props => 4 * props.theme.spacing}px;
  h3 {
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  ${media.md} {
    position: absolute;
    right: ${props => props.theme.spacing}px;
    top: ${props => props.theme.spacing}px;
  }
`;
export interface IWorkshopProps {
  workshop: WorkshopType;
  showTimes: boolean;
}
const Workshop: FunctionComponent<IWorkshopProps> = ({
  workshop: {start_time, end_time, workshop_title, description, speaker, speaker2},
  showTimes,
}): JSX.Element => {
  return (
    <Row>
      {showTimes && (
        <Col size={1}>
          <Time>
            {start_time} - {end_time}
          </Time>
        </Col>
      )}
      <Col size={1}>
        <WorkshopWrapper>
          <SessionTitle color={theme.primaryColor}>{workshop_title}</SessionTitle>
          <Row>
            <Col size={{xs: 1, sm: 1, md: 0.5, lg: 0.3}}>
              {speaker && <SpeakerPreview small={true} speaker={speaker} />}
            </Col>
            <Col size={{xs: 1, sm: 1, md: 0.5, lg: 0.3}}>
              {speaker2 && <SpeakerPreview small={true} speaker={speaker2} />}
            </Col>
          </Row>
          {description && <RichTextWrapper>{RichText.render(description)}</RichTextWrapper>}
          {showTimes && (
            <ButtonWrapper>
              <Link href={'/#tickets'}>
                <ButtonLink>get ticket</ButtonLink>
              </Link>
            </ButtonWrapper>
          )}
        </WorkshopWrapper>
      </Col>
    </Row>
  );
};

Workshop.defaultProps = {};

export default Workshop;
