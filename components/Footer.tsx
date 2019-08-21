import React, {Fragment, FunctionComponent} from 'react';

import {Col, Row, VCenterWrapper, Container} from '../common/Grid';
import {FooterLink} from '../common/links';
import Banner from './Banner';
import SponsorFooter from './SponsorFooter';
import styled, {media} from '../common/styled';
import Link from 'next/link';
import PartnerFooter from './PartnerFooter';

const Nav = styled.div`
  padding: ${({theme}) => theme.spacing * 2}px 0;
  background-size: cover;
  background: ${({theme}) => theme.black};
  color: ${({theme}) => theme.white};
`;

const CopyRight = styled.div`
  padding: 0px ${({theme}) => theme.spacing}px;
  min-height: 100px;
  background: ${({theme}) => theme.black};
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

const AlpineInfo = styled.p`
  font-family: Teko;
  font-size: 20px;
  letter-spacing: 1px;
`;
export interface FooterProps {
  hideSponsors?: boolean;
}
const Footer: FunctionComponent<FooterProps> = ({hideSponsors}) => {
  return (
    <Fragment>
      <Banner slug="about-agent" />
      {!hideSponsors && <SponsorFooter uid="footer-sponsors-2020" />}
      {!hideSponsors && <PartnerFooter uid="partners" />}
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
              <Link href={'/info/[slug]'} as={'/info/lech'}>
                <FooterLink>Skiing</FooterLink>
              </Link>
              <Link href={'/info/[slug]'} as={'/info/venue'}>
                <FooterLink>Venue</FooterLink>
              </Link>
              <Link href={'/index#tickets'}>
                <FooterLink>Get Tickets</FooterLink>
              </Link>
              {/* <Link href={'/info/about'}> */}
              {/*   <FooterLink>About</FooterLink> */}
              {/* </Link> */}
              {/* <Link href={'/team'}> */}
              {/*   <FooterLink>Team</FooterLink> */}
              {/* </Link> */}
              <Link href={'/info/[slug]'} as={'/info/coc'}>
                <FooterLink>Code of Conduct</FooterLink>
              </Link>
              <Link href={'/agent-conf-2019'} as={'/agent-conf-2019'}>
                <FooterLink>Agent Conf 2019</FooterLink>
              </Link>
              <Link href={'/info/[slug]'} as={'/info/contact'}>
                <FooterLink>Contact Us</FooterLink>
              </Link>
            </Col>
          </Row>
        </Container>
      </Nav>
      <CopyRight>
        <VCenterWrapper>
          <AlpineInfo>
            Get unique inspiration from world class engineers.
            <br />© 2019 Alpine Conferences. All Rights Reserved.
          </AlpineInfo>
        </VCenterWrapper>
      </CopyRight>
    </Fragment>
  );
};
export default Footer;
