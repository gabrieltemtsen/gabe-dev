import Link from 'next/link';
import {
  ArrowUpRight,
  Briefcase,
  Github,
  Mail,
  Palette,
  Rocket,
  Sparkles,
} from 'lucide-react';
import DigitalRain from '@/components/DigitalRain';

const Home = () => {
  const stats = [
    { label: 'Live portfolio builds', value: '5 projects' },
    { label: 'Farcaster experiments', value: '3 mini apps' },
    { label: 'Stack of choice', value: 'Next.js + TypeScript' },
  ];

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

  const focus = ['Next.js', 'TypeScript', 'Design Systems', 'AI Assistants', 'Edge Compute'];
  const collaborators = [
    {
      name: 'Lia Mendez',
      role: 'Product Lead, Ember Labs',
      quote: 'Gabriel translated our fuzzy roadmap into a crisp, shippable product without losing the soul.',
    },
    {
      name: 'Rowan Park',
      role: 'Founder, SignalNorth',
      quote: 'Every handoff was thoughtful, and the UI polish helped us close our seed round faster.',
    },
    {
      name: 'Jules Okafor',
      role: 'Design Director, Cloudline',
      quote: 'He blends systems thinking with visual finesse—exactly what we needed for our relaunch.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <DigitalRain />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.2),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 py-16 lg:py-24 text-white">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Accepting new collaborations
          </span>
          <span className="text-sm text-white/70">Building standout digital products with a human touch.</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-200">Gabriel Temtsen</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Gabriel here—crafting fast, thoughtful products with a design-first mindset.
              </h1>
              <p className="text-lg text-white/70">
                I build end-to-end experiences in Next.js and TypeScript, pairing resilient architecture with polished
                interactions. If you need a teammate who ships and sweats the details, let&apos;s talk.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                View projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/5"
              >
                Let&apos;s talk
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="/github"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white hover:text-white"
              >
                GitHub
                <Github className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 shadow-lg shadow-indigo-500/10">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-fuchsia-500/20">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/40 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />

            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">What I&apos;m shipping</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">Live updates</span>
              </div>

              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:border-white/30 transition"
                  >
                    <div className="rounded-full bg-white/10 p-3 text-indigo-100">{service.icon}</div>
                    <div className="space-y-1">
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm text-white/70">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-5">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <Briefcase className="h-4 w-4" />
                  Currently focusing on
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {focus.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-200">Partner feedback</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">People I&apos;ve built alongside</h2>
            </div>
            <span className="glass rounded-full px-4 py-2 text-xs font-semibold text-white/80">
              Trusted collaborators
            </span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.map((collaborator) => (
              <div
                key={collaborator.name}
                className="glass rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-indigo-500/10"
              >
                <p className="text-sm text-white/70">&ldquo;{collaborator.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{collaborator.name}</p>
                  <p className="text-xs text-white/60">{collaborator.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-900/30">
            <div className="flex items-center gap-3 text-sm font-semibold text-indigo-100">
              <Sparkles className="h-4 w-4" />
              Featured updates
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-sm text-white/70">Moxie Fan Token Alerts</p>
                <p className="mt-2 text-lg font-semibold">Farcaster bot delivering live fan-token notifications with Convex.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-sm text-white/70">OnchainVoter</p>
                <p className="mt-2 text-lg font-semibold">Gasless voting DApp built with Wagmi, RainbowKit, and Next.js.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-sm text-white/70">Memora AI</p>
                <p className="mt-2 text-lg font-semibold">Memory-keeping assistant that pairs AI with a calm storytelling UI.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-sm text-white/70">Footy App</p>
                <p className="mt-2 text-lg font-semibold">Farcaster-friendly football mini app with live match summaries.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 p-8 shadow-xl shadow-fuchsia-900/30">
            <div className="flex items-center gap-3 text-sm font-semibold text-indigo-50">
              <Mail className="h-4 w-4" />
              Let&apos;s build something bold
            </div>
            <p className="mt-4 text-lg text-white/80">
              Have an idea that deserves a vivid execution? I love partnering on ambitious products, sleek marketing sites, and
              AI-first experiences.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Start the conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
