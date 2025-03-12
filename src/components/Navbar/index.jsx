import React,{useEffect, useState} from 'react'
import"./Navbar.css";
import {navTabs} from "../../data"
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from "../Logo"
import gsap from "gsap"

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
     return setVisible(true);
    }
      setVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }
  ,[])

  useEffect(() => {
    if(visible){
      gsap.fromTo('.navbar', {y: -250}, {y: 0, top:0})
     }
  },[visible])

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open ? <div className='sidebar_overlay' onClick={() => setOpen(!open)}></div> : ""}
      <Logo />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(!open)}
        >
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            key={index}
            to={tab.id}
            activeClass="active"
            className="tab"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(open)}
          >
            <p>{tab.name}</p>
          </Link>
        ))}
      </div>
      <div className="box">
        <Link to="contact" className="btn contact_btn">
          Contact Us
        </Link>

        <div 
        className="icon_container menu_btn"
        onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
}

export default Navbar
