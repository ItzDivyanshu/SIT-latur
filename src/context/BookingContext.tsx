import React, { createContext, useContext, useState, ReactNode } from 'react';

type BookingContextType = {
  isBookingOpen: boolean;
  selectedDestination: string | null;
  openBooking: (destination?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const openBooking = (destination?: string) => {
    if (destination) setSelectedDestination(destination);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedDestination(null);
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, selectedDestination, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
