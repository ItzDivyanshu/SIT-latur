import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const TravelPackages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  
  const domesticPackages = [...destinations].filter(dest => dest.category === 'domestic');
  const internationalPackages = [...destinations].filter(dest => dest.category === 'international');
  
  const displayPackages = activeTab === 'domestic' ? domesticPackages : internationalPackages;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-[#FF0000]">Best-Selling</span> Travel Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated experiences to make your travel dreams come true. All inclusive packages with the best prices guaranteed.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab('domestic')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'domestic' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'international' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 shadow-md">
                  Popular
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{pkg.duration}</span>
                  <MapPin className="h-4 w-4 ml-3 mr-1" />
                  <span>{activeTab === 'domestic' ? 'India' : 'International'}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-xs text-gray-500">Starting from</span>
                    <span className="text-red-600 font-bold">{pkg.price}</span>
                  </div>
                  <a 
                    href={`/destinations/${pkg.id}`}
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Book Now <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;