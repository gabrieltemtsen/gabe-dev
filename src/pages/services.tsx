import Link from 'next/link';
import Head from 'next/head';
import { getSiteUrl } from '@/utils/site';
import { ArrowUpRight, Palette, Rocket, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Product-ready builds',
      description: 'From design system to deployment with predictable delivery.',
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Delightful interfaces',
      description: 'Clean, high-converting experiences with modern motion & polish.',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'AI-infused workflows',
      description: 'Practical AI integrations that feel native and trustworthy.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20">
      <Head>
        <title>Services | Thoughtful Product Delivery</title>
        <meta name="description" content="Product-ready builds, delightful interfaces, and AI-infused workflows." />
        <meta property="og:title" content="Services | Thoughtful Product Delivery" />
        <meta property="og:description" content="Product-ready builds, delightful interfaces, and AI-infused workflows." />
        <meta property="og:image" content="/og.svg" />
        <link rel="canonical" href={`${getSiteUrl()}/services`} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: services.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: { '@type': 'Service', name: s.title, description: s.description },
              })),
            }),
          }}
        />
      </Head>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.15),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-200">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold">A focused studio for fast, thoughtful builds.</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Partner with me for high-velocity product delivery, polished interfaces, and AI enhancements that feel
            intuitive. Each engagement is scoped to keep momentum high and outcomes clear.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-3xl border border-white/20 bg-white/70 p-6 shadow-lg shadow-indigo-500/10 dark:bg-white/5 transition-transform will-change-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-indigo-500/10 p-3 text-indigo-600 dark:text-indigo-200">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold">{service.title}</h2>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-200">
                  Strategy
                </span>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-200">
                  Design
                </span>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-200">
                  Build
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            Looking for a custom engagement? Share your goals and we&apos;ll shape the right scope.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
