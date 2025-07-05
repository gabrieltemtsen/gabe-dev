/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import DigitalRain from '@/components/DigitalRain';

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
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <DigitalRain />
      <div className="glass p-10 rounded-xl flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-foreground">Gabriel Temtsen</h1>
        <p className="text-lg mb-10 text-foreground/80">Full Stack Developer | Open Source Contributor</p>
        <div className="flex space-x-6 mb-10">
          <Link href="/about" className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300">About</Link>
          <Link href="/projects" className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-300">Projects</Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-900 transition duration-300">Contact</Link>
        </div>
        <form
          action="https://www.paypal.com/ncp/payment/YT55ZEG5M3UGW"
          method="post"
          target="_top"
          className="glass flex flex-col items-center p-6 w-full max-w-md"
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
          <div className="mt-2 text-gray-800 dark:text-gray-200 text-sm">
            Powered by{' '}
            <img
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
              alt="PayPal"
              className="inline-block h-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
