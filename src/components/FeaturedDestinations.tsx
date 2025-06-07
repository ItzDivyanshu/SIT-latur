import React, { useState } from 'react';
import { destinations, Destination as BaseDestination } from '../data/destinations';
import { ArrowRight, MapPin, Star, Clock as ClockIcon, Users } from 'lucide-react';

// Extend the base Destination interface with additional properties
interface Destination extends BaseDestination {
  rating?: string;
  location?: string;
  groupSize?: string;
  numericPrice?: number;
}

interface DestinationCardProps {
  dest: Destination;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ dest, isHovered, onHover }) => (
  <div 
    className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
    onMouseEnter={() => onHover(dest.id)}
    onMouseLeave={() => onHover(null)}
  >
    {/* Image with overlay */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={dest.image} 
        alt={dest.name}
        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* Rating Badge */}
      <div className="absolute top-4 left-4 bg-white rounded-full px-2.5 py-1 flex items-center shadow-sm">
        <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-1.5" />
        <span className="text-xs font-semibold text-gray-900">{dest.rating || '4.8'}</span>
      </div>
      
      {/* Location */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center text-white mb-1">
          <MapPin className="h-4 w-4 text-red-400 mr-1" />
          <span className="text-sm font-medium">{dest.location || dest.name}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{dest.name}</h3>
      </div>
    </div>
    
    {/* Card Body */}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-700 text-sm mb-1 flex items-center">
            <ClockIcon className="h-4 w-4 mr-1 text-red-600" />
            {dest.duration}
          </p>
          <p className="text-gray-700 text-sm flex items-center">
            <Users className="h-4 w-4 mr-1 text-red-600" />
            {dest.groupSize || '2-4 People'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 line-through">₹{((dest.numericPrice || 0) * 1.2).toFixed(0)}</p>
          <p className="text-xl font-bold text-red-600">{dest.price}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>
      
      <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center hover:shadow-lg">
        Book Now <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const FeaturedDestinations: React.FC = () => {
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Enhance destinations with additional data
  const enhancedDestinations = featuredDestinations.map(dest => {
    // Extract numeric price from the price string (e.g., '₹25,999' -> 25999)
    const numericPrice = parseFloat(dest.price.replace(/[^0-9.]/g, '')) || 0;
    
    return {
      ...dest,
      rating: '4.8',
      location: dest.name + ', India', // Default location
      groupSize: '2-4 People',
      numericPrice: numericPrice
    };
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">This Month's Top Travel Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Limited-time offers on the most loved locations – don't miss out!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {enhancedDestinations.slice(0, 4).map((dest) => (
            <DestinationCard 
              key={dest.id} 
              dest={dest} 
              isHovered={hoveredCard === dest.id}
              onHover={setHoveredCard}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/all-destinations" 
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg border-2 border-transparent hover:border-red-800"
          >
            View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;