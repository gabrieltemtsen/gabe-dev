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
import { getSiteUrl } from '@/utils/site';
import Seo from '@/components/Seo';
import SectionHeader from '@/components/SectionHeader';

const Now = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <Seo
        title="Now | What I’m Focused On"
        description="Snapshot of current priorities and active work."
        path="/now"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.1),transparent_40%)]" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6">
        <div className="glass rounded-3xl border border-white/20 p-8 shadow-xl">
          <SectionHeader
            eyebrow="Now"
            title="A quick snapshot of what I’m focused on."
            subtitle="This page is a living pulse check—updated whenever my energy shifts. Right now I’m prioritizing high-impact builds, nurturing a calm creative routine, and carving out space for deep work."
          />
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            If any of these priorities resonate with what you need, I’d love to collaborate.
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
