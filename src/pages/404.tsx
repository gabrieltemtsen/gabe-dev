import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4">
      <Head>
        <title>Page Not Found | Gabe Dev</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="glass max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">This page took a wrong turn.</h1>
        <p className="mt-3 text-white/80">The link might be broken or the page may have moved.</p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow transition hover:-translate-y-0.5">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

