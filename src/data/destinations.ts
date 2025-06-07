export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: 'domestic' | 'international';
  featured: boolean;
}

export interface Region {
  region: string;
  countries: string[];
}

export const regions: Region[] = [
  {
    region: "Asia",
    countries: [
      "Bali", "Bhutan", "Cambodia", "Dubai", "Hong Kong", "Japan",
      "Malaysia", "Maldives", "Phillippines", "Singapore", "Sri Lanka", "Thailand",
      "Vietnam"
    ]
  },
  {
    region: "Europe",
    countries: [
      "Europe", "France", "Greece", "Italy", "Spain", "Switzerland", "United Kingdom"
    ]
  },
  {
    region: "India",
    countries: [
      "Andamans", "Goa", "Himachal Pradesh", "Jammu and Kashmir", "Kerala",
      "Rajasthan", "Sikkim"
    ]
  },
  {
    region: "Oceania",
    countries: [
      "Australia", "New Zealand"
    ]
  }
];

export const destinations: Destination[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Dive into royal palaces and sweeping desert landscapes',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹25,999',
    category: 'domestic',
    featured: true
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    description: 'Feel the thrill of river rafting and nature\'s calm',
    image: 'https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹18,499',
    category: 'domestic',
    featured: true
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    description: 'Escape to snow-covered peaks and scenic charm',
    image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    category: 'domestic',
    featured: true
  },
  {
    id: 'goa',
    name: 'Goa',
    description: 'Relax on golden beaches and enjoy vibrant nightlife',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹15,999',
    category: 'domestic',
    featured: true
  },
  {
    id: 'shimla-manali',
    name: 'Shimla-Manali',
    description: 'A peaceful hill escape',
    image: 'https://images.pexels.com/photos/2695232/pexels-photo-2695232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹21,499',
    category: 'domestic',
    featured: false
  },
  {
    id: 'thailand',
    name: 'Thailand',
    description: 'Beaches, shopping & nightlife',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹45,999',
    category: 'international',
    featured: true
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    description: 'Vibrant cities and stunning landscapes',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹48,499',
    category: 'international',
    featured: true
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Luxury shopping, ultramodern architecture',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹52,999',
    category: 'international',
    featured: true
  },
  {
    id: 'singapore',
    name: 'Singapore',
    description: 'A global financial center with tropical climate',
    image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹49,999',
    category: 'international',
    featured: true
  },
  {
    id: 'bali',
    name: 'Bali',
    description: 'Indonesian paradise with beaches and rice terraces',
    image: 'https://images.pexels.com/photos/1173807/pexels-photo-1173807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹51,499',
    category: 'international',
    featured: true
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    description: 'Discover the land of the Thunder Dragon and its serene monasteries.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹39,999',
    category: 'international',
    featured: false
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    description: 'Marvel at the ancient wonders of Angkor Wat and vibrant local culture.',
    image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg',
    duration: '5 Days / 4 Nights',
    price: '₹42,999',
    category: 'international',
    featured: false
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    description: 'Experience the dazzling skyline and culinary delights of Hong Kong.',
    image: 'https://images.pexels.com/photos/358696/pexels-photo-358696.jpeg',
    duration: '4 Days / 3 Nights',
    price: '₹55,999',
    category: 'international',
    featured: false
  },
  {
    id: 'japan',
    name: 'Japan',
    description: 'Explore cherry blossoms, ancient temples, and modern cities.',
    image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹89,999',
    category: 'international',
    featured: false
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    description: 'Enjoy tropical beaches, rainforests, and vibrant city life.',
    image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg',
    duration: '5 Days / 4 Nights',
    price: '₹38,999',
    category: 'international',
    featured: false
  },
  {
    id: 'maldives',
    name: 'Maldives',
    description: 'Relax in paradise with turquoise waters and white sand beaches.',
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    duration: '5 Days / 4 Nights',
    price: '₹64,999',
    category: 'international',
    featured: false
  },
  {
    id: 'phillippines',
    name: 'Phillippines',
    description: 'Island hop through crystal clear waters and stunning beaches.',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹48,999',
    category: 'international',
    featured: false
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    description: 'Journey through lush tea gardens and ancient ruins.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
    duration: '5 Days / 4 Nights',
    price: '₹36,999',
    category: 'international',
    featured: false
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    description: 'Sail in Halong Bay and savor the flavors of Vietnamese cuisine.',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹44,999',
    category: 'international',
    featured: false
  },
  
  // --- Europe ---
  {
    id: 'europe',
    name: 'Europe',
    description: 'Embark on a grand tour of Europe’s iconic cities and landscapes.',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
    duration: '12 Days / 11 Nights',
    price: '₹1,99,999',
    category: 'international',
    featured: false
  },
  {
    id: 'france',
    name: 'France',
    description: 'Experience the romance of Paris and the charm of the French Riviera.',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹99,999',
    category: 'international',
    featured: false
  },
  {
    id: 'greece',
    name: 'Greece',
    description: 'Walk among ancient ruins and relax on sun-kissed islands.',
    image: 'https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹92,999',
    category: 'international',
    featured: false
  },
  {
    id: 'italy',
    name: 'Italy',
    description: 'Discover art, history, and cuisine in the heart of Italy.',
    image: 'https://images.pexels.com/photos/161815/pexels-photo-161815.jpeg',
    duration: '8 Days / 7 Nights',
    price: '₹1,09,999',
    category: 'international',
    featured: false
  },
  {
    id: 'spain',
    name: 'Spain',
    description: 'Enjoy vibrant festivals, architecture, and Mediterranean beaches.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹95,999',
    category: 'international',
    featured: false
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    description: 'Marvel at snow-capped Alps and picturesque lakes.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹1,19,999',
    category: 'international',
    featured: false
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    description: 'Explore royal castles, vibrant cities, and scenic countryside.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    duration: '8 Days / 7 Nights',
    price: '₹1,09,999',
    category: 'international',
    featured: false
  },
  
  // --- India ---
  {
    id: 'andamans',
    name: 'Andamans',
    description: 'Unwind on pristine beaches and explore coral reefs.',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    description: 'Breathe in the fresh mountain air and visit hill stations.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹22,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    description: 'Witness the paradise on earth with valleys and lakes.',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg',
    duration: '7 Days / 6 Nights',
    price: '₹34,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Cruise the tranquil backwaters and enjoy lush greenery.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹24,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    description: 'Explore Himalayan landscapes and vibrant monasteries.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '6 Days / 5 Nights',
    price: '₹29,999',
    category: 'domestic',
    featured: false
  },
  
  // --- Oceania ---
  {
    id: 'australia',
    name: 'Australia',
    description: 'Visit iconic landmarks and discover diverse wildlife.',
    image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg',
    duration: '8 Days / 7 Nights',
    price: '₹1,49,999',
    category: 'international',
    featured: false
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    description: 'Experience adventure sports and breathtaking scenery.',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    duration: '8 Days / 7 Nights',
    price: '₹1,39,999',
    category: 'international',
    featured: false
  },
];