import React, { useState, useEffect } from 'react';
import { X, Loader2, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useBooking } from '../../context/BookingContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '../../lib/utils';
import { destinations } from '../../data/destinations';

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

// The hardcoded destinations array has been removed and is now imported.

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
  const { isBookingOpen, closeBooking, selectedDestination } = useBooking();
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    destination: selectedDestination || '',
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
  // Track if the current step is valid
  const [stepValid, setStepValid] = useState(false);
  
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

  // When the booking form opens, pre-fill the destination if selectedDestination is set
  useEffect(() => {
    if (isBookingOpen && selectedDestination) {
      setFormData(prev => ({ ...prev, destination: selectedDestination }));
    }
  }, [isBookingOpen, selectedDestination]);

  // Re-validate whenever formData or step changes
  useEffect(() => {
    setStepValid(validateStep(step));
    // We don't want to show errors on every keystroke, so don't setErrors here
    // Only update stepValid
    // eslint-disable-next-line
  }, [formData, step]);

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    } else {
      setErrors(errors => ({ ...errors })); // Show errors if not valid
    }
  };
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
      setErrors(errors => ({ ...errors }));
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
        const filteredDestinations = destinations.filter(dest =>
          dest.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Where would you like to go?</h3>
            {selectedDestination ? (
              <input
                type="text"
                value={selectedDestination}
                disabled
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Search for a destination..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.destination && (
                  <p className="text-red-500 text-sm -mt-2 mb-2">{errors.destination}</p>
                )}
                <div className="grid grid-cols-2 gap-4 max-h-60 overflow-y-auto pr-2">
                  {filteredDestinations.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, destination: dest.name }));
                        setErrors(prev => ({ ...prev, destination: '' }));
                      }}
                      className={`p-4 border rounded-lg transition-colors text-left ${
                        formData.destination === dest.name
                          ? 'border-red-500 bg-red-50 text-red-700' 
                          : 'hover:bg-gray-50 border-gray-200'
                      }`}
                    >
                      {dest.name}
                    </button>
                  ))}
                </div>
              </>
            )}
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
              {errors.travelMonth && (
                <p className="text-red-500 text-sm mt-1">{errors.travelMonth}</p>
              )}
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
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.departureDate && (
                <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
              )}
            </div>
            <div className="space-y-2">
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
              {errors.departureCity && (
                <p className="text-red-500 text-sm mt-1">{errors.departureCity}</p>
              )}
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
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
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
              {errors.travelWith && (
                <p className="text-red-500 text-sm mt-1">{errors.travelWith}</p>
              )}
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
                  {errors.numberOfPersons && (
                    <p className="text-red-500 text-sm mt-1">{errors.numberOfPersons}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Your Details</h3>
            <div className="space-y-2">
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
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
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
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
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
                    disabled={isSubmitting || !stepValid}
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
