/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

const projects = [
  {
    title: 'Moxie Fan Token Alerts',
    description:
      'A project providing Fan Token-related alerts on Farcaster using Convex and Next.js.',
    link: 'https://warpcast.com/gabrieltemtsen/0x08b009ed',
    image: '/projects/moxie.svg',
  },
  {
    title: 'OnchainVoter',
    description: 'A voting DApp built with Next.js, Wagmi, and Rainbowkit.',
    link: 'https://onchain-voter-xyz.vercel.app/',
    image: '/projects/onchain.svg',
  },
  {
    title: 'Hotel Reservation',
    description: 'A hotel reservation app built with Next.js, Tailwind CSS, and TypeScript.',
    link: '/hotel',
    image: '/projects/hotel.svg',
  },
  {
    title: 'Memora AI',
    description: 'An AI powered system for managing your memories beyond death.',
    link: 'https://memora-ai.vercel.app/',
    image: '/projects/memora.svg',
  },
  {
    title: 'Footy App',
    description:
      'A Football mini app and web app built with Next.js, Tailwind CSS, and TypeScript. availble both on web, and on farcaster',
    link: 'https://fc-footy.vercel.app/',
    image: '/projects/footy.svg',
  },
];

const Projects = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground">
      <Head>
        <title>Projects | Next.js Case Studies</title>
        <meta
          name="description"
          content="Browse Gabriel's recent Next.js projects, including Farcaster apps, DApps, and full-stack product builds."
        />
        <link rel="canonical" href={(process as any).env.NEXT_PUBLIC_SITE_URL ? `${(process as any).env.NEXT_PUBLIC_SITE_URL}/projects` : 'https://example.com/projects'} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: projects.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: p.link.startsWith('http') ? p.link : ((process as any).env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + p.link,
                name: p.title,
                image: ((process as any).env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + p.image,
              })),
            }),
          }}
        />
      </Head>
      <div className="max-w-7xl mx-auto p-8 sm:p-12">
      {/* Back Button */}
      <button
        type="button"
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6 transition duration-300 ease-in-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
      >
        &larr; Back
      </button>

      {/* Heading */}
      <h2 className="text-5xl font-serif font-bold text-foreground text-center mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="glass flex flex-col p-6 rounded-xl shadow-subtle hover:shadow-deep transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={160}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-primary dark:text-gray-200 mb-2 font-sans">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>
            <span className="mt-auto inline-block bg-accent text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600">
              View Project &rarr;
            </span>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
