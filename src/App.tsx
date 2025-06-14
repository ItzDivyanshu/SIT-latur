import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/booking/BookingForm';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations/:id" element={<DestinationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BookingForm />
    </div>
  );
}

export default App;