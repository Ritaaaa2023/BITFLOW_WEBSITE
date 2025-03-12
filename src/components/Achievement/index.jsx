import React,{useState,useEffect} from 'react'
import "./Achievement.css";
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import Odometer from 'react-odometerjs';
import { GiTeamIdea } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';

const Achievememt = () => {

  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
   const timeOutId = setTimeout(() => {
    setClients(120);
    setProjects(150);
    setWorkers(40);
    setAwards(89);
   },3000);
   return () => clearTimeout(timeOutId);
  },[]);



  return (
    <div className="achievement_container">
      <div className="achievement">
        <div className="icon_container">
          <FaUsersLine />
        </div>
        <div className="details">
          <div className="count_row">
            <h1 className="title">AI-Driven Innovation</h1>
            {/* <h1 className="title">Innovation</h1> */}
          </div>
          {/* <small className=" text_muted">Innovation</small> */}
        </div>
      </div>

      <div className="achievement">
        <div className="icon_container">
          <FaDiagramProject />
        </div>
        <div className="details">
          <div className="count_row">
            {/* <h1 className="title">Tailored</h1> */}
            <h1 className=" title">Tailored Solutions</h1>
          </div>
          {/* <small className="text_muted">Solutions</small> */}
        </div>
      </div>

      <div className="achievement">
        <div className="icon_container">
          <GiTeamIdea />
        </div>
        <div className="details">
          <div className="count_row">
            {/* <h1 className="title">150</h1> */}
            <h1 className=" title">Seamless Integration</h1>
          </div>
          {/* <small className=" text_muted"> Integration</small> */}
        </div>
      </div>

      <div className="achievement">
        <div className="icon_container">
          <FaAward />
        </div>
        <div className="details">
          <div className="count_row">
            {/* <h1 className="title">150</h1> */}
            <h1 className=" title">Scalability & Growth</h1>
          </div>
          {/* <small className="text_muted">Awards Winning</small> */}
        </div>
      </div>
    </div>
  );
}

export default Achievememt
