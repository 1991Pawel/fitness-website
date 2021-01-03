import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustromDocument extends Document {
  render() {
    return (
      <Html lang="pl-PL">
        <Head />
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
