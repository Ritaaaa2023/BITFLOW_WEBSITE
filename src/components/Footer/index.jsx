import React from 'react'
import Logo from '../Logo'
import { footer } from '../../data'
import { Link } from "react-scroll";
import './Footer.css'
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const { Search } = Input;


const Footer = () => {
  const navigate = useNavigate();
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
                />
                <button className="btn" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {footer.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes_name">{list.name}</div>
              <div className="routes_container">
                {/* {list.routes.map((route, i) =>
                  route.path ? (
                    <button
                      key={i}
                      onClick={() => navigate(route.path)}
                      className="route_item"
                      
                    >
                      <p className="name">{route.name}</p>
                    </button>
                  ) : (
                    <Link to={route.id} key={i} className="route_item">
                      <p className="name">{route.name}</p>
                    </Link>
                  )
                )} */}

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
