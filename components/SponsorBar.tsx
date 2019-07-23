import {Query, QueryResult} from 'react-apollo';
import React, {FunctionComponent} from 'react';
import LazyLoad from 'react-lazyload';
import gql from 'graphql-tag';

import {Col, Row} from '../common/Grid';
import {SponsorType} from '../common/types';
import {theme} from '../common/styled';
import SimpleContentWrapper from './SimpleContentWrapper';
import SponsorImage from './SponsorImage';

export const query = gql`
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

interface SponsorBarProps {
  uid: string;
}
const SponsorBar: FunctionComponent<SponsorBarProps> = props => (
  <Query query={query} variables={{uid: props.uid}}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const {elements}: {elements: SponsorType[]} = data.sponsors;
      return (
        <SimpleContentWrapper background={theme.black} color={theme.white}>
          <Row halign="center" valign="center">
            {elements.map(sponsor => {
              return (
                <Col size={{xs: 1 / 3, md: 1 / 6}} key={sponsor.name}>
                  <a href={sponsor.url.url} target="_blank" rel="noopener noreferrer">
                    <LazyLoad height={100} offset={100}>
                      <SponsorImage src={sponsor.logo.url} alt={sponsor.name} />
                    </LazyLoad>
                  </a>
                </Col>
              );
            })}
          </Row>
        </SimpleContentWrapper>
      );
    }}
  </Query>
);

export default SponsorBar;
