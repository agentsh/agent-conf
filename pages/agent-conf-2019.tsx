import gql from 'graphql-tag';
import {NextPage} from 'next';
import React, {Fragment} from 'react';
import {Query, QueryResult} from 'react-apollo';
import Page from 'react-page-loading';
import {Padded, Spaced} from '../common/Grid';
import {theme} from '../common/styled';
import {TalkType, WorkshopType} from '../common/types';
import {H1Small, H2} from '../common/typography';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadlineGroup from '../components/HeadlineGroup';
import SimpleContentWrapper from '../components/SimpleContentWrapper';
import SponsorBar from '../components/SponsorBar';
import Talk from '../components/Talk';
import Tickets from '../components/Tickets';
import Workshop from '../components/Workshop';

export const indexQuery = gql`
  {
    index(uid: "agent-conf-2019", lang: "en-us") {
      header_content
      header_image
      talks {
        ... on Talk {
          title
          slots {
            talk_title
            start_time
            description
            type
            speaker {
              ... on Speaker {
                name
                works_on
                foto
                _meta {
                  slug: uid
                }
              }
            }
            speaker2: speaker_2 {
              ... on Speaker {
                name
                works_on
                foto
                _meta {
                  slug: uid
                }
              }
            }
          }
        }
      }
      workshops {
        ... on Workshop {
          title
          slots {
            workshop_title: ws_title
            start_time
            end_time
            description
            speaker {
              ... on Speaker {
                name
                works_on
                foto
                _meta {
                  slug: uid
                }
              }
            }
            speaker2: speaker_2 {
              ... on Speaker {
                name
                works_on
                foto
                _meta {
                  slug: uid
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Index: NextPage = () => (
  <Query query={indexQuery}>
    {({loading, error, data}: QueryResult) => {
      if (error) return <div>error</div>;
      if (loading) return <Page loader={'bar'} color={'#A9A9A9'} size={10} />;

      const talks = [];
      const workshops = [];
      data.index.talks.slots.forEach((talk: TalkType) => {
        if (talk.type === 'Talk' || talk.type === 'Keynote' || talk.type === 'Lightning Talk') {
          talks.push(<Talk key={`talk_${talk.talk_title}`} talk={talk} showTimes={false} />);
        }
      });

      data.index.workshops.slots.forEach((workshop: WorkshopType) => {
        workshops.push(<Workshop key={`workshop_${workshop.workshop_title}`} workshop={workshop} showTimes={false} />);
      });
      return (
        <Fragment>
          <CustomHead />
          <Header>
            <HeadlineGroup
              headline={
                <H1Small color={theme.white}>
                  Agent Conf.
                  <br />
                  2019
                </H1Small>
              }
              smallTop={'talks,talks,talks and skiing and apres ski'}
            />
          </Header>
          <SponsorBar uid={'sponsor-bar-2019'} />

          <SimpleContentWrapper color={theme.black} background={theme.white}>
            <Spaced multipleBottom={4} multipleTop={4}>
              <HeadlineGroup
                headline={
                  <H2 color={theme.primaryColor}>
                    2019 <br />
                    Workshops
                  </H2>
                }
                lineColor={theme.primaryColor}
              />
              <Padded multiple={5}>
                <Spaced multipleTop={3} multipleBottom={0}>
                  {workshops}
                </Spaced>
              </Padded>
            </Spaced>
          </SimpleContentWrapper>
          <Tickets />
          <SimpleContentWrapper color={theme.black} background={theme.white}>
            <Spaced multipleBottom={4} multipleTop={4}>
              <HeadlineGroup
                headline={
                  <H2 color={theme.primaryColor}>
                    2019 <br />
                    Talks
                  </H2>
                }
                lineColor={theme.primaryColor}
              />
              <Padded multiple={5}>
                <Spaced multipleTop={3} multipleBottom={0}>
                  {talks}
                </Spaced>
              </Padded>
            </Spaced>
          </SimpleContentWrapper>
          <Footer />
        </Fragment>
      );
    }}
  </Query>
);

export default Index;
