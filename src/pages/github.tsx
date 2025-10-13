import { useRouter } from "next/router";
import Link from "next/link";
import localFont from "next/font/local";

const geist = localFont({ src: "./fonts/GeistVF.woff" });

const stats = [
  { label: "Public Repositories", value: "45+" },
  { label: "Open Source Contributions", value: "120+" },
  { label: "Followers", value: "300+" },
  { label: "GitHub Stars", value: "150+" },
];

const highlightedProjects = [
  {
    name: "AI Travel Planner",
    description: "Personalized itinerary builder leveraging AI-driven recommendations.",
    link: "https://github.com/gabetem/ai-travel-planner",
  },
  {
    name: "Dev Portfolio",
    description: "Responsive portfolio showcasing projects, writing, and contact forms.",
    link: "https://github.com/gabetem/portfolio",
  },
  {
    name: "Next.js Starter Kit",
    description: "Production-ready Next.js starter with Tailwind CSS and TypeScript.",
    link: "https://github.com/gabetem/next-starter",
  },
];

const topTechnologies = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Prisma",
];

const GithubSummary = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className={`${geist.className} relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground px-4 py-12`}
    >
      <button
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black dark:text-gray-900 px-4 py-2 rounded mb-6 self-start"
      >
        &larr; Back
      </button>

      <div className="glass p-10 rounded-xl w-full max-w-5xl space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold">GitHub Summary</h1>
          <p className="text-lg text-foreground/80">
            A quick snapshot of Gabe&apos;s GitHub activity, highlighted projects, and favorite technologies.
          </p>
          <Link
            href="https://github.com/gabetem"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
          >
            Visit GitHub Profile
          </Link>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Key Stats</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass bg-white/70 dark:bg-gray-900/60 p-6 rounded-lg text-center shadow"
              >
                <p className="text-sm uppercase tracking-wide text-foreground/60">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Highlighted Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {highlightedProjects.map((project) => (
              <div key={project.name} className="glass p-6 rounded-lg shadow flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-foreground/80 flex-1">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-500"
                >
                  View Repository
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Top Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {topTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GithubSummary;
