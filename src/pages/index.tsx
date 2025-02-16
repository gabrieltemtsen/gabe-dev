/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Home = () => {
  const maintenance = false;

  if (maintenance) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">👷‍♂️ Were Under Maintenance</h1>
          <p className="text-lg mb-6">Please check back shortly. Thanks for your patience!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800">
      {/* Name Header */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Gabriel Temtsen</h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-10">Full Stack Developer | Open Source Contributor</p>

      {/* Navigation Buttons */}
      <div className="flex space-x-6 mb-10">
        <Link href="/about">
          <span className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
            About
          </span>
        </Link>
        <Link href="/projects">
          <span className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300">
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300">
            Contact
          </span>
        </Link>
      </div>

      {/* PayPal Section */}
      <form
        action="https://www.paypal.com/ncp/payment/YT55ZEG5M3UGW"
        method="post"
        target="_top"
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-400"
      >
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition duration-300"
        >
          Tip Gabe 💛
        </button>
        <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="Payment Methods"
          className="mt-4 w-32"
        />
        <div className="mt-2 text-gray-500 text-sm">
          Powered by{' '}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="PayPal"
            className="inline-block h-4"
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
