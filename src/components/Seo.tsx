import Head from 'next/head';
import { getSiteUrl } from '@/utils/site';

type SeoProps = {
  title: string;
  description: string;
  path?: string; // path starting with '/'
  image?: string; // absolute or root-relative
};

export default function Seo({ title, description, path = '/', image = '/og.svg' }: SeoProps) {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`.replace(/\/$/, path === '/' ? '/' : '');
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
}

