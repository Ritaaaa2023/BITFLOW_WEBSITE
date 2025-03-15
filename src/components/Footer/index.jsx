import React, { useState } from "react";
import Logo from '../Logo'
import { footer } from '../../data'
import { Link } from "react-scroll";
import './Footer.css'
import { message } from "antd";

import emailjs from "@emailjs/browser"; 





const Footer = () => {
const [email, setEmail] = useState(""); 



const sendEmail = async () => {
  if (!email) {
    message.warning("Please enter your email.");
    return;
  }

  try {
    await emailjs.send(
      "service_5g4m44e", 
     "template_2s3pk5d",
      { user_email: email }, 
      "DGNZsn9pZrhCpb9IT" 
    );

    message.success("Subscribed successful!");
    setEmail(""); 
  } catch (error) {
    console.error("Email send failed:", error);
    message.warning("Subscribed failed. Please try again.");
  }
};




  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />

            <form className="newsletter">
              <h3>Get weekly update</h3>

              <div className="control_container">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="button" onClick={sendEmail}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {footer.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes_name">{list.name}</div>
              <div className="routes_container">
                

                {list.routes.map((route, i) => (
                  <Link to={route.id} key={i} className="route_item">
                    <p className="name">{route.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>
            Copyright &copy; All rights reserved - Bitflow Tech Limited | 2025
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer
