import React, {Fragment, FunctionComponent} from 'react';

import {Col, Row, VCenterWrapper, Container} from '../common/Grid';
import {FooterLink} from '../common/links';
import Banner from './Banner';
import SponsorFooter from './SponsorFooter';
import styled, {media} from '../common/styled';
import Link from 'next/link';

const Nav = styled.div`
  padding: ${props => props.theme.spacing * 2}px 0;
  background-size: cover;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const CopyRight = styled.div`
  padding: 0px ${props => props.theme.spacing}px;
  min-height: 100px;
  background: ${props => props.theme.black};
  color: white;
  display: flex;
  font-size: 14px;
  ${media.md} {
    text-align: center;
    padding: 0px 0px;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

export interface FooterProps {
  hideSponsors?: boolean;
}
const Footer: FunctionComponent<FooterProps> = ({hideSponsors}) => {
  return (
    <Fragment>
      <Banner slug="about-agent" />
      {!hideSponsors && <SponsorFooter uid="footer-sponsors-2020" />}
      <Nav>
        <Container>
          <Row>
            <Col size={{xs: 0, md: 1 / 4}}>
              <Logo src={'/static/assets/logo.png'} />
            </Col>
            <Col size={{xs: 1, md: 3 / 4}}>
              <Link href={'/'}>
                <FooterLink>Home</FooterLink>
              </Link>
              <Link href={'/index#speakers'}>
                <FooterLink>Speakers</FooterLink>
              </Link>
              <Link href={'/index#schedule'}>
                <FooterLink>Schedule</FooterLink>
              </Link>
              <Link href={'/info/skiing'}>
                <FooterLink>skiing</FooterLink>
              </Link>
              <Link href={'/info/venue'}>
                <FooterLink>Venue</FooterLink>
              </Link>
              <Link href={'/index#tickets'}>
                <FooterLink>Get Tickets</FooterLink>
              </Link>
              <Link href={'/info/about'}>
                <FooterLink>About</FooterLink>
              </Link>
              <Link href={'/team'}>
                <FooterLink>Team</FooterLink>
              </Link>
              <Link href={'/info/coc'}>
                <FooterLink>Code of Conduct</FooterLink>
              </Link>
              <Link href={'/agent-conf-2019'}>
                <FooterLink>Agent Conf 2019</FooterLink>
              </Link>
              <Link href={'/info/contact'}>
                <FooterLink>Contact Us</FooterLink>
              </Link>
            </Col>
          </Row>
        </Container>
      </Nav>
      <CopyRight>
        <VCenterWrapper>
          <p>Get unique inspiration from world class engineers.</p>
          <p>© 2019 Alpine Conferences. All Rights Reserved.</p>
        </VCenterWrapper>
      </CopyRight>
    </Fragment>
  );
};
export default Footer;
