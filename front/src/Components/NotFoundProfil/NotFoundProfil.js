import React from 'react';
import './NotFoundProfil.css';

const NotFoundProfil = (props) => {
  return (
    <div className="not-found-profil">
      <p>Ce profil n'existe pas.</p>
      <img src={props.logo} alt="logo de SportSee" className="logo" />
    </div>
  );
};

export default NotFoundProfil;
