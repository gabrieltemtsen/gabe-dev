const projects = [
  {
    title: 'Moxie Fan Token Alerts',
    description: 'A project providing Fan Token-related alerts on Farcaster using Convex and Next.js.',
    link: '#',
  },
  {
    title: 'OnchainVoter',
    description: 'A voting DApp built with Next.js, Wagmi, and Rainbowkit.',
    link: '#',
  },
  {
    title: 'Hotel Reservation',
    description: 'A hotel reservation app built with Next.js, Tailwind CSS, and TypeScript.',
    link: '/hotel',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Title Section */}
      <h2 className="text-5xl font-serif font-bold text-foreground text-center mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-foreground p-6 rounded-xl shadow-subtle hover:shadow-deep transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 font-sans">
              {project.title}
            </h3>
            <p className="text-gray-600  mb-6 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-accent font-medium hover:text-blue-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
