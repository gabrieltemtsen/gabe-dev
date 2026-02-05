const priorities = [
  {
    title: 'Ship client work with polish',
    description:
      'Wrapping two product builds that blend crisp UI, reliable integrations, and thoughtful onboarding.',
  },
  {
    title: 'Iterate on personal AI tools',
    description:
      'Refining a lightweight assistant that turns scattered notes into focused next steps and gentle reminders.',
  },
  {
    title: 'Share what I learn',
    description:
      'Documenting design system decisions and reusable front-end patterns to help teams move faster.',
  },
];

import Head from 'next/head';

const Now = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <Head>
        <title>Now | What I’m Focused On</title>
        <meta name="description" content="Snapshot of current priorities and active work." />
        <link rel="canonical" href={(process as any).env.NEXT_PUBLIC_SITE_URL ? `${(process as any).env.NEXT_PUBLIC_SITE_URL}/now` : 'https://example.com/now'} />
      </Head>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.1),transparent_40%)]" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6">
        <div className="glass rounded-3xl border border-white/20 p-8 shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">Now</p>
          <h1 className="mt-4 text-4xl font-semibold">A quick snapshot of what I&apos;m focused on.</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
            This page is a living pulse check—updated whenever my energy shifts. Right now I&apos;m prioritizing
            high-impact builds, nurturing a calm creative routine, and carving out space for deep work.
          </p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            If any of these priorities resonate with what you need, I&apos;d love to collaborate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {priorities.map((priority) => (
            <div
              key={priority.title}
              className="glass flex h-full flex-col gap-3 rounded-2xl border border-white/20 p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{priority.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{priority.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Now;
