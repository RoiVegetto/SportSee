import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = (props) => {
  return (
    <div className="not-found-page">
      <h1>404 - Page non trouvée</h1>
      <p>La requête envoyé a cette page n'existe pas.</p>
      <img src={props.logo} alt="logo de SportSee" className="logo" />
    </div>
  );
};

export default NotFoundPage;
