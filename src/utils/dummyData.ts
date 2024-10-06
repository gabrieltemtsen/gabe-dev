// data/dummyData.ts
export interface Hotel {
  id: number;
  name: string;
  location: string;
  availability: {
    from: string;
    to: string;
  };
  rooms: number;
}

export const hotels: Hotel[] = [
  // Lagos Hotels
  {
    id: 1,
    name: "Eko Hotel & Suites",
    location: "Lagos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 120,
  },
  {
    id: 2,
    name: "Radisson Blu Lagos",
    location: "Lagos",
    availability: { from: "2024-10-01", to: "2024-11-15" },
    rooms: 85,
  },
  {
    id: 3,
    name: "The Wheatbaker",
    location: "Lagos",
    availability: { from: "2024-09-15", to: "2024-12-10" },
    rooms: 40,
  },
  {
    id: 4,
    name: "Protea Hotel Lagos",
    location: "Lagos",
    availability: { from: "2024-08-01", to: "2024-10-31" },
    rooms: 75,
  },
  {
    id: 5,
    name: "Lagos Continental Hotel",
    location: "Lagos",
    availability: { from: "2024-07-01", to: "2024-12-31" },
    rooms: 100,
  },

  // Abuja Hotels
  {
    id: 6,
    name: "Transcorp Hilton Abuja",
    location: "Abuja",
    availability: { from: "2024-09-01", to: "2024-11-30" },
    rooms: 150,
  },
  {
    id: 7,
    name: "Sheraton Abuja Hotel",
    location: "Abuja",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 110,
  },
  {
    id: 8,
    name: "Fraser Suites Abuja",
    location: "Abuja",
    availability: { from: "2024-09-01", to: "2024-10-31" },
    rooms: 60,
  },
  {
    id: 9,
    name: "Nordic Hotel",
    location: "Abuja",
    availability: { from: "2024-08-01", to: "2024-12-15" },
    rooms: 50,
  },
  {
    id: 10,
    name: "Nicon Luxury Abuja",
    location: "Abuja",
    availability: { from: "2024-11-15", to: "2024-12-31" },
    rooms: 130,
  },

  // Port Harcourt Hotels
  {
    id: 11,
    name: "Golden Tulip Hotel",
    location: "Port Harcourt",
    availability: { from: "2024-09-01", to: "2024-12-10" },
    rooms: 95,
  },
  {
    id: 12,
    name: "Le Meridien Ogeyi Place",
    location: "Port Harcourt",
    availability: { from: "2024-10-05", to: "2024-11-20" },
    rooms: 70,
  },
  {
    id: 13,
    name: "Swiss International Mabisel",
    location: "Port Harcourt",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 60,
  },
  {
    id: 14,
    name: "Bougainvillea Hotel",
    location: "Port Harcourt",
    availability: { from: "2024-08-15", to: "2024-10-31" },
    rooms: 45,
  },
  {
    id: 15,
    name: "Hotel Presidential",
    location: "Port Harcourt",
    availability: { from: "2024-09-01", to: "2024-12-15" },
    rooms: 110,
  },

  // Kano Hotels
  {
    id: 16,
    name: "Bristol Palace Hotel",
    location: "Kano",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 80,
  },
  {
    id: 17,
    name: "Tahir Guest Palace",
    location: "Kano",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 65,
  },
  {
    id: 18,
    name: "Prince Hotel Kano",
    location: "Kano",
    availability: { from: "2024-08-01", to: "2024-11-30" },
    rooms: 55,
  },
  {
    id: 19,
    name: "Royal Tropicana Hotel",
    location: "Kano",
    availability: { from: "2024-07-01", to: "2024-09-30" },
    rooms: 100,
  },
  {
    id: 20,
    name: "Grand Central Hotel",
    location: "Kano",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 90,
  }
];

