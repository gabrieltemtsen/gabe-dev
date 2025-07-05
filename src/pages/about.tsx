import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-foreground">
      <button
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
      >
        &larr; Back
      </button>
      <div className="glass p-10 rounded-xl flex flex-col items-center w-full max-w-3xl">
        <h2 className="text-5xl font-serif font-bold mb-6">About Me</h2>
        <p className="text-xl font-light text-center mb-10 leading-relaxed">
          Hi, I&apos;m a full-stack developer passionate about building innovative web solutions and contributing to open-source projects. I specialize in a wide range of services, including full-stack development, web fixes, and AI integrations. With 3 years of experience and a commitment to scalable, effective solutions, I&apos;ll bring your ideas to life while continuously learning and growing within the open-source community.
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
