/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center m-3 justify-center h-screen bg-background text-foreground">
      {/* Name Header */}
      <h1 className="text-6xl font-serif font-bold mb-4">Gabriel Temtsen</h1>

      {/* Subtitle */}
      <p className="text-xl font-light mb-10">
        Full Stack Developer | Open Source Developer
      </p>

      {/* Navigation Buttons */}
      <div className="flex space-x-6 mb-10">
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

      {/* PayPal Form */}
      <form
        action="https://www.paypal.com/ncp/payment/YT55ZEG5M3UGW"
        method="post"
        target="_top"
        className="flex flex-col items-center bg-white dark:bg-foreground p-4 rounded-lg shadow-md"
      >
        <input
          className="pp-YT55ZEG5M3UGW px-6 py-3 bg-yellow-500 text-white rounded-lg mb-4 cursor-pointer hover:bg-yellow-600 transition-colors"
          type="submit"
          value="Tip Gabe"
        />

        {/* Payment Methods Image */}
        <img
          className="mb-2"
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="cards"
        />

        {/* Powered by PayPal Section */}
        <section className="text-gray-500 text-sm">
          Powered by{' '}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="paypal"
            style={{ height: '0.875rem', verticalAlign: 'middle' }}
          />
        </section>
      </form>
    </div>
  );
};

export default Home;
