import React from "react";
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects,hospital } from "../../data";


const Project = () => {
  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  cursor:"pointer",display: "block",background: "rgba(0,0,0,0.5)",borderRadius: "50%",width: "40px",height: "40px",padding: "10px",position: "absolute",top: "50%",transform: "translateY(-50%)",right: "-20px",zIndex: "1"}}
        onClick={onClick}
      />
    );
  }

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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
          dots: true,
         
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
        <Slider {...settings} className="projects_container" >
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="image_container">
                <img src={project.image} alt="" />
              </div>
              <div className="box">
                <h1 className="name">{project.industry}</h1>
              </div>
              <div className="details">
                <h3 className="name">{project.title}</h3>
                <p className="text_muted description">
                  {" "}
                  <ul className="list" style={{ listStyle: "disc" }}>
                    {project.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </p>
              
              </div>
            </React.Fragment>
          ))}
        </Slider >

        <p className="sub_title" >
          Hospital Management System
        </p>
        <Slider {...settings2} className="hospital_container">
          {hospital.map((project, index) => (
            <React.Fragment key={index}>
              <div className="image_container">
                <img src={project.image} alt="" />
              </div>
              <div className="box">
               
               
                  <h4 className="name">{project.title1}</h4>
             
              </div>
              <div className="details">
                <h4 className="name">{project.title2}</h4>
                <p className="text_muted description">
                  {" "}
                  <ul className="list" style={{ listStyle: "disc" }}>
                    {project.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </p>
             
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
