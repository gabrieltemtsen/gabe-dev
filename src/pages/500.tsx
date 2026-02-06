import Head from 'next/head';
import Link from 'next/link';

export default function Error500() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4">
      <Head>
        <title>Something went wrong | Gabe Dev</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="glass max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">500</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">We hit a snag.</h1>
        <p className="mt-3 text-white/80">An unexpected error occurred. Please try again or head back home.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => location.reload()} className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow transition hover:-translate-y-0.5">
            Reload
          </button>
          <Link href="/" className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

