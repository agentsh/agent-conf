import gql from 'graphql-tag';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import React from 'react';
import {Query, QueryResult} from 'react-apollo';
import {Col, Container, Padded, Row, Spaced, VCenterWrapperAbsolute} from '../common/Grid';
import {ButtonLink} from '../common/links';
import styled, {theme} from '../common/styled';
import {BannerType} from '../common/types';
import {H2, RichTextWrapper} from '../common/typography';
import HeadlineGroup from './HeadlineGroup';

export const query = gql`
  query banner($uid: String!) {
    banner(uid: $uid, lang: "en-us") {
      small_headline
      headline
      content
      action
      action_link {
        ... on _ExternalLink {
          url
        }
      }
      foto
    }
  }
`;
const BannerRow = styled.div`
  min-height: 50vh;
  width: auto;
`;

const BannerCol = styled.div<{background: string}>`
  padding-top: ${({theme}) => theme.spacing * 10}px;
  padding-bottom: ${({theme}) => theme.spacing * 10}px;
  height: 800px;
  max-height: 100vh;
  background: url('${({background}) => background}') center center;
  background-size: cover;
  color: white;
  position: relative;
  &:after {
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, 
                                ${({theme}) => theme.black} 0%, 
                                ${({theme}) => theme.white}40 10%, 
                                ${({theme}) => theme.black} 100%);
    height: 100%;
    z-index: 1;
  }
`;

interface TicketBannerProps {
  slug: string;
}
const Banner: React.SFC<TicketBannerProps> = props => (
  <Query query={query} variables={{uid: props.slug}}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <div>Loading</div>;
      const {banner}: {banner: BannerType} = data;
      return (
        <BannerRow>
          <BannerCol background={banner.foto.url}>
            <VCenterWrapperAbsolute>
              <Container>
                {(banner.small_headline || banner.headline) && (
                  <HeadlineGroup
                    smallTop={banner.small_headline}
                    headline={<H2 color={theme.white}>{banner.headline}</H2>}
                  />
                )}
                <Padded multiple={5}>
                  <RichTextWrapper>{RichText.render(banner.content)}</RichTextWrapper>
                  {banner.action && banner.action_link && (
                    <Spaced multipleTop={3} multipleBottom={0}>
                      <Link href={banner.action_link.url}>
                        <ButtonLink>{banner.action}</ButtonLink>
                      </Link>
                    </Spaced>
                  )}
                </Padded>
              </Container>
            </VCenterWrapperAbsolute>
          </BannerCol>
        </BannerRow>
      );
    }}
  </Query>
);

export default Banner;
