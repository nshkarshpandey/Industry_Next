import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the Google Font link here */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"/> */}

         <title>Accuarate Industries</title>

        {/* Meta description for SEO */}
        <meta name="description" content="Welcome to My Awesome Website, your one-stop solution for amazing services." />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />

        {/* Viewport settings for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
