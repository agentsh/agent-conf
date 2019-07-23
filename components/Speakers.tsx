import {Query} from 'react-apollo';
import React, {FunctionComponent} from 'react';

import gql from 'graphql-tag';

import {Col, Row, Spaced} from '../common/Grid';
import {SpeakersType} from '../common/types';
import Speaker from './Speaker';

export const query = gql`
  query speakers($uid: String!) {
    speakers(uid: $uid, lang: "en-us") {
      speakers {
        speaker {
          ... on Speaker {
            name
            works_on
            company
            twitter
            github
            foto
            _meta {
              slug: uid
            }
          }
        }
      }
    }
  }
`;

interface TicketSpeakersProps {
  slug: string;
}

const Speakers: FunctionComponent<TicketSpeakersProps> = props => (
  <Query query={query} variables={{uid: props.slug}}>
    {({loading, error, data}) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const {speakers}: {speakers: SpeakersType} = data;
      return (
        <div id="speakers">
          <Spaced multipleBottom={0} multipleTop={3}>
            <Row>
              {speakers &&
                speakers.speakers.length > 0 &&
                speakers.speakers.map((elem, idx: number) => {
                  return (
                    <Col size={{xs: 1, md: 1 / 2, lg: 1 / 3}} key={idx}>
                      <Speaker speaker={elem.speaker} />
                    </Col>
                  );
                })}
            </Row>
          </Spaced>
        </div>
      );
    }}
  </Query>
);

export default Speakers;
