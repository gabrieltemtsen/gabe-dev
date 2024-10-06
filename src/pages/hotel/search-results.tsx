import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Hotel } from '../hotel/dummyData';

interface SearchResultsProps {
  results: Hotel[];
}

const SearchResults = () => {
  const router = useRouter();
  const { destination, checkIn, checkOut, guests } = router.query;

  const [results, setResults] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3; // Showing only 1 result per page

  const totalPages = Math.ceil(results.length / resultsPerPage);

  useEffect(() => {
    if (destination && checkIn && checkOut && guests) {
      const fetchData = async () => {
        setLoading(true);
        const res = await fetch(`/api/search?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
        const data: SearchResultsProps = await res.json();
        setResults(data.results);
        setLoading(false);
      };
      fetchData();
    }
  }, [destination, checkIn, checkOut, guests]);

  // Get paginated results
  const paginatedResults = results.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">Search Results for `{destination}`</h2>
          <div className="grid grid-cols-1 gap-4 mt-6">
            {paginatedResults.map((hotel) => (
              <div key={hotel.id} className="border p-4 rounded shadow">
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
  );
};

export default SearchResults;
