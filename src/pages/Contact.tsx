import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award, Headphones } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };


  const offices = [
  {
    city: 'Latur (Head Office)',
    address: 'Shop No.02, Avanti Nagar Ring Road, Beside Kailash Bar, Opp. MIDC Police Station, MIDC, Latur, Maharashtra – 413512',
    phone: '+91 8178840574',
    email: 'southinternationaltravels@gmail.com',
  }
];

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: '50,000+', label: 'Happy Customers' },
    { icon: <Award className="h-6 w-6" />, number: '15+', label: 'Years Experience' },
    { icon: <MapPin className="h-6 w-6" />, number: '230+', label: 'Destinations' },
    { icon: <Phone className="h-6 w-6" />, number: '24/7', label: 'Support' }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary-dark/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white pt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Plan Your Perfect Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Ready to explore the world? Our travel experts are here to turn your dreams into unforgettable experiences.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </a>
              <a 
                href="tel:+919876543210" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your preferred way to connect with us. We're committed to providing exceptional service and quick responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="pt-0 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, 
                    please call us directly.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-8 py-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Thank you for your message!</h3>
                    </div>
                    <p>We've received your inquiry and will get back to you within 24 hours. Check your email for a confirmation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">New Booking Inquiry</option>
                          <option value="existing">Existing Booking</option>
                          <option value="complaint">Complaint/Feedback</option>
                          <option value="general">General Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Map & Office Locations */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Offices</h2>
                
                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30284.826643513385!2d76.52345336840959!3d18.41089590951028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf81d8b6548251%3A0x7bd5b3617a45327!2sSIT%20Latur%20(South%20International%20Travels%20Latur)!5e0!3m2!1sen!2sin!4v1749910857270!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SIT Latur Location"
                    className="w-full h-96 rounded-2xl"
                  ></iframe>
                </div>

                {/* Enhanced Office Locations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800">Our Locations</h3>
                  {offices.map((office, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-gray-800 text-lg">{office.city}</h4>
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                          {index === 0 ? 'Head Office' : 'Branch'}
                        </span>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">How can I book a trip with SIT?</h3>
                <p className="text-gray-600">You can book through our website, call our booking hotline, or visit any of our office locations. Our team will help you plan the perfect trip tailored to your preferences and budget.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-600">Cancellation policies vary by package type. Generally, cancellations made 7+ days in advance receive full refund minus processing fees. Contact us for specific terms.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Do you provide travel insurance?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive travel insurance options to protect your trip investment and provide peace of mind during travel. Insurance covers medical emergencies, trip cancellations, and more.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Can I customize my travel package?</h3>
                <p className="text-gray-600">Absolutely! We specialize in creating customized travel experiences. Contact us to discuss your specific requirements, preferences, and we'll create a personalized itinerary just for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;