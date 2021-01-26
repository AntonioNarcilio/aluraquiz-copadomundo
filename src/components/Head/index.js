import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

function HeadPage() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{db.title}</title>
      <link rel="shortcut icon" href={db.favicon} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="title" content={db.title} key="title" />
      <meta name="description" content={db.description} key="desc" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={db.title} key="ogsitename" />
      <meta property="og:url" content={db.url_site} key="ogurl" />
      <meta property="og:title" content={db.title} key="ogtitle" />
      <meta property="og:description" content={db.description} key="ogdesc" />
      <meta property="og:image" content={db.preview_site} key="ogimg" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" key="tw" />
      <meta property="twitter:url" content={db.url_site} key="twurl" />
      <meta property="twitter:title" content={db.title} key="twtitle" />
      <meta property="twitter:description" content={db.description} key="twdesc" />
      <meta property="twitter:image" content={db.preview_site} key="twimg" />
    </Head>
  );
}

export default HeadPage;
