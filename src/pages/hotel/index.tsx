/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns';

const HotelPage = () => {
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState(1);
  const [open, setOpen] = useState(false); 
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedCheckIn = format(selectionRange.startDate, 'yyyy-MM-dd');
    const formattedCheckOut = format(selectionRange.endDate, 'yyyy-MM-dd');
    router.push(
      `/hotel/search-results?destination=${destination}&checkIn=${formattedCheckIn}&checkOut=${formattedCheckOut}&guests=${guests}`
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hotel-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Find Your Perfect Stay
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Search for affordable hotel deals around Nigeria.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination (state)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
              required
            />
          </div>

          <div className="relative">
            <input
              type="text"
              value={`${format(selectionRange.startDate, 'dd/MM/yyyy')} - ${format(selectionRange.endDate, 'dd/MM/yyyy')}`}
              readOnly
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500  cursor-pointer"
              onClick={() => setOpen(!open)}
              placeholder="Select Date Range"
            />
            {open && (
              <div className="absolute top-12 left-0 text-black z-10 bg-white p-4 shadow-lg rounded-lg">
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  rangeColors={['#4CAF50']}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="1"
              placeholder="Guests"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search Hotels
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelPage;
