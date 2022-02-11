/* eslint-disable react/react-in-jsx-scope */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=PT+Sans+Narrow&family=Russo+One&family=Titillium+Web:wght@200&display=swap" rel="stylesheet" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Russo+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
        </Head>
        <body style={{ background: '#e9e9e9' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
