import gql from 'graphql-tag';
import React, { Fragment, FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import { TalksType } from '../common/types';
import Video from './Video';

const query = gql`
  query talks($uid: String!) {
    talks: talks(uid: $uid, lang: "en-us") {
      title
      date
      slots {
        start_time
        talk_title
        description
        type
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
        speaker_2 {
          ... on Speaker {
            name
            works_on
            foto
            _meta {
              uid
            }
          }
        }
        video {
          ... on _ExternalLink {
            url
          }
        }
      }
    }
  }
`;

interface VideosProps {
  uid: string;
}
export const Videos: FunctionComponent<VideosProps> = ({ uid }) => (
  <Query query={query} variables={{ uid }}>
    {({ loading, error, data }) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const { talks }: { talks: TalksType } = data;
      return (
        <Fragment>
          {talks &&
            talks.slots.length > 0 &&
            talks.slots.map((talk, idx) => {
              return <Video talk={talk} key={idx} />;
            })}
        </Fragment>
      );
    }}
  </Query>
);
