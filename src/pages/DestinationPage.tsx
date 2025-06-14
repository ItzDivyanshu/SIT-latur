import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { useBooking } from '../context/BookingContext';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const DestinationPage: React.FC = () => {
  const { openBooking } = useBooking();
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Destination not found</h1>
          <a href="/" className="text-primary hover:text-primary-dark mt-4 inline-block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Details</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Experience an unforgettable journey through {destination.name}. Our carefully curated
                itinerary ensures you don't miss any of the must-see attractions while maintaining
                a comfortable pace.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Guided tours of major attractions
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Comfortable accommodation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Local cuisine experiences
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Transportation included
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-gray-800">{destination.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">{destination.category === 'domestic' ? 'India' : 'International'}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Best Time to Visit</p>
                  <p className="text-gray-800">October - March</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Group Size</p>
                  <p className="text-gray-800">2 - 15 people</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-2xl font-bold text-gray-800">{destination.price}</p>
                <button
                  type="button"
                  onClick={() => openBooking(destination.name)}
                  className="mt-4 w-full block bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-md transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;