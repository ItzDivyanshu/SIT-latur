import React from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.5 19.5l19-7-19-7v5l15 2-15 2v5z" /></svg>
    ),
    title: 'Special Flight Fares',
    description: 'We have more than 250+ routes on a daily basis where we have the best deals.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11" /><path d="M9 21V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14" /></svg>
    ),
    title: 'Handpicked Hotels',
    description: 'We have handpicked hotels in destinations to create the finest experiences.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    ),
    title: 'Customized Itineraries',
    description: 'Your trip expert can plan every last detail and make sure everything is just right.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ),
    title: '24/7 Concierge',
    description: 'We hand hold while you travel with a 24×7 concierge where you can get assistance round the clock.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></svg>
    ),
    title: '20+ Offices',
    description: 'Our offices are present in 20+ countries worldwide where we enable you with exceptional deals and quality service.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M9.5 16a4 4 0 0 1 5 0" /></svg>
    ),
    title: '5,00,000+ Happy Customers',
    description: 'More than 5,00,000+ happy travellers have traveled with us on vacations in the last 6 years.'
  }
];

const WhyChooseUs: React.FC = () => (
  <section className="py-16 bg-white text-black">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#19395d]">Why Travel with <span className="text-[#FF0000]">SIT ?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="mb-3 text-primary text-4xl">{benefit.icon}</div>
            <h3 className="text-base md:text-lg font-bold mb-1 text-[#19395d]">{benefit.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;