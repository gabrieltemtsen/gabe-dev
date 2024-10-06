import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      {/* Name Header */}
      <h1 className="text-6xl font-serif font-bold mb-4">Gabriel Temtsen</h1>

      {/* Subtitle */}
      <p className="text-xl font-light mb-10">
        Full Stack Developer | Web Solutions Expert
      </p>

      {/* Navigation Buttons */}
      <div className="flex space-x-6">
        <Link href="/about">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300">
            About
          </span>
        </Link>
        <Link href="/projects">
          <span className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300">
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 hover:shadow-xl transition-all duration-300">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
