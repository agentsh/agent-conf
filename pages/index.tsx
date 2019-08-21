import gql from 'graphql-tag';
import {NextPage} from 'next';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import React, {Fragment, useEffect} from 'react';
import {Query, QueryResult} from 'react-apollo';
import LazyLoad from 'react-lazyload';
import YouTube from 'react-youtube';
import Fonts from '../common/Fonts';
import {Col, Padded, Row, Spaced} from '../common/Grid';
import {ButtonLink} from '../common/links';
import {theme} from '../common/styled';
import {HomepageType} from '../common/types';
import {A, FontBig, H2, H3, RichTextWrapper} from '../common/typography';
import BorderedBlock from '../components/BorderedBlock';
import ContentWrapper from '../components/ContentWrapper';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import Header, {DateInfo, Headline, InfoText, LocationInfo, Slogan, TicketCol} from '../components/Header';
import HeadlineGroup from '../components/HeadlineGroup';
import SimpleContentWrapper from '../components/SimpleContentWrapper';
import Speakers from '../components/Speakers';
import SponsorBar from '../components/SponsorBar';
import Talks from '../components/Talks';
import Tickets from '../components/Tickets';

const youtubeOptions = {
  width: '100%',
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
                <Row valign="bottom">
                  <Col size={{xs: 1, md: 3 / 4}}>
                    <Slogan>THE INTERNATIONAL EVENT FOR CODING INSPIRATION</Slogan>
                    <Headline>AgentConf</Headline>
                    <InfoText>💥 2 days single track conference</InfoText>
                    <InfoText>⛷ 2 days of skiing</InfoText>
                    <DateInfo>23rd - 26th January&nbsp;2020</DateInfo>
                    <LocationInfo>Dornbirn & Lech, Austria</LocationInfo>
                  </Col>
                  <TicketCol size={{xs: 1, md: 1 / 4}}>
                    <Link href={'/#tickets'}>
                      <ButtonLink>get Tickets</ButtonLink>
                    </Link>
                  </TicketCol>
                </Row>
              </Header>
              <SponsorBar uid={'sponsor-bar-2020'} />
              <ContentWrapper
                colorTop={theme.white}
                colorMain={theme.white}
                colorBottom={theme.black}
                backgroundContent={theme.white}>
                <Spaced multipleTop={7} multipleBottom={4}>
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
                  <BorderedBlock>
                    <YouTube videoId={'yPucwN9GQgU'} className={''} containerClassName={''} opts={youtubeOptions} />
                  </BorderedBlock>
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
                  colorMain={theme.black}
                  colorBottom={theme.black}
                  backgroundContent={theme.white}>
                  <Spaced multipleBottom={4} multipleTop={2}>
                    <HeadlineGroup
                      headline={
                        <H2 color={theme.primaryColor}>
                          The <br />
                          Schedule
                        </H2>
                      }
                      lineColor={theme.primaryColor}
                    />
                    <div style={{padding: '0 20px'}}>
                      <Spaced multipleTop={0} multipleBottom={3}>
                        <H3 color={theme.black}>23.01. Conference Day</H3>
                        <Talks uid="schedule-2020-day-1" />
                      </Spaced>
                      <Spaced multipleTop={0} multipleBottom={3}>
                        <H3 color={theme.black}>24.01. Conference Day</H3>
                        <Talks uid="schedule-2020-day-2" />
                      </Spaced>
                      <Spaced multipleTop={0} multipleBottom={0}>
                        <H3 color={theme.black}>25.01. & 26.01. Activity Days in Lech</H3>
                        <FontBig>
                          <Link href={'/info/[slug]'} as={'/info/lech'}>
                            <A>Read more about the activities in Lech</A>
                          </Link>
                          <br />
                          <br />
                          On Sunday 26th the bus to Dornbirn leaves Lech at 17:00 and arrives in Dornbirn at about
                          18:30.
                        </FontBig>
                      </Spaced>
                    </div>
                  </Spaced>
                </ContentWrapper>
              </div>
              <Tickets />
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
