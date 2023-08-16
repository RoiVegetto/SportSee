import React from 'react';
import './Loading.css';

const Loading = (props) => {
  return (
    <div className="Loading">
      <p>Chargement...</p>
      <img src={props.logo} alt="logo de SportSee" className="logo" />
    </div>
  );
};

export default Loading;
