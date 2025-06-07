import React from "react";

const BrandPartners: React.FC = () => (
  <section className="w-full bg-white py-4">
    <div className="container mx-auto flex justify-center items-center">
      <img
        src="/brand-partners.png"
        alt="Brand Partners and Certifications"
        className="w-full max-w-6xl object-contain h-20 md:h-24 lg:h-28 mx-auto"
        loading="lazy"
      />
    </div>
  </section>
);

export default BrandPartners;
