import React from 'react'
import"./Header.css";
import { Link } from "react-scroll";
import Achievememt from '../Achievement';
import {home_image} from "../../asset"


const homeImage =
  "https://bitflow-website.s3.ap-southeast-2.amazonaws.com/image/homepagenew.jpg";

const Header= () => {
  return (
    <header id="header" style={{ minHeight: "100vh" }}>
      <div className="container full_height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Smart Tech, <span className="g-text">Smarter Business</span>
            </h1>
            <p className="text_muted description" >
              We empower businesses with AI, cloud, and data intelligence to
              streamline operations, cut costs, and drive growth. From
              automation to customer experience, our smart solutions help you
              scale faster and stay ahead.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="image_container">
              <img src={home_image} alt="" />
            </div>
          </div>
        </div>
        <Achievememt />
      </div>
    </header>
  );
}

export default Header
