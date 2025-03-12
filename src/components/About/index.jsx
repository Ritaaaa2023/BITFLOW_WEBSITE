import React from "react";
import "./About.css";
import { about_image, building_1, building_2, building_3 } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="column company_photo">
          <img src={about_image} alt="bitflow" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">About Us</span>
            <h3 className="sub_title">AI-Powered Efficiency & Growth</h3>
          </h1>
          <div className="company_media_container">
            <div className="box">
              <img src={building_1} alt="" />
            </div>
            <div className="box">
              <img src={building_2} alt="" />
            </div>
            <div className="box">
              <img src={building_3} alt="" />
            </div>
          </div>
          <p className="text_muted description">
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
                <p className="text_muted">Long-Term</p>
                <h3>success</h3>
              </div>
            </div>

            <div className="buttons_container">
              <Link to="project" smooth={true} className="btn">
                Explore
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
