import React from 'react';
import { Users, Car, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const AboutPage: React.FC = () => {
  const { openBooking } = useBooking();
  const stats = [
    { number: '100+', label: 'Domestic Routes' },
    { number: '7', label: 'International Routes' },
    { number: '230+', label: 'Destinations' },
    { number: '1000+', label: 'Vehicles' }
  ];

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Extensive Routes',
      description: '100+ domestic & 7 international routes connecting 230+ destinations.'
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: 'Diverse Fleet',
      description: '1000+ vehicles ranging from sedans to luxury buses for every need.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Quality Service',
      description: 'Professional drivers and well-maintained vehicles for a safe journey.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you throughout your journey.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Travel Partner
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Connecting destinations, creating memories since 2010
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About South International Travels
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                South International Travels (SIT) is a front runner in the private passenger travel industry, 
                offering seamless connectivity across India and beyond. With 100+ domestic & 7 international routes, 
                we connect travelers to over 230+ destinations, making us one of the most trusted travel partners in the country.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">A Journey for Every Traveler</h3>
                <p className="text-gray-600 mb-6">
                  At SIT, we understand that every journey is unique. Whether you're planning a family vacation, 
                  a business trip, or an adventure with friends, we have the perfect travel solution for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">Comfortable and safe travel experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">Professional and experienced drivers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">Well-maintained and modern fleet</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Travel Experience" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Fleet</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With a fleet of 1000+ vehicles, we offer a wide range of options to suit every traveler's needs. 
                From comfortable sedans to luxury SUVs, and spacious buses, we ensure a comfortable journey for all our passengers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luxury Sedans" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Sedans</h3>
                  <p className="text-gray-600">Perfect for business trips and comfortable city travel with premium amenities.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="SUVs" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium SUVs</h3>
                  <p className="text-gray-600">Spacious and comfortable for family trips and group travel with extra luggage space.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luxury Buses" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Buses</h3>
                  <p className="text-gray-600">Ideal for large groups and long-distance travel with maximum comfort and safety.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Trusted Brands</h3>
              <p className="text-gray-600 text-center mb-6">
                We partner with leading vehicle manufacturers to ensure the highest standards of safety and comfort. 
                Our fleet includes vehicles from trusted brands known for their reliability and performance.
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">TATA</div>
                <div className="text-2xl font-bold text-gray-400">MAHINDRA</div>
                <div className="text-2xl font-bold text-gray-400">MARUTI</div>
                <div className="text-2xl font-bold text-gray-400">TOYOTA</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose Us */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose SIT?</h2>
              <p className="text-lg text-gray-600">
                Experience the difference with our commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Next Trip Today!</h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the difference with South International Travels. Our commitment to quality service, 
              extensive network, and customer satisfaction makes us the preferred choice for travelers across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openBooking()}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Get a Quote
              </button>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;