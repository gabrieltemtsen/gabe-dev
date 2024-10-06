const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      {/* Heading */}
      <h2 className="text-5xl font-serif font-bold mb-6">About Me</h2>

      {/* Description */}
      <p className="text-xl font-light max-w-3xl text-center mb-10 leading-relaxed">
        Hi, I am Gabriel Temtsen, a full-stack developer with expertise in web solutions. I offer a wide
        range of services, from development to web fixes and AI integrations. With years of experience,
        I bring your ideas to life through effective and scalable solutions.
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
