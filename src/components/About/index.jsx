import React from "react";
import "./About.css";
import {
  about_image,
  about01,
  company01,
  company06,
  company07,
  company08,
  home_image,
} from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="column company_photo">
          <img src={about01} alt="bitflow" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">About Us</span>
            <h3 className="sub_title">AI-Powered Efficiency & Growth</h3>
          </h1>
          <div className="company_media_container">
            <div className="box">
              <img src={company01} alt="" />
            </div>
            <div className="box">
              <img src={company06} alt="" />
            </div>
            <div className="box">
              <img src={company08} alt="" />
            </div>
          </div>
          <p className="text_muted description" style={{color: "#7d7d82"}}>
            Our vision is to empower businesses with AI, cloud, and data
            intelligence, enabling seamless automation, smarter decision-making,
            and scalable growth. We help companies reduce costs, optimize
            operations, and stay ahead in an ever-evolving digital world.
          </p>
          <div className="group">
            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Top-Tier</p>
                <h3>Engineers</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">24/7</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">On-time</p>
                <h3>Delivery</h3>
              </div>
            </div>

            <div className="buttons_container">
              <Link to="project" smooth={true} className="btn">
                Explore
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary" >
               Consult
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
