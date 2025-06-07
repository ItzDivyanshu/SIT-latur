import React, { useState, useEffect } from 'react';
import { X, Loader2, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useBooking } from '../../context/BookingContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '../../lib/utils';

type TravelWith = 'solo' | 'couple' | 'family' | 'friends' | '';

interface FormData {
  destination: string;
  travelMonth: string;
  departureDate: string;
  departureCity: string;
  duration: string;
  travelWith: TravelWith;
  numberOfPersons: number;
  name: string;
  email: string;
  phone: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

// Constants
const DESTINATIONS = [
  'Maldives', 'Bali', 'Dubai', 'Singapore', 'Thailand', 'Europe', 'USA'
] as const;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

// Animation variants
const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 }
  }
};

const stepVariants: Variants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 }
};

// Validation functions
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

// Define the component
const BookingForm = (): JSX.Element | null => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    travelMonth: '',
    departureDate: '',
    departureCity: '',
    duration: '',
    travelWith: '',
    numberOfPersons: 1,
    name: '',
    email: '',
    phone: ''
  });
  
  // Don't return early here - move the conditional rendering to the JSX


  // Close on Escape key press
  useEffect(() => {
    if (!isBookingOpen) return;
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeBooking();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isBookingOpen, closeBooking]);
  
  // Auto-focus the first input when step changes or modal opens
  useEffect(() => {
    if (!isBookingOpen) return;
    
    const firstInput = document.querySelector('input:not([type=hidden]), select');
    if (firstInput instanceof HTMLElement) {
      firstInput.focus();
    }
  }, [step, isBookingOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfPersons' ? parseInt(value) || 1 : value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1 && !formData.destination) {
      newErrors.destination = 'Please select a destination';
    }
    
    if (currentStep === 2) {
      if (!formData.travelMonth) newErrors.travelMonth = 'Please select a month';
      if (!formData.departureDate) newErrors.departureDate = 'Please select a date';
      if (!formData.departureCity) newErrors.departureCity = 'Please enter departure city';
    }
    
    if (currentStep === 3) {
      if (!formData.duration) newErrors.duration = 'Please enter trip duration';
      if (!formData.travelWith) newErrors.travelWith = 'Please select who you\'re traveling with';
      if ((formData.travelWith === 'family' || formData.travelWith === 'friends') && formData.numberOfPersons < 2) {
        newErrors.numberOfPersons = 'Please enter number of persons';
      }
    }
    
    if (currentStep === 4) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(step)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (step < 4) {
      nextStep();
      return;
    }
    
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        success: true,
        message: 'Your quote request has been received! We\'ll contact you shortly.'
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        closeBooking();
        // Reset form state if needed
        // setFormData({...initialFormState});
        // setStep(1);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  const renderStep = (): JSX.Element => {
    
    switch (step) {
      default:
        return <div>Invalid step</div>;
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Where would you like to go?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {DESTINATIONS.map((destination) => (
                <button
                  key={destination}
                  type="button"
                  onClick={() => setFormData({ ...formData, destination })}
                  className={`p-4 border rounded-lg text-center transition-colors ${
                    formData.destination === destination
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Month</label>
              <select
                name="travelMonth"
                value={formData.travelMonth}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select a month</option>
                {MONTHS.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure City</label>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your departure city"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trip Duration</label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select duration</option>
                <option value="3-5 days">3-5 days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3+ weeks">3+ weeks</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Traveling With</label>
              <div className="grid grid-cols-2 gap-3">
                {['Solo', 'Couple', 'Family', 'Friends'].map((option) => {
                  const value = option.toLowerCase() as TravelWith;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, travelWith: value })}
                      className={`p-3 border rounded-lg text-center transition-colors ${
                        formData.travelWith === value
                          ? 'bg-red-100 border-red-500 text-red-700'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            {formData.travelWith && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of {formData.travelWith === 'solo' ? 'Persons' : formData.travelWith === 'couple' ? 'People' : formData.travelWith}
                </label>
                <input
                  type="number"
                  name="numberOfPersons"
                  value={formData.numberOfPersons}
                  onChange={handleChange}
                  min="1"
                  max={formData.travelWith === 'solo' ? '1' : '20'}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="1234567890"
                required
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Where would you like to go?</h3>
            {errors.destination && (
              <p className="text-red-500 text-sm -mt-2 mb-2">{errors.destination}</p>
            )}
            <div className="grid grid-cols-2 gap-4">
              {DESTINATIONS.map((dest: string) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, destination: dest }));
                    setErrors(prev => ({ ...prev, destination: '' }));
                  }}
                  className={`p-4 border rounded-lg transition-colors text-left ${
                    formData.destination === dest 
                      ? 'border-red-500 bg-red-50 text-red-700' 
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">When do you plan to travel?</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Month</label>
              <select
                name="travelMonth"
                value={formData.travelMonth}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select Month</option>
                {MONTHS.map((month: string) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure City</label>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Trip Details</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration (in days)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                min="1"
                required
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Who are you traveling with?</p>
              <div className="grid grid-cols-2 gap-2">
                {['solo', 'couple', 'family', 'friends'].map(option => (
                  <label key={option} className="flex items-center space-x-2 p-2 border rounded-lg">
                    <input
                      type="radio"
                      name="travelWith"
                      value={option}
                      checked={formData.travelWith === option}
                      onChange={handleChange}
                      className="h-4 w-4"
                      required
                    />
                    <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                  </label>
                ))}
              </div>
              {(formData.travelWith === 'family' || formData.travelWith === 'friends') && (
                <div className="mt-2">
                  <label className="block mb-1">Number of Persons</label>
                  <input
                    type="number"
                    name="numberOfPersons"
                    value={formData.numberOfPersons}
                    onChange={handleChange}
                    min="1"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Your Details</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg mb-3"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg mb-3"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        );
      }
    };

  if (!isBookingOpen) {
    return null;
  }
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeBooking}
            aria-hidden="true"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Your Trip</h2>
                <button
                  onClick={closeBooking}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={stepVariants}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between pt-4">
                  <div>
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="px-4 py-2 text-sm"
                        disabled={isSubmitting}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" /> Back
                      </Button>
                    )}
                  </div>
                  <Button
                    type={step === 4 ? 'submit' : 'button'}
                    onClick={step < 4 ? nextStep : undefined}
                    className={cn(
                      'px-6 py-2 text-sm',
                      isSubmitting && 'opacity-75 cursor-not-allowed'
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {step === 4 ? 'Submitting...' : 'Loading...'}
                      </>
                    ) : step === 4 ? (
                      'Submit Request'
                    ) : (
                      'Continue'
                    )}
                  </Button>
                </div>
              </form>

              {!submitStatus && (
                <div className="flex justify-center mt-6 space-x-2">
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        dot <= step ? 'bg-red-600' : 'bg-gray-200',
                        dot === step ? 'w-6 ring-2 ring-offset-2 ring-red-300' : 'w-2'
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default BookingForm;
