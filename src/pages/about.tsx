import Head from "next/head";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import { getSiteUrl } from '@/utils/site';

const geist = localFont({ src: "./fonts/GeistVF.woff" });

const About = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={`${geist.className} relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground`}>
      <Head>
        <title>About Gabe | Full-Stack Builder</title>
        <meta
          name="description"
          content="Learn about Gabe's background in full-stack development, design-forward web experiences, and AI-powered product work."
        />
        <link rel="canonical" href={`${getSiteUrl()}/about`} />
      </Head>
      <button
        type="button"
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
      >
        &larr; Back
      </button>
      <div className="glass p-10 rounded-xl flex flex-col items-center w-full max-w-3xl">
        <h2 className="text-5xl font-serif font-bold mb-6">About Me</h2>
        <p className="text-xl font-light text-center mb-10 leading-relaxed">
          Hey there, I&apos;m Gabe. Thanks for dropping by! I love building full-stack apps, fixing up websites, and weaving AI into new ideas. I&apos;ve spent the last few years sharpening my skills and I&apos;m always learning something new. If you have a project in mind, let&apos;s make it happen together.
        </p>
        <div className="w-full mb-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Story Timeline</h3>
          <ol className="relative border-l border-gray-300 dark:border-gray-700 space-y-8">
            <li className="ml-6">
              <span className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-600" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">2019 - 2020</span>
                  <span className="text-xl font-semibold">Support Engineer</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Learned how to communicate clearly with teams, documented processes, and turned bug reports into product improvements.
                </p>
              </div>
            </li>
            <li className="ml-6">
              <span className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-600" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">2021 - 2022</span>
                  <span className="text-xl font-semibold">Front-End Developer</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Rebuilt marketing sites in React, improved accessibility, and shipped components that made teams faster.
                </p>
              </div>
            </li>
            <li className="ml-6">
              <span className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-600" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">2023 - Present</span>
                  <span className="text-xl font-semibold">Full-Stack + AI Builder</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Leading end-to-end builds, integrating AI workflows, and partnering with clients to deliver polished, reliable experiences.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <a
          href="/gabeCV.pdf"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
