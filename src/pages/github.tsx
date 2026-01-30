import Head from "next/head";
import Link from "next/link";
import localFont from "next/font/local";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

type GithubStat = {
  label: string;
  value: string;
};

type HighlightedProject = {
  name: string;
  description: string;
  link: string;
  stars: number;
  language?: string | null;
};

type GithubPageProps = {
  stats: GithubStat[];
  highlightedProjects: HighlightedProject[];
  topTechnologies: string[];
  profileUrl: string;
  lastUpdated: string;
};

const geist = localFont({ src: "./fonts/GeistVF.woff" });

const GithubSummary = ({
  stats,
  highlightedProjects,
  topTechnologies,
  profileUrl,
  lastUpdated,
}: GithubPageProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className={`${geist.className} relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground px-4 py-12`}
    >
      <Head>
        <title>GitHub Summary | Open Source Highlights</title>
        <meta
          name="description"
          content="See Gabriel's GitHub highlights, key stats, and top technologies from recent open-source work."
        />
      </Head>
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
          {message ? (
            <p className="rounded-lg border border-amber-300/70 bg-amber-100/80 px-4 py-3 text-sm font-medium text-amber-900 dark:border-amber-500/60 dark:bg-amber-900/40 dark:text-amber-100">
              {message}
            </p>
          ) : null}
          <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
          >
            Visit GitHub Profile
          </Link>
          <p className="text-sm text-foreground/70">
            Last updated: <span className="font-medium">{lastUpdated}</span>
          </p>
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
            {highlightedProjects.length > 0 ? (
              highlightedProjects.map((project) => (
                <div key={project.name} className="glass p-6 rounded-lg shadow flex flex-col">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-foreground/80 flex-1">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-foreground/70">
                    <div>
                      {project.language ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 text-xs uppercase tracking-wide">
                          {project.language}
                        </span>
                      ) : (
                        <span className="text-xs uppercase tracking-wide">Language N/A</span>
                      )}
                    </div>
                    <span className="font-medium">⭐ {project.stars}</span>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-500"
                  >
                    View Repository
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-foreground/70">No highlighted repositories available.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Top Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {topTechnologies.length > 0 ? (
              topTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))
            ) : (
              <p className="text-foreground/70">No technologies available at the moment.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<GithubPageProps> = async () => {
  const username = "gabrieltemtsen";
  const profileUrl = `https://github.com/${username}`;

  const headers: HeadersInit = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers,
      }),
    ]);

    const isRateLimitedResponse = (response: Response) =>
      response.status === 403 && response.headers.get("x-ratelimit-remaining") === "0";

    const isRateLimited = isRateLimitedResponse(userResponse) || isRateLimitedResponse(reposResponse);

    if (!userResponse.ok) {
      if (isRateLimited) {
        throw new Error("Rate limited");
      }
      throw new Error(`Failed to fetch user profile: ${userResponse.status}`);
    }

    if (!reposResponse.ok) {
      if (isRateLimited) {
        throw new Error("Rate limited");
      }
      throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
    }

    const user = await userResponse.json();
    const repos: Array<{
      name: string;
      description: string | null;
      html_url: string;
      stargazers_count: number;
      language: string | null;
      fork: boolean;
    }> = await reposResponse.json();

    const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    const stats: GithubStat[] = [
      { label: "Public Repositories", value: formatNumber(user.public_repos) },
      { label: "Followers", value: formatNumber(user.followers) },
      { label: "Following", value: formatNumber(user.following) },
      { label: "Total Stars", value: formatNumber(totalStars) },
    ];

    const highlightedProjects: HighlightedProject[] = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        description: repo.description ?? "No description provided.",
        link: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }));

    const languageCount = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      }
      return acc;
    }, {});

    const topTechnologies = Object.entries(languageCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([language]) => language);

    return {
      props: {
        stats,
        highlightedProjects,
        topTechnologies,
        profileUrl,
        lastUpdated: new Date().toISOString(),
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to load GitHub data", error);

    const fallbackStats: GithubStat[] = [
      { label: "Public Repositories", value: "-" },
      { label: "Followers", value: "-" },
      { label: "Following", value: "-" },
      { label: "Total Stars", value: "-" },
    ];
    const message =
      error instanceof Error && error.message === "Rate limited"
        ? "Rate limit reached; try later."
        : "GitHub data is temporarily unavailable. Please check back soon.";

    return {
      props: {
        stats: fallbackStats,
        highlightedProjects: [],
        topTechnologies: [],
        profileUrl,
        lastUpdated: new Date().toISOString(),
      },
      revalidate: 600,
    };
  }
};

export default GithubSummary;
