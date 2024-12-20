
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
  {
    id: 42,
    name: "Ibis Lagos Airport",
    location: "Lagos",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 120,
    },
    {
    id: 43,
    name: "Southern Sun Ikoyi",
    location: "Lagos",
    availability: { from: "2024-10-01", to: "2024-12-15" },
    rooms: 100,
    },
    {
    id: 44,
    name: "Four Points by Sheraton Lagos",
    location: "Lagos",
    availability: { from: "2024-08-01", to: "2024-11-30" },
    rooms: 150,
    },
    {
    id: 45,
    name: "The George Lagos",
    location: "Lagos",
    availability: { from: "2024-07-01", to: "2024-12-31" },
    rooms: 75,
    },
    {
    id: 46,
    name: "Federal Palace Hotel",
    location: "Lagos",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 200,
    },
    {
    id: 47,
    name: "The Blowfish Hotel",
    location: "Lagos",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 60,
    },
    {
    id: 48,
    name: "The Moorhouse Ikoyi",
    location: "Lagos",
    availability: { from: "2024-08-15", to: "2024-12-15" },
    rooms: 90,
    },
    {
    id: 49,
    name: "The Lilygate Lagos",
    location: "Lagos",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 80,
    },
    {
    id: 50,
    name: "Hotel Bon Voyage",
    location: "Lagos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 70,
    },
    {
    id: 51,
    name: "Maison Fahrenheit",
    location: "Lagos",
    availability: { from: "2024-07-01", to: "2024-12-31" },
    rooms: 55,
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
  {
    id: 52,
    name: "Hawthorn Suites by Wyndham Abuja",
    location: "Abuja",
    availability: { from: "2024-08-01", to: "2024-12-31" },
    rooms: 75,
  },
  {
    id: 53,
    name: "Stonehedge Hotel",
    location: "Abuja",
    availability: { from: "2024-09-01", to: "2024-12-15" },
    rooms: 60,
  },
  {
    id: 54,
    name: "Chelsea Hotel Abuja",
    location: "Abuja",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 85,
  },
  {
    id: 55,
    name: "Bolingo Hotel & Towers",
    location: "Abuja",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 100,
  },
  {
    id: 56,
    name: "Summerset Continental Hotel",
    location: "Abuja",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 50,
  },

  // Kano Hotels
  {
    id: 11,
    name: "Bristol Palace Hotel",
    location: "Kano",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 80,
  },
  {
    id: 12,
    name: "Tahir Guest Palace",
    location: "Kano",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 65,
  },
  {
    id: 13,
    name: "Prince Hotel Kano",
    location: "Kano",
    availability: { from: "2024-08-01", to: "2024-11-30" },
    rooms: 55,
  },
  {
    id: 14,
    name: "Royal Tropicana Hotel",
    location: "Kano",
    availability: { from: "2024-07-01", to: "2024-09-30" },
    rooms: 100,
  },
  {
    id: 15,
    name: "Grand Central Hotel",
    location: "Kano",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 90,
  },

  // Enugu Hotels
  {
    id: 16,
    name: "Nike Lake Resort",
    location: "Enugu",
    availability: { from: "2024-09-01", to: "2024-11-30" },
    rooms: 60,
  },
  {
    id: 17,
    name: "Hotel Sunshine Enugu",
    location: "Enugu",
    availability: { from: "2024-10-01", to: "2024-12-15" },
    rooms: 45,
  },
  {
    id: 18,
    name: "Polo Park Hotels",
    location: "Enugu",
    availability: { from: "2024-08-15", to: "2024-10-31" },
    rooms: 70,
  },

  // Rivers Hotels
  {
    id: 19,
    name: "Golden Tulip Hotel",
    location: "Port Harcourt",
    availability: { from: "2024-09-01", to: "2024-12-10" },
    rooms: 95,
  },
  {
    id: 20,
    name: "Le Meridien Ogeyi Place",
    location: "Port Harcourt",
    availability: { from: "2024-10-05", to: "2024-11-20" },
    rooms: 70,
  },
  {
    id: 21,
    name: "Swiss International Mabisel",
    location: "Port Harcourt",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 60,
  },
  {
    id: 22,
    name: "Bougainvillea Hotel",
    location: "Port Harcourt",
    availability: { from: "2024-08-15", to: "2024-10-31" },
    rooms: 45,
  },
  {
    id: 23,
    name: "Hotel Presidential",
    location: "Port Harcourt",
    availability: { from: "2024-09-01", to: "2024-12-15" },
    rooms: 110,
  },

  // Oyo Hotels
  {
    id: 24,
    name: "Premier Hotel Ibadan",
    location: "Ibadan",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 150,
  },
  {
    id: 25,
    name: "Kakanfo Inn & Conference Centre",
    location: "Ibadan",
    availability: { from: "2024-10-15", to: "2024-12-20" },
    rooms: 90,
  },
  {
    id: 26,
    name: "Golden Tulip Ibadan",
    location: "Ibadan",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 80,
  },

  // Anambra Hotels
  {
    id: 27,
    name: "Soprom Hotel",
    location: "Awka",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 50,
  },
  {
    id: 28,
    name: "De Geogold Hotel",
    location: "Onitsha",
    availability: { from: "2024-11-01", to: "2024-12-20" },
    rooms: 45,
  },
  {
    id: 29,
    name: "Stanel Hotels",
    location: "Awka",
    availability: { from: "2024-08-01", to: "2024-12-15" },
    rooms: 70,
  },

  // Delta Hotels
  {
    id: 30,
    name: "Best Western Wetland Hotel",
    location: "Warri",
    availability: { from: "2024-10-01", to: "2024-12-31" },
    rooms: 100,
  },
  {
    id: 31,
    name: "Bon Hotel Delta",
    location: "Warri",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 80,
  },
  {
    id: 32,
    name: "Kayriott Hotel",
    location: "Effurun",
    availability: { from: "2024-08-01", to: "2024-11-30" },
    rooms: 70,
  },

  // Cross River Hotels
  {
    id: 33,
    name: "Transcorp Hotels Calabar",
    location: "Calabar",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 120,
  },
  {
    id: 34,
    name: "Tinapa Lakeside Hotel",
    location: "Calabar",
    availability: { from: "2024-10-01", to: "2024-12-15" },
    rooms: 95,
  },
  {
    id: 35,
    name: "Axari Hotel",
    location: "Calabar",
    availability: { from: "2024-08-15", to: "2024-12-20" },
    rooms: 75,
  },

  {
    id: 36,
    name: "Protea Hotel Benin City",
    location: "Edo",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 80,
  },
  {
    id: 37,
    name: "Lily Gate Hotel Benin",
    location: "Edo",
    availability: { from: "2024-09-15", to: "2024-12-20" },
    rooms: 65,
  },
  {
    id: 38,
    name: "Choice Gate Hotel",
    location: "Ondo",
    availability: { from: "2024-09-01", to: "2024-12-31" },
    rooms: 50,
  },
  {
    id: 39,
    name: "De Legends Hotel Akure",
    location: "Ondo",
    availability: { from: "2024-08-01", to: "2024-11-15" },
    rooms: 60,
  },
  {
    id: 40,
    name: "Immaculate Suites Ado-Ekiti",
    location: "Ekiti",
    availability: { from: "2024-07-01", to: "2024-09-30" },
    rooms: 55,
  },
  {
    id: 41,
    name: "Parkview Hotels",
    location: "Ekiti",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 90,
  },
  {
    id: 100,
    name: "Park viewers Team Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 90,
  },
  {
    id: 110,
    name: "Crispan Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 90,
  },
  {
    id: 111,
    name: "Novel suites Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 10,
  },
  {
    id: 112,
    name: "Grand villa Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 110,
  },
  {
    id: 113,
    name: "Airforce Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 171,
  },
  {
    id: 103,
    name: "Guest House Hotel",
    location: "jos",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 11,
  },
  {
    id: 103,
    name: "Gaji Hotel",
    location: "lafia",
    availability: { from: "2024-11-01", to: "2024-12-31" },
    rooms: 11,
  },
  

];

