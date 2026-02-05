import type { GetServerSideProps } from 'next';

const routes = ['/', '/projects', '/about', '/services', '/contact', '/now'];

const buildSitemap = (baseUrl: string) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path === '/projects' ? '0.9' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const xml = buildSitemap(baseUrl);
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function SiteMap() {
  return null;
}
