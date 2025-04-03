
import React from 'react'
import "./Logo.css";
import { PiBuildingsFill } from 'react-icons/pi';
import { Link } from 'react-scroll';
import { bitflow_logo } from '../../assets';

const Logo = () => {
  return (
    <Link to="header" smooth={true}>
      <div className="logo">
        <div className="icon-logo">
          <img className="icon" src={bitflow_logo} alt="icon" />
        </div>
        <h1 className="name">
          Bit<span>Flow</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo