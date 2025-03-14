
import React from 'react'
import"./Teams.css";
import { teams } from "../../data";

const Teams = () => {
  return (
    <section id="team">
      <div className="container">
        <h1 className="title">
          Our
          <span className="g-text"> Team</span>
        </h1>
        <h3 className="sub_title">
          Meet our diverse team of creative minds, developers, and strategists –
          the driving force behind every project's success.
        </h3>
        <div className="teams_container">
          {teams.map((team, index) => (
            <div className="team_card" key={index}>
              <div className="profile_container">
                <img src={team.profile} alt={team.name} />
              </div>
              <div className="details">
                <h3 className="n">{team.name}</h3>
                <p className="text_muted">{team.title}</p>
                <div className="social_container">
                  <p style={{ color: "#7d7d82" }}>{team.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams
