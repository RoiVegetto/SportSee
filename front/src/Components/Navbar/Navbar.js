import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={props.logo} alt="logo de SportSee" className='logo'/>
      <p className='welcome'>Accueil</p>
      <p className='profil'>Profil</p>
      <p className='setting'>Réglage</p>
      <p className='community'>Communauté</p>
    </nav>
  );
}

export default Navbar;
