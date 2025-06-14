import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import TravelPackages from '../components/TravelPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import BrandPartners from '../components/BrandPartners';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <TravelPackages />
      <WhyChooseUs />
      <BrandPartners />
    </main>
  );
};

export default HomePage;
