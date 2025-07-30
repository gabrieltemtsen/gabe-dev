import { useRouter } from "next/router";
import localFont from "next/font/local";

const geist = localFont({ src: "./fonts/GeistVF.woff" });

const About = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={`${geist.className} relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground`}>
      <button
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
