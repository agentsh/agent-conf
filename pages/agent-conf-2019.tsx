import gql from 'graphql-tag';
import {NextPage} from 'next';
import {RichText} from 'prismic-reactjs';
import React, {Fragment, useEffect} from 'react';
import {Query, QueryResult} from 'react-apollo';
import LazyLoad from 'react-lazyload';
import Fonts from '../common/Fonts';
import {Spaced} from '../common/Grid';
import {theme} from '../common/styled';
import {HomepageType} from '../common/types';
import {H1, H2, H3, RichTextWrapper} from '../common/typography';
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

export const indexQuery = gql`
  {
    homepage(uid: "agent-conf-2019", lang: "en-us") {
      header_background
      header_small_headline
      header_headline_row_1
      header_headline_row_2
      header_action_description
      header_action_text
      header_action {
        ... on _ExternalLink {
          url
        }
      }
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
                <Spaced multipleTop={5} multipleBottom={5}>
                  <RichTextWrapper>{RichText.render(homepage.about_content_left)}</RichTextWrapper>
                  <RichTextWrapper>{RichText.render(homepage.about_content_right)}</RichTextWrapper>
                </Spaced>
                <LazyLoad height={200} offset={100}>
                  <BorderedImage src={homepage.about_image.url} alt={homepage.about_image.alt} />
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
                  <Speakers slug={'speakers-2019'} />
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
                      headline={<H2 color={theme.primaryColor}>The Schedule</H2>}
                      lineColor={theme.primaryColor}
                    />
                    <div style={{padding: '0 20px'}}>
                      <Spaced multipleTop={1} multipleBottom={5}>
                        <H3 color={theme.black}>21.02.2019 Conference Day</H3>
                        <Talks uid="talks-2019-1" />
                      </Spaced>
                      <Spaced multipleTop={0} multipleBottom={0}>
                        <H3 color={theme.black}>22.02.2019 Conference Day</H3>
                        <Talks uid="talks-2019-2" />
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
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
  }
  return {};
};

export default Index;
