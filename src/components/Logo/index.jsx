
import React from 'react'
import "./Logo.css";
import { PiBuildingsFill } from 'react-icons/pi';
import { Link } from 'react-scroll';
const logo =
  "https://bitflow-website.s3.ap-southeast-2.amazonaws.com/image/logo--modified.png";

const Logo = () => {
  return (
    <Link to="header" smooth={true} >
      <div className="logo">
        <div className="icon_container">
          <img className="icon" src={logo} alt="icon" />
        </div>
        <h1 className="name">
          Bit<span>Flow</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo