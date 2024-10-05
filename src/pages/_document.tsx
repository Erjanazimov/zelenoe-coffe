import React from "react";

import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';


// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {

      return (
      <Html lang={AppConfig.locale}>
          {/*@ts-ignore*/}
        <Head />
        <body>
          <Main />
          {/*@ts-ignore*/}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
