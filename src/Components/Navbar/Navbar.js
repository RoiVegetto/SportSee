import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <navbar className="navbar">
      <img src={props.logo} alt="logo de SportSee" className='logo'/>
      <p className='welcome'>Accueil</p>
      <p className='profil'>Profil</p>
      <p className='setting'>Réglage</p>
      <p className='community'>Communauté</p>
    </navbar>
  );
}

export default Navbar;
