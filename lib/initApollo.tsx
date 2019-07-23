import {ApolloClient, InMemoryCache} from 'apollo-boost';
import {PrismicLink} from 'apollo-link-prismic';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

function create(initialState: any) {
  const isBrowser: boolean = typeof window !== 'undefined';
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new PrismicLink({
      uri: 'https://agent-conf.prismic.io/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // useGETForQueries: true,
      fetch: !isBrowser && fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
