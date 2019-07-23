import gql from 'graphql-tag';
import {NextPage} from 'next';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import React, {Fragment, useEffect} from 'react';
import {Query, QueryResult} from 'react-apollo';
import LazyLoad from 'react-lazyload';
import Page from 'react-page-loading';
import Fonts from '../common/Fonts';
import {Col, Padded, Row, Spaced} from '../common/Grid';
import {theme} from '../common/styled';
import {HomepageType} from '../common/types';
import {A, FontBig, H1, H2, H3, RichTextWrapper} from '../common/typography';
import BorderedImage from '../components/BorderedImage';
import ContentWrapper from '../components/ContentWrapper';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadlineGroup from '../components/HeadlineGroup';
import SimpleContentWrapper from '../components/SimpleContentWrapper';
import Speakers from '../components/Speakers';
import SponsorBar from '../components/SponsorBar';
import Talks from '../components/Talks';
import Tickets from '../components/Tickets';
import YouTube from 'react-youtube';

const youtubeOptions = {
  width: '100%',
  height: '500',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

export const indexQuery = gql`
  {
    homepage(uid: "index", lang: "en-us") {
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
    }
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
          if (loading) return <Page loader={'bar'} color={'#A9A9A9'} size={10} />;
          const {homepage}: {homepage: HomepageType} = data;
          return (
            <Fragment>
              <CustomHead
                title={homepage.meta_title}
                description={homepage.meta_description}
                image={homepage.meta_og_image.url}
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
              </Header>
              <SponsorBar uid={'sponsor-bar-2020'} />
              <ContentWrapper
                colorTop={theme.white}
                colorMain={theme.white}
                colorBottom={theme.black}
                backgroundContent={theme.white}>
                <Spaced multipleTop={3} multipleBottom={4}>
                  <HeadlineGroup
                    headline={
                      <H2 color={theme.primaryColor}>
                        Agent <br />
                        Conf 2020
                      </H2>
                    }
                    lineColor={theme.primaryColor}
                    smallTop={'ABOUT THE CONFERENCE'}
                  />
                  <Padded multiple={5}>
                    <Row>
                      <Col size={{xs: 1, md: 0.5}}>
                        <RichTextWrapper>{RichText.render(homepage.about_content_left)}</RichTextWrapper>
                      </Col>
                      <Col size={{xs: 1, md: 0.5}}>
                        <RichTextWrapper>{RichText.render(homepage.about_content_right)}</RichTextWrapper>
                      </Col>
                    </Row>
                  </Padded>
                </Spaced>
                <LazyLoad height={200} offset={100}>
                  <YouTube videoId={'-mhY7e-EsC4'} className={''} containerClassName={''} opts={youtubeOptions} />
                </LazyLoad>
              </ContentWrapper>
              <SimpleContentWrapper background={theme.black} color={theme.white}>
                <Spaced multipleTop={5} multipleBottom={5}>
                  <HeadlineGroup
                    headline={
                      <H2 color={theme.white}>
                        Worldclass
                        <br />
                        Speakers
                      </H2>
                    }
                  />
                  <Speakers slug={'speakers-2020'} />
                </Spaced>
              </SimpleContentWrapper>
              <div id="schedule">
                <ContentWrapper
                  colorTop={theme.black}
                  colorMain={theme.white}
                  colorBottom={theme.black}
                  backgroundContent={theme.white}>
                  <Spaced multipleBottom={4} multipleTop={4}>
                    <HeadlineGroup
                      headline={
                        <H2 color={theme.primaryColor}>
                          The <br />
                          Schedule
                        </H2>
                      }
                      lineColor={theme.primaryColor}
                    />
                    <Padded multiple={5}>
                      <Spaced multipleTop={3} multipleBottom={3}>
                        <H3 color={theme.black}>23.01. Conference Day</H3>
                        <Talks uid="talks-2020-1" />
                      </Spaced>
                      <Spaced multipleTop={0} multipleBottom={3}>
                        <H3 color={theme.black}>24.01. Conference Day</H3>
                        <Talks uid="talks-2020-2" />
                      </Spaced>
                      <Spaced multipleTop={0} multipleBottom={0}>
                        <H3 color={theme.black}>25.01. & 26.01. Activity Days in Lech</H3>
                        <FontBig>
                          Skiing and other winter sport activities.&nbsp;
                          <Link href={'/info/lech'}>
                            <A>Read more</A>
                          </Link>
                        </FontBig>
                      </Spaced>
                    </Padded>
                  </Spaced>
                </ContentWrapper>
              </div>
              <LazyLoad offset={300}>
                <Tickets />
              </LazyLoad>
              <Footer />
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
