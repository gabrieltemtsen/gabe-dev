import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
        <Head>
        <meta name="description" content="Gabriel Temtsen | Fullstack Developer" key="desc" />
        <meta property="og:title" content="Gabe Dev | Open Source Dev" />
        <meta
          property="og:description"
          content="Gabriel Temtsen | Fullstack Developer"
        />
        <meta
          property="og:image"
          content="/gabbyProf.jpeg"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
