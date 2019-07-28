import gql from 'graphql-tag';
import React, {Fragment} from 'react';
import {Query} from 'react-apollo';
import {WorkshopsType} from '../common/types';
import Workshop from './Workshop';

export const query = gql`
  query workshops($uid: String!) {
    workshops: workshops(uid: $uid, lang: "en-us") {
      title
      date
      slots {
        start_time
        end_time
        workshop_title: ws_title
        description
        speaker {
          ... on Speaker {
            name
            works_on
            foto
            _meta {
              uid
            }
          }
        }
        speaker2: speaker_2 {
          ... on Speaker {
            name
            works_on
            foto
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;

interface WorkshopsProps {
  uid: string;
}
const Workshops: React.SFC<WorkshopsProps> = ({uid}) => (
  <Query query={query} variables={{uid}}>
    {({loading, error, data}) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const {workshops}: {workshops: WorkshopsType} = data;
      return (
        <Fragment>
          {workshops &&
            workshops.slots.length > 0 &&
            workshops.slots.map((workshop, idx) => {
              return <Workshop showTimes={true} workshop={workshop} key={idx} />;
            })}
        </Fragment>
      );
    }}
  </Query>
);

export default Workshops;
