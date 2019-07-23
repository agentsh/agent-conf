import {FaTwitter} from 'react-icons/fa';
import {Query} from 'react-apollo';
import {RichText} from 'prismic-reactjs';
import React, {Fragment, FunctionComponent} from 'react';

import gql from 'graphql-tag';

import Page from 'react-page-loading';
import {Col, Padded, Row, Spaced} from '../common/Grid';
import {H1Small, H2Small, RichTextWrapper} from '../common/typography';
import {TeamType} from '../common/types';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadlineGroup from '../components/HeadlineGroup';
import SimpleContentWrapper from '../components/SimpleContentWrapper';
import SponsorBar from '../components/SponsorBar';
import Tickets from '../components/Tickets';
import styled, {theme} from '../common/styled';

export const query = gql`
  {
    content(uid: "workerconf-team", lang: "en-us") {
      headline_row_1
      headline_row_2
      image
      meta_title
      meta_og_image
      meta_description
    }
    allTeams(lang: "en-us", sortBy: headline_row_1_ASC) {
      edges {
        node {
          headline_row_1
          headline_row_2
          twitter
          bio
          foto
        }
      }
    }
  }
`;
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 0px 15px;
  float: left;
  height: auto;
  width: 100%;
  color: #f2f2f2;
  img {
    width: 200px;
    border-radius: 50%;
  }
`;

const Twitter = styled.div`
  position: absolute;
  right: 50px;
  top: 150px;
`;

const Team: FunctionComponent = () => (
  <Query query={query}>
    {({loading, error, data}) => {
      if (error) return <div>error</div>;
      if (loading) return <Page loader={'bar'} color={'#A9A9A9'} size={10} />;
      const teamMembers: TeamType[] = data.allTeams.edges.map(entry => entry.node);
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
          <SponsorBar uid={'sponsor-bar'} />

          <SimpleContentWrapper color={theme.black} background={theme.lightGrey}>
            <Spaced multipleBottom={4} multipleTop={4}>
              {teamMembers.map(({headline_row_1, headline_row_2, twitter, bio, foto}) => {
                return (
                  <Fragment key={headline_row_2}>
                    <HeadlineGroup
                      headline={
                        <H2Small color={theme.black}>
                          {headline_row_1}
                          <br /> {headline_row_2}
                        </H2Small>
                      }
                      lineColor={theme.black}
                    />
                    <Padded multiple={5}>
                      <Spaced multipleTop={0} multipleBottom={3}>
                        <Row valign="center">
                          <Col size={{xs: 1, md: 1 / 3}}>
                            <Wrapper>
                              <img src={foto.url} alt={headline_row_1 + '_' + headline_row_2} />
                              {twitter && twitter !== '' && (
                                <Twitter>
                                  <a
                                    href={`https://www.twitter.com/${twitter}`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaTwitter color={theme.white} size={40} />
                                  </a>
                                </Twitter>
                              )}
                            </Wrapper>
                          </Col>
                          <Col size={{xs: 1, md: 2 / 3}}>
                            <RichTextWrapper>{RichText.render(bio)}</RichTextWrapper>
                          </Col>
                        </Row>
                      </Spaced>
                    </Padded>
                  </Fragment>
                );
              })}
            </Spaced>
          </SimpleContentWrapper>
          <Tickets />
          <Footer />
        </Fragment>
      );
    }}
  </Query>
);

export default Team;
