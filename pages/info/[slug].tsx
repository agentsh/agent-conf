import gql from 'graphql-tag';
import {NextPage, NextPageContext} from 'next';
import {RichText} from 'prismic-reactjs';
import React, {Fragment} from 'react';
import {Query, QueryResult} from 'react-apollo';
import {Padded, Spaced} from '../../common/Grid';
import {theme} from '../../common/styled';
import {H1Small, RichTextWrapper} from '../../common/typography';
import BorderedImage from '../../components/BorderedImage';
import ContentWrapper from '../../components/ContentWrapper';
import CustomHead from '../../components/CustomHead';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeadlineGroup from '../../components/HeadlineGroup';
import SimpleContentWrapper from '../../components/SimpleContentWrapper';
import SponsorBar from '../../components/SponsorBar';
import Tickets from '../../components/Tickets';

export const query = gql`
  query content($uid: String!) {
    content(uid: $uid, lang: "en-us") {
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

interface InfoProps {
  slug: string;
}

const Info: NextPage<InfoProps> = ({slug}) => (
  <Query query={query} variables={{uid: slug}}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <div>loading...</div>;
      return (
        <Fragment>
          <CustomHead
            title={data.content.meta_title}
            description={data.content.meta_description}
            image={data.content.meta_og_image.url}
          />
          <Header>
            <HeadlineGroup
              headline={
                <H1Small color={theme.white}>
                  {data.content.headline_row_1}
                  <br />
                  {data.content.headline_row_2}
                </H1Small>
              }
            />
          </Header>
          <SponsorBar uid={'sponsor-bar-2020'} />

          <ContentWrapper
            colorTop={theme.white}
            colorMain={theme.white}
            colorBottom={data.content.content_2 ? theme.lightGrey : theme.white}
            backgroundContent={theme.white}>
            <Padded multiple={5}>
              <Spaced multipleBottom={4} multipleTop={4}>
                <RichTextWrapper>{RichText.render(data.content.content_1)}</RichTextWrapper>
              </Spaced>
            </Padded>
            {data.content.image && <BorderedImage src={data.content.image.url} alt={data.content.image.alt} />}
          </ContentWrapper>
          {data.content.content_2 && (
            <SimpleContentWrapper background={theme.lightGrey} color={theme.black}>
              <Spaced multipleTop={5} multipleBottom={5}>
                <Padded multiple={5}>
                  <RichTextWrapper>{RichText.render(data.content.content_2)}</RichTextWrapper>
                </Padded>
              </Spaced>
            </SimpleContentWrapper>
          )}
          <Tickets />
          <Footer />
        </Fragment>
      );
    }}
  </Query>
);

Info.getInitialProps = async ({query}: NextPageContext) => {
  return {slug: query.slug.toString()};
};

export default Info;
