const About = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-3xl text-center mb-8">
          Hi, Im Gabriel Temtsen, a full-stack developer with expertise in web solutions. I offer a wide
          range of services, from development to web fixes and AI integrations. With years of experience,
          I bring your ideas to life through effective and scalable solutions.
        </p>
        <a
          href="/GabrielTemtsenCV.pdf"
          className="px-6 py-2 bg-blue-600 text-white rounded"
          download
        >
          Download CV
        </a>
      </div>
    );
  };
  
  export default About;
  