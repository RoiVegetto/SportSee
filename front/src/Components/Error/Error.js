import React from 'react';
import './Error.css';

function Error(props) {
  return (
    <div className="error">
      <p>
        Vos informations sont en cours de chargement ...
        <br />
        Merci de patienter
      </p>
      <img src={props.logo} alt="logo de SportSee" className="logo" />
    </div>
  );
}

export default Error;
