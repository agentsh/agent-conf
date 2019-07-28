import React from 'react';
import styled, {media, theme} from '../common/styled';
import {Row, Col, Spaced} from '../common/Grid';
import {WebLink} from '../common/types';
import {ButtonLink} from '../common/links';
import {FunctionComponent} from 'react';
import Link from 'next/link';

export interface HeadlineGroupProps {
  headline: JSX.Element;
  smallTop?: string;
  action?: WebLink;
  action_name?: string;
  action_desc?: string;
  lineColor?: string;
  smallTopColor?: string;
}

const Wrapper = styled.div`
  float: left;
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`;

const Content = styled.div<{lineColor: string}>`
  border-left: 5px solid ${props => props.lineColor};
  width: 100%;
  padding-left: ${props => props.theme.spacing * 1}px;
  margin-left: ${props => props.theme.spacing * 1}px;
  margin-top: ${props => props.theme.spacing * 1}px;
  margin-bottom: ${props => props.theme.spacing * 1}px;
  float: left;
  display: block;
  height: auto;
  ${media.md} {
    padding-left: ${props => props.theme.spacing * 2}px;
    margin-left: ${props => props.theme.spacing * 2}px;
    margin-top: ${props => props.theme.spacing * 2}px;
    margin-bottom: ${props => props.theme.spacing * 2}px;
  }
  h3 {
    margin: 0;
  }
`;
const SmallTop = styled.span<{color: string}>`
  font-size: 25px;
  color: ${({color}) => color};
`;

const Action = styled.div`
  position: relative;
  display: block;
  float: left;
  height: auto;
  margin-left: ${props => props.theme.spacing * 2}px;

  p {
    line-height: 1.3;
  }

  ${media.lg} {
    position: absolute;
    width: 40%;
    bottom: ${props => props.theme.spacing * 4}px;
    right: 0;
    float: none;
  }
`;

const HeadlineGroup: FunctionComponent<HeadlineGroupProps> = ({
  smallTop,
  headline,
  action,
  action_desc,
  action_name,
  lineColor,
  smallTopColor,
}) => {
  return (
    <Wrapper>
      <Content lineColor={lineColor}>
        {smallTop && (
          <Row>
            <Spaced multipleBottom={2} multipleTop={0}>
              <Col>
                <SmallTop color={smallTopColor}>{smallTop.toUpperCase()}</SmallTop>
              </Col>
            </Spaced>
          </Row>
        )}
        <Row>
          <Col size={1}>{headline}</Col>
        </Row>
      </Content>
      <Action>
        <p>{action_desc}</p>
        {action && action_name && (
          <Link href={'/#tickets'}>
            <ButtonLink>{action_name}</ButtonLink>
          </Link>
        )}
      </Action>
    </Wrapper>
  );
};
HeadlineGroup.defaultProps = {lineColor: theme.white, smallTopColor: theme.white};
export default HeadlineGroup;
