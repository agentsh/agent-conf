import gql from 'graphql-tag';
import {NextPage} from 'next';
import React, {Fragment} from 'react';
import {Query, QueryResult} from 'react-apollo';
import styled, {theme} from '../common/styled';
import {H1} from '../common/typography';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadlineGroup from '../components/HeadlineGroup';
import SponsorBar from '../components/SponsorBar';
import Tickets from '../components/Tickets';

const LotteryWrapper = styled.div`
  height: 1000px;
  padding-top: ${({theme}) => 3 * theme.spacing}px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const query = gql`
  {
    content(uid: "win", lang: "en-us") {
      header_background
      headline_row_1
      headline_row_2
      content_1
      image
      content_2
      meta_title
      meta_og_image
      meta_description
    }
  }
`;

const Win: NextPage = () => (
  <Query query={query}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <div>loading...</div>;
      return (
        <Fragment>
          <CustomHead
            title={data.content.meta_title}
            description={data.content.meta_description}
            image={data.content.meta_og_image ? data.content.meta_og_image.url : null}
          />
          <Header backgroundImage={data.content.header_background}>
            <HeadlineGroup
              headline={
                <H1 color={theme.white}>
                  {data.content.headline_row_1}
                  <br />
                  {data.content.headline_row_2}
                </H1>
              }
            />
          </Header>
          <SponsorBar uid={'sponsor-bar-2020'} />

          <LotteryWrapper>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfthUD6JqIrZhfe4np8wk2-6vPVTs7CV3kE9BddX4o5smnT9Q/viewform?embedded=true"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}>
              loading Form…
            </iframe>
          </LotteryWrapper>
          <Tickets />
          <Footer />
        </Fragment>
      );
    }}
  </Query>
);

export default Win;
