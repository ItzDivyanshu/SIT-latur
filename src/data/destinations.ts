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
      "Andamans", "Assam", "Goa", "Himachal Pradesh", "Jammu and Kashmir",
      "Kerala", "Ladakh", "Rajasthan", "Rameshwaram", "Rishikesh", "Shimla-Manali", "Sikkim"
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
    image: 'https://images.pexels.com/photos/2587004/pexels-photo-2587004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹51,499',
    category: 'international',
    featured: true
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    description: 'Discover the land of the Thunder Dragon and its serene monasteries.',
    image: 'https://images.pexels.com/photos/910368/pexels-photo-910368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹39,999',
    category: 'international',
    featured: false
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    description: 'Marvel at the ancient wonders of Angkor Wat and vibrant local culture.',
    image: 'https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹42,999',
    category: 'international',
    featured: false
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    description: 'Experience the dazzling skyline and culinary delights of Hong Kong.',
    image: 'https://images.pexels.com/photos/3038813/pexels-photo-3038813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹55,999',
    category: 'international',
    featured: false
  },
  {
    id: 'japan',
    name: 'Japan',
    description: 'Explore cherry blossoms, ancient temples, and modern cities.',
    image: 'http://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹89,999',
    category: 'international',
    featured: false
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    description: 'Enjoy tropical beaches, rainforests, and vibrant city life.',
    image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹38,999',
    category: 'international',
    featured: false
  },
  {
    id: 'maldives',
    name: 'Maldives',
    description: 'Relax in paradise with turquoise waters and white sand beaches.',
    image: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹64,999',
    category: 'international',
    featured: false
  },
  {
    id: 'phillippines',
    name: 'Phillippines',
    description: 'Island hop through crystal clear waters and stunning beaches.',
    image: 'https://images.pexels.com/photos/2467670/pexels-photo-2467670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹48,999',
    category: 'international',
    featured: false
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    description: 'Journey through lush tea gardens and ancient ruins.',
    image: 'https://images.pexels.com/photos/32548020/pexels-photo-32548020/free-photo-of-cultural-fusion-temple-in-melsiripura-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹36,999',
    category: 'international',
    featured: false
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    description: 'Sail in Halong Bay and savor the flavors of Vietnamese cuisine.',
    image: 'https://images.pexels.com/photos/1018478/pexels-photo-1018478.jpeg',
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
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    image: 'https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹92,999',
    category: 'international',
    featured: false
  },
  {
    id: 'italy',
    name: 'Italy',
    description: 'Discover art, history, and cuisine in the heart of Italy.',
    image: 'https://images.pexels.com/photos/981686/pexels-photo-981686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '8 Days / 7 Nights',
    price: '₹1,09,999',
    category: 'international',
    featured: false
  },
  {
    id: 'spain',
    name: 'Spain',
    description: 'Enjoy vibrant festivals, architecture, and Mediterranean beaches.',
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹95,999',
    category: 'international',
    featured: false
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    description: 'Marvel at snow-capped Alps and picturesque lakes.',
    image: 'https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    image: 'https://images.pexels.com/photos/2403207/pexels-photo-2403207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    description: 'Breathe in the fresh mountain air and visit hill stations.',
    image: 'https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹22,999',
    category: 'domestic',
    featured: false
  },

  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Cruise the tranquil backwaters and enjoy lush greenery.',
    image: 'https://images.pexels.com/photos/32518621/pexels-photo-32518621/free-photo-of-tropical-riverside-house-with-houseboat-in-kerala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹24,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    description: 'Explore Himalayan landscapes and vibrant monasteries.',
    image: 'https://images.pexels.com/photos/6058457/pexels-photo-6058457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 Days / 5 Nights',
    price: '₹29,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Dive into royal palaces and sweeping desert landscapes',
    image: 'https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    description: 'Escape to snow-covered peaks and scenic charm of the paradise on earth',
    image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹29,999',
    category: 'domestic',
    featured: false 
  },
  {
    id: 'goa',
    name: 'Goa',
    description: 'Relax on golden beaches and enjoy vibrant nightlife',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 Days / 3 Nights',
    price: '₹15,999',
    category: 'domestic',
    featured: false
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
    id: 'rameshwaram',
    name: 'Rameshwaram',
    description: 'Sacred island town with pristine beaches and ancient temples',
    image: 'https://media.istockphoto.com/id/2200798244/photo/closeup-view-of-dhanushkodi-via-drone-image-of-tamil-nadu-india-its-in-the-ramanathapuram.jpg?b=1&s=612x612&w=0&k=20&c=Q9FoVgR12cQvMij1fL81TWw0B1OYt3ndwneNE_a6Lh0=',
    duration: '4 Days / 3 Nights',
    price: '₹18,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'assam',
    name: 'Assam',
    description: 'Explore the tea gardens and wildlife sanctuaries of the Northeast',
    image: 'https://images.pexels.com/photos/974398/pexels-photo-974398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '5 Days / 4 Nights',
    price: '₹24,999',
    category: 'domestic',
    featured: false
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    description: 'Land of high passes with breathtaking landscapes and Buddhist culture',
    image: 'https://images.pexels.com/photos/6576294/pexels-photo-6576294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '7 Days / 6 Nights',
    price: '₹34,999',
    category: 'domestic',
    featured: true
  },
  
  // --- Oceania ---
  {
    id: 'australia',
    name: 'Australia',
    description: 'Visit iconic landmarks and discover diverse wildlife.',
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '8 Days / 7 Nights',
    price: '₹1,49,999',
    category: 'international',
    featured: false
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    description: 'Experience adventure sports and breathtaking scenery.',
    image: 'https://images.pexels.com/photos/16394365/pexels-photo-16394365/free-photo-of-mount-egmont-an-active-volcano-in-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '8 Days / 7 Nights',
    price: '₹1,39,999',
    category: 'international',
    featured: false
  },
];