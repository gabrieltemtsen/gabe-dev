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
    // Add more projects here
  ];
  
  const Projects = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  