import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/logos/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="40x40"
            href="/static/logos/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/logos/logo.png"
          />
          <link rel="manifest" href="/static/logos/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
