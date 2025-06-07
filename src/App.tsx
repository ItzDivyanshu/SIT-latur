import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import TravelPackages from './components/TravelPackages';
import WhyChooseUs from "./components/WhyChooseUs";
import BrandPartners from "./components/BrandPartners";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DestinationPage from './pages/DestinationPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.title = "SIT Latur - South International Travels";
  }, []);

  return (
    <BookingProvider>
      <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <FeaturedDestinations />
              <TravelPackages />
              <WhyChooseUs />
              <BrandPartners />
            </main>
          } />
          <Route path="/destinations/:id" element={<DestinationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </Router>
    </BookingProvider>
  );
}

export default App;