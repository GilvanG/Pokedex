/* eslint-disable react/react-in-jsx-scope */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=PT+Sans+Narrow&family=Russo+One&family=Titillium+Web:wght@200&display=swap" rel="stylesheet" />
        </Head>
        <body style={{ background: '#e9e9e9' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
