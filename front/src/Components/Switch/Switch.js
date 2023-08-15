import React from 'react';
import './Switch.css';
import { Link } from 'react-router-dom';

const Switch = () => {
  return (
    <div className='select'>
      <h2 >Choisissez un profil :</h2>
      <Link to="/user/12" className='switch-name'>Karl</Link>
      <Link to="/user/18" className='switch-name'>Cécilia</Link>
    </div>
  );
};

export default Switch;
