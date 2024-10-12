import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
       {/* Back Button */}
       <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
          >
            &larr; Back
          </button>
      {/* Heading */}
      <h2 className="text-5xl font-serif font-bold mb-6">About Me</h2>

      {/* Description */}
      <p className="text-xl font-light max-w-3xl text-center mb-10 leading-relaxed">
      Hi, I&apos;m Gabriel Temtsen, a full-stack developer passionate about building innovative
       web solutions and contributing to open-source projects. I specialize in a wide range of services, 
       including full-stack development, web fixes, and AI integrations. With 3 years of experience and a commitment to scalable, 
      effective solutions, I&apos;ll bring your ideas to life while continuously learning and growing within the open-source community.
      </p>

      {/* Download CV Button */}
      <a
        href="/gabeCV.pdf"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        download
      >
        Download CV
      </a>
    </div>
  );
};

export default About;
