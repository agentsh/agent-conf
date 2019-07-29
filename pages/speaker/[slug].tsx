import gql from 'graphql-tag';
import {NextPage, NextPageContext} from 'next';
import React, {Fragment} from 'react';
import {Query} from 'react-apollo';
import {Container} from '../../common/Grid';
import {theme} from '../../common/styled';
import {SpeakerType} from '../../common/types';
import {H1} from '../../common/typography';

export const query = gql`
  query speaker($uid: String!) {
    speaker(uid: $uid, lang: "en-us") {
      name
      works_on
      foto
      bio
      _meta {
        slug: uid
      }
    }
  }
`;

interface SpeakerProps {
  slug: string;
}
const Speaker: NextPage<SpeakerProps> = props => (
  <Query query={query} variables={{uid: props.slug}}>
    {({loading, error, data}) => {
      if (error) return <div>error</div>;
      if (loading) return <div>loading...</div>;

      const {speaker}: {speaker: SpeakerType} = data;
      return (
        <Fragment>
          <Container>
            <H1 color={theme.black}>{speaker.name}</H1>
          </Container>
        </Fragment>
      );
    }}
  </Query>
);

Speaker.getInitialProps = async ({query}: NextPageContext) => {
  return {slug: query.slug + ''};
};

export default Speaker;
