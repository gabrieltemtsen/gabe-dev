import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Gabriel Temtsen | Full‑stack developer and product‑minded builder." />
        <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta property="og:site_name" content="Gabe Dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gabe Dev | Open Source Dev" />
        <meta property="og:description" content="Design-forward builds in Next.js and TypeScript." />
        <meta property="og:image" content="/gabbyProf.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'} />
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GeistMonoVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
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
