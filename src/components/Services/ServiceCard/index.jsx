
import React from 'react'
import"./ServiceCard.css";

const ServiceCard = ({ name, icon, description }) => {
  return (
    <div className="service_card">
      <div className="icon_container">{icon}</div>
      <h3 className="name">{name}</h3>
      <p className="text_muted description" style={{ color: "#7d7d82" }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
