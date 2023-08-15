import React from 'react';
import './Error.css';

function Error(props) {
  return (
    <div className="error">
      <p>
        Nos services sont indisponible pour le moment.
        <br />
        Merci de revenir plus tard.
      </p>
      <img src={props.logo} alt="logo de SportSee" className="logo" />
    </div>
  );
}

export default Error;
