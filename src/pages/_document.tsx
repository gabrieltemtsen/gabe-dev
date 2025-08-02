import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
