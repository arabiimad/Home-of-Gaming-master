import React from 'react';

const ConsolePricing = ({ title, price, description }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="pricing-price">{price}</p>
      <p className="pricing-description">{description}</p>
      <button className="btn btn-primary">Select</button>
    </div>
  );
};

const PCPricing = ({ title, price, description }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="pricing-price">{price}</p>
      <p className="pricing-description">{description}</p>
      <button className="btn btn-primary">Select</button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        <ConsolePricing
          title="Console Gaming"
          price="$10/hour"
          description="Play the latest games on the most popular consoles."
        />
        <PCPricing
          title="PC Gaming"
          price="$8/hour"
          description="Experience gaming on high-end PCs with the latest hardware."
        />
      </div>
    </div>
  );
};

export default Pricing;