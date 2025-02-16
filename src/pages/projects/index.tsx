import { useRouter } from "next/router";

const projects = [
  {
    title: 'Moxie Fan Token Alerts',
    description: 'A project providing Fan Token-related alerts on Farcaster using Convex and Next.js.',
    link: 'https://warpcast.com/gabrieltemtsen/0x08b009ed',
  },
  {
    title: 'OnchainVoter',
    description: 'A voting DApp built with Next.js, Wagmi, and Rainbowkit.',
    link: 'https://onchain-voter-xyz.vercel.app/',
  },
  {
    title: 'Hotel Reservation',
    description: 'A hotel reservation app built with Next.js, Tailwind CSS, and TypeScript.',
    link: '/hotel',
  },
  {
    title: 'Memora AI',
    description: 'An AI powered system for managing your memories beyond death.',
    link: 'https://memora-ai.vercel.app/',
  },
  {
    title: 'Footy App',
    description: 'A Football mini app and web app built with Next.js, Tailwind CSS, and TypeScript. availble both on web, and on farcaster',
    link: 'https://fc-footy.vercel.app/',
  },
];

const Projects = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-background p-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block bg-white dark:bg-foreground p-6 rounded-xl shadow-subtle hover:shadow-deep transition-shadow duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 font-sans">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            <button className="bg-accent text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              View Project &rarr;
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
