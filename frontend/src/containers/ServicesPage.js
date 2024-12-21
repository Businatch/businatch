// ServicesPage.js
import React from 'react';
import ServiceCard from '../components/ServiceCard';

function ServicesPage() {
  const services = [
    { name: 'Web Development', description: 'Building modern and responsive websites', category: 'Development', price: 1000 },
    { name: 'SEO Optimization', description: 'Improving your website ranking on search engines', category: 'Marketing', price: 500 },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;