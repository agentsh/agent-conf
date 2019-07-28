import {Query, QueryResult} from 'react-apollo';
import React, {FunctionComponent} from 'react';
import LazyLoad from 'react-lazyload';
import gql from 'graphql-tag';

import {Col, Row, Spaced, Padded} from '../common/Grid';
import {H2, H3} from '../common/typography';
import {SponsorType} from '../common/types';
import HeadlineGroup from './HeadlineGroup';
import SimpleContentWrapper from './SimpleContentWrapper';
import SponsorImage from './SponsorImage';
import styled, {theme} from '../common/styled';

const query = gql`
  query sponsors($uid: String!) {
    sponsors(uid: $uid, lang: "en-us") {
      elements {
        logo
        name
        url {
          ... on _ExternalLink {
            url
          }
        }
      }
    }
  }
`;
const A = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
`;
interface SponsorFooterProps {
  uid: string;
}

const PartnerFooter: FunctionComponent<SponsorFooterProps> = props => (
  <Query query={query} variables={{uid: props.uid}}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const {elements}: {elements: SponsorType[]} = data.sponsors;
      return (
        <SimpleContentWrapper background={theme.black} color={theme.white}>
          <Spaced multipleBottom={5} multipleTop={2}>
            <Padded multiple={5}>
              <Row halign="center" valign="center">
                {elements.map(sponsor => {
                  return (
                    <Col size={{xs: 1 / 2, md: 1 / 4}} key={sponsor.name} valign="center">
                      <A href={sponsor.url.url} target="_blank">
                        <LazyLoad height={100} offset={100}>
                          <SponsorImage smaller={true} hasPadding={true} src={sponsor.logo.url} alt={sponsor.name} />
                        </LazyLoad>
                      </A>
                    </Col>
                  );
                })}
              </Row>
            </Padded>
          </Spaced>
        </SimpleContentWrapper>
      );
    }}
  </Query>
);

export default PartnerFooter;
