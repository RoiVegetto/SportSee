import React from 'react';
import './Count.css';

function Count(props) {
  return (
    <div className="count">
      <img src={props.icon} className="icon-count" alt="icone de" />
      <div className="number-count">
        <p className="number">{props.data}{props.weight}</p>
        <p className="name-count">{props.nameCount}</p>
      </div>
    </div>
  );
}

export default Count;
