/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import { hotels, Hotel } from '../hotel/dummyData';

interface SearchQuery {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { destination, checkIn, checkOut }: SearchQuery = req.query as any;

  const filteredHotels: Hotel[] = hotels.filter((hotel) => {
    const isLocationMatch = hotel.location.toLowerCase().includes(destination.toLowerCase());
    const isAvailable =
      new Date(hotel.availability.from) <= new Date(checkIn) && new Date(hotel.availability.to) >= new Date(checkOut);
    return isLocationMatch && isAvailable;
  });

  res.status(200).json({ results: filteredHotels });
}
