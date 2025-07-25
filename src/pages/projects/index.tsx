/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto p-8 sm:p-12">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6 transition duration-300 ease-in-out hover:shadow-md"
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
            className="glass flex flex-col p-6 rounded-xl shadow-subtle hover:shadow-deep transition-transform duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-primary mb-2 font-sans">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>
            <span className="mt-auto inline-block bg-accent text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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
