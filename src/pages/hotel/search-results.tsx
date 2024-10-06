import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Hotel } from '../../utils/dummyData';

interface SearchResultsProps {
  results: Hotel[];
}

const SearchResults = () => {
  const router = useRouter();
  const { destination, checkIn, checkOut, guests } = router.query;

  const [results, setResults] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 2; // Displaying 2 results per page
  const totalPages = Math.ceil(results.length / resultsPerPage);

  const minLoadingTime = 3000; // 3 seconds

  useEffect(() => {
    if (destination && checkIn && checkOut && guests) {
      const fetchData = async () => {
        setLoading(true);
        
        // Set loading time
        const timer = setTimeout(async () => {
          const res = await fetch(`/api/search?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
          const data: SearchResultsProps = await res.json();
          setResults(data.results);
          setLoading(false);
        }, minLoadingTime);

        return () => clearTimeout(timer);
      };
      fetchData();
    }
  }, [destination, checkIn, checkOut, guests]);

  // Get paginated results
  const paginatedResults = results.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="p-8">
      {loading ? (
        // Dot Loader
        <div className="flex justify-center items-center h-screen">
          <div className="dot-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ) : (
        <div>
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
          >
            &larr; Back
          </button>

          <h2 className="text-3xl font-bold mb-6">Search Results for `{destination}`</h2>

          {results.length === 0 ? (
            // No results found message
            <div className="text-center text-lg text-gray-600">
              <p className="mb-4">
                Sorry, no results found for `{destination}`. Please check back later or reach out to us for a customized reservation.
              </p>
              <button
                onClick={handleBack}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Go Back
              </button>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 gap-6">
                {paginatedResults.map((hotel) => (
                  <div key={hotel.id} className="border p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <p>Location: {hotel.location}</p>
                    <p>Rooms available: {hotel.rooms}</p>
                    <p>
                      Available from {hotel.availability.from} to {hotel.availability.to}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  className={`bg-blue-500 text-white p-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`p-2 rounded ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  className={`bg-blue-500 text-white p-2 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
