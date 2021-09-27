import React from 'react';
import path from 'path'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document,
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}

function Document(props) {
  const { Html, Head, Body, children } = props;

  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/socicon.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/theme.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/custom.css" rel="stylesheet" type="text/css" media="all" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700" rel="stylesheet"></link>
      </Head>
      <Body>{children}</Body>
      <script src="js/analytics.js"></script>
      <script src="js/jquery-3.1.1.min.js"></script>
      <script src="js/parallax.js"></script>
      <script src="js/smooth-scroll.min.js"></script>
      <script src="js/scripts.js"></script>
    </Html>
  );
}
