import React from 'react';
import '../articles.css';

const teamNfo = (props) =>(
  <div className="articleTeamHeader">
    <div className="team-left" style={{background:`url('/images/teams/${props.team.logo}')no-repeat center`}}>
    </div>
    <div className="team-right">
      <div>
      <span>{props.team.city} {props.team.name}</span>
      </div>
      <div>
        <strong>
          {props.team.stats[0].wins} -L {props.team.stats[0].defeats}
        </strong>
      </div>
    </div>
  </div>
)
export default teamNfo;
