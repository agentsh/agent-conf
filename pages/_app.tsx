import { AppContextType, AppInitialProps } from 'next-server/dist/lib/utils';
import App, { Container, AppContext } from 'next/app';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import { push as Menu } from 'react-burger-menu';
import { GlobalStyle } from '../common/globalStyle';
import { NavLink } from '../common/links';
import styled, { theme, ThemeProvider } from '../common/styled';
import withApollo from '../lib/withApollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';

export interface CustomAppContext extends AppContext {
  apolloClient: ApolloClient<InMemoryCache>;
}
export interface CustomAppProps extends AppInitialProps {
  apolloClient: ApolloClient<InMemoryCache>;
}
const MenuItem = styled.div`
  outline: none;
`;

class MyApp extends App<CustomAppProps, CustomAppContext> {
  state = { showMenu: false };
  handleStateChange = state => {
    this.setState({ showMenu: state.isOpen });
  };
  hideNav = () => {
    this.setState({ showMenu: false });
  };
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Fragment>
        {/* <noscript>
          <iframe
            title="googletagmanager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGV6GDG"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript> */}
        <ThemeProvider theme={theme}>
          <Container>
            <ApolloProvider client={apolloClient}>
              <Fragment>
                <GlobalStyle />
                <Menu
                  pageWrapId={'page-wrap'}
                  right
                  isOpen={this.state.showMenu}
                  onStateChange={state => this.handleStateChange(state)}>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/index'}>
                      <NavLink>Home</NavLink>
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={this.hideNav}>
                    <Link href={'/index#speakers'}>
                      <NavLink>Speakers</NavLink>
                    </Link>
                  </MenuItem> */}
                  {/* <MenuItem onClick={this.hideNav}>
                    <Link href={'/index#schedule'}>
                      <NavLink>Schedule</NavLink>
                    </Link> 
                  </MenuItem>*/}
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/venue'}>
                      <NavLink>Venue</NavLink>
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={this.hideNav}>
                    <Link href={'#tickets'}>
                      <NavLink>Get Tickets</NavLink>
                    </Link>
                  </MenuItem> */}
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/dornbirn'}>
                      <NavLink>Dornbirn</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/hotels'}>
                      <NavLink>Hotels in Dornbirn</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/lech'}>
                      <NavLink>Lech</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/coc'}>
                      <NavLink>Code of Conduct</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/agent-conf-2020'} as={'/agent-conf-2020'}>
                      <NavLink>AgentConf 2020</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/agent-conf-2019'} as={'/agent-conf-2019'}>
                      <NavLink>AgentConf 2019</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/disclaimer'}>
                      <NavLink>Disclaimer</NavLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.hideNav}>
                    <Link href={'/info/[slug]'} as={'/info/contact'}>
                      <NavLink>Contact Us</NavLink>
                    </Link>
                  </MenuItem>
                </Menu>
                <main id='page-wrap'>
                  <Component {...pageProps} />
                </main>
              </Fragment>
            </ApolloProvider>
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}
export default withApollo(MyApp);
