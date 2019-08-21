import Head from 'next/head';
import React, {FunctionComponent} from 'react';

export interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  robots?: string;
  keywords?: string;
}

const CustomHead: FunctionComponent<HeadProps> = (props): JSX.Element => {
  const title = `AgentConf - ${props.title ? props.title : 'Javascript conference with React.js focus'}`;
  const image = props.image ? props.image : 'https://www.agent.sh/static/assets/og.jpg';

  const description = props.description
    ? props.description
    : `Javascript conference with focus on React.js in Dornbirn/Lech Austria`;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="googlebot" content="index,follow,noodp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="robots" content={props.robots} />
      <meta property="language" content="de_AT" />
      <meta property="publisher" content="wokers.sh" />
      <meta property="author" content="wokers.sh" />
      <meta property="copyright" content="wokers.sh" />
      <meta property="audience" content="all" />
      <meta property="distribution" content="global" />
      <meta property="image" content={image} />
      <meta property="format-detection" content="telephone=yes" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="de_AT" />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={props.url} />
      <meta property="DC.Title" content={title} />
      <meta property="DC.Publisher" content={props.url} />
      <meta property="DC.Copyright" content={props.url} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#39484d" />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" type="text/css" href="https://css.tito.io/v1.1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto|Teko&display=swap" rel="stylesheet" />
      <script src="https://js.tito.io/v1" async />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGV6GDG');
            `,
        }}
      /> */}
      {props.children}
    </Head>
  );
};

CustomHead.defaultProps = {
  title: 'AgentConf 2020 - Javascript Confernce',
  robots: 'follow',
  url: 'agent.sh',
};

export default CustomHead;
