import gql from 'graphql-tag';
import {NextPage} from 'next';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import React, {Fragment, useEffect} from 'react';
import {Query, QueryResult} from 'react-apollo';
import {FaTwitter} from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import Fonts from '../common/Fonts';
import {Col, Row, Spaced} from '../common/Grid';
import styled, {theme, media} from '../common/styled';
import {HomepageType} from '../common/types';
import {A, FontBig, H1, H2, H3, RichTextWrapper} from '../common/typography';
import ContentWrapper, {Container} from '../components/ContentWrapper';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import HeadlineGroup from '../components/HeadlineGroup';
import SimpleContentWrapper from '../components/SimpleContentWrapper';
import {Twitter} from '../components/Speaker';
import {Videos} from '../components/Videos';
import Header from '../components/Header';
import SponsorBar from '../components/SponsorBar';

export const indexQuery = gql`
  {
    homepage(uid: "agent-conf-2021", lang: "en-us") {
      header_background
      header_small_headline
      header_headline_row_1
      header_headline_row_2
      header_action_description
      header_action {
        ... on _ExternalLink {
          url
        }
      }
      header_action_text
      about_small_headline
      about_headline_row_1
      about_headline_row_2
      about_content_left
      about_content_right
      about_image
      meta_title
      meta_og_image
      meta_description
      feedback {
        image
        twitter
        text
      }
    }
  }
`;

const FeedbackWrapper = styled.div`
  border-radius: 5px;
  margin-top: 45px;
  padding: 15px;
  p {
    ${media.md} {
      font-size: 20px;
    }
  }
  color: white;
  em {
    color: ${({theme}) => theme.primaryColor};
  }
  img {
    width: 80%;
    margin-bottom: 30px;

    ${media.md} {
      margin-bottom: 0px;
    }
    border-radius: 50%;
  }
`;

const Index: NextPage = () => {
  useEffect(() => {
    Fonts();
    return () => {
      // Clean up method, not reqired in this case
    };
  }, []);

  return (
    <Fragment>
      <Query query={indexQuery}>
        {({loading, error, data}: QueryResult) => {
          if (error) return <div>error</div>;
          if (loading) return <div>loading ...</div>;
          const {homepage}: {homepage: HomepageType} = data;
          return (
            <Fragment>
              <CustomHead
                title={homepage.meta_title}
                description={homepage.meta_description}
                image={homepage.meta_og_image ? homepage.meta_og_image.url : null}
              />

              <Header backgroundImage={homepage.header_background}>
                <HeadlineGroup
                  headline={
                    <H1 color={theme.white}>
                      {homepage.header_headline_row_1}
                      <br />
                      {homepage.header_headline_row_2}
                    </H1>
                  }
                  smallTop={homepage.header_small_headline}
                  action={homepage.header_action}
                  action_name={homepage.header_action_text}
                  action_desc={homepage.header_action_description}
                />
                <Container>
                  <RichTextWrapper>{RichText.render(homepage.about_content_left)}</RichTextWrapper>
                </Container>
              </Header>
              <SponsorBar uid={'sponsor-bar-2021'} />
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

Index.getInitialProps = async ({res}) => {
  if (res) {
    res.setHeader('Cache-Control', 's-maxage=100, stale-while-revalidate');
  }
  return {};
};

export default Index;
