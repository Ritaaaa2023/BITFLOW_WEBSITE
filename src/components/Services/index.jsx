import React from 'react'
import"./Services.css";
import { services } from '../../data';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services_top">
          <h1 className="title">
            Our <span className="g-text">Services</span>
          </h1>
          <h3 className="sub_title">
            Smart solutions to help your business stay ahead
          </h3>
        </div>
        <div className="services_container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services
