import React from 'react';
import './Title.css';

function Title({ data }) {
  return (
    <div className="container-title">
      <h1>Bonjour {data}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}

export default Title;
