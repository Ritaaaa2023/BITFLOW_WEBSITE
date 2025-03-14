import React, { useState } from "react";
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        },
      },
    ],
  };

  return (
    <section id="project">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Projects</span>
        </h1>
        <h3 className="sub_title">
          Innovative solutions for multi-industry, cross-platform integration
          and development
        </h3>
        <Slider {...settings} className="projects_container">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="image_container">
                <img src={project.image} alt="" />
              </div>
              <div className="box">
                <h1 className="name">{project.industry}</h1>
                <h2 className="name">{project.title}</h2>
              </div>
              <div className="details">
                <h3 className="name">{project.title}</h3>
                <p
                  className={`text_muted description ${
                    expandedIndex === index ? "expanded" : "collapsed"
                  }`}
                >
                  {project.description}
                </p>
                <button className="btn" onClick={() => toggleReadMore(index)}>
                  {expandedIndex === index ? "Read less" : "Read more"}
                </button>
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
