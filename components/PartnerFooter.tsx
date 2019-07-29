import gql from 'graphql-tag';
import React, {FunctionComponent} from 'react';
import {Query, QueryResult} from 'react-apollo';
import LazyLoad from 'react-lazyload';
import {Col, Padded, Row, Spaced} from '../common/Grid';
import styled, {theme} from '../common/styled';
import {SponsorType} from '../common/types';
import SimpleContentWrapper from './SimpleContentWrapper';
import SponsorImage from './SponsorImage';

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
