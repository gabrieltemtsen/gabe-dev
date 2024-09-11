import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Gabriel Temtsen</h1>
      <p className="text-lg text-gray-600 mb-8">Full Stack Developer | Web Solutions Expert</p>
      <div className="flex space-x-4">
        <Link href="/about">
          <span className="px-4 py-2 bg-blue-500 text-white rounded">About</span>
        </Link>
        <Link href="/projects">
          <span className="px-4 py-2 bg-green-500 text-white rounded">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="px-4 py-2 bg-gray-800 text-white rounded">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
