import React from 'react';
import './Title.css';

function Title(props) {
  const firstName = props.firstName;
  return (
    <div className="container-title">
      <h1>Bonjour {firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}

export default Title;
